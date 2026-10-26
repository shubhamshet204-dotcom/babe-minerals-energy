import express from 'express';
import cors from 'cors';
import { DatabaseSync } from 'node:sqlite';
import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import nodemailer from 'nodemailer';
import { OAuth2Client } from 'google-auth-library';
import { categories, brands, topProducts, industries, processSteps, trustPoints, insights } from './data/catalog.js';

const app = express();
const port = process.env.PORT || 4000;
const database = new DatabaseSync(new URL('./data/bme.sqlite', import.meta.url));
const scrypt = promisify(scryptCallback);
const sessionLifetime = 7 * 24 * 60 * 60 * 1000;
const sessionCookieName = 'bme_session';
const verificationLifetime = 24 * 60 * 60 * 1000;
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

database.exec(`
  PRAGMA foreign_keys = ON;
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    email_verified INTEGER NOT NULL DEFAULT 1,
    google_sub TEXT UNIQUE,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS email_verifications (
    token_hash TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS quote_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL,
    requirement TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
`);
const userColumns = new Set(database.prepare('PRAGMA table_info(users)').all().map((column) => column.name));
if (!userColumns.has('email_verified')) database.exec('ALTER TABLE users ADD COLUMN email_verified INTEGER NOT NULL DEFAULT 1');
if (!userColumns.has('google_sub')) database.exec('ALTER TABLE users ADD COLUMN google_sub TEXT');
database.exec('CREATE UNIQUE INDEX IF NOT EXISTS users_google_sub_unique ON users(google_sub) WHERE google_sub IS NOT NULL');
database.prepare('DELETE FROM sessions WHERE expires_at <= ?').run(Date.now());
database.prepare('DELETE FROM email_verifications WHERE expires_at <= ?').run(Date.now());

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:4321', credentials: true }));
app.use(express.json({ limit: '32kb' }));

const authAttempts = new Map();
function limitAuthAttempts(req, res, next) {
  const key = req.ip || 'unknown';
  const now = Date.now();
  const attempt = authAttempts.get(key);
  if (!attempt || now - attempt.startedAt > 15 * 60 * 1000) {
    authAttempts.set(key, { count: 1, startedAt: now });
    return next();
  }
  if (attempt.count >= 10) return res.status(429).json({ ok: false, message: 'Too many attempts. Try again in 15 minutes.' });
  attempt.count += 1;
  return next();
}

function hashToken(token) {
  return createHash('sha256').update(token).digest('hex');
}

function getCookie(req, name) {
  const cookieHeader = req.headers.cookie || '';
  const cookie = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  return cookie ? cookie.slice(name.length + 1) : '';
}

function getSession(req) {
  const token = getCookie(req, sessionCookieName);
  if (!token) return null;
  return database.prepare(`
    SELECT users.id, users.email, users.name, users.company, users.email_verified AS emailVerified
    FROM sessions JOIN users ON users.id = sessions.user_id
    WHERE sessions.token_hash = ? AND sessions.expires_at > ?
  `).get(hashToken(token), Date.now()) || null;
}

function issueSession(res, userId) {
  const token = randomBytes(32).toString('hex');
  const expiresAt = Date.now() + sessionLifetime;
  database.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)')
    .run(hashToken(token), userId, expiresAt);
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${sessionCookieName}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${sessionLifetime / 1000}${secure}`);
}

function requireAuth(req, res, next) {
  const session = getSession(req);
  if (!session) return res.status(401).json({ ok: false, message: 'Sign in to continue.' });
  req.user = session;
  return next();
}

function validEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function frontendOrigin() {
  return (process.env.FRONTEND_ORIGIN || 'http://localhost:4321').replace(/\/$/, '');
}

async function sendVerificationEmail(email, name, token) {
  const verificationUrl = `${frontendOrigin()}/verify-email?token=${encodeURIComponent(token)}`;
  const smtpHost = process.env.SMTP_HOST;
  if (!smtpHost) {
    if (process.env.NODE_ENV === 'production') throw new Error('Email delivery is not configured.');
    console.info(`Email verification link for ${email}: ${verificationUrl}`);
    return verificationUrl;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Verify your BME Steels email address',
    text: `Hello ${name},\n\nVerify your email address to activate your BME Steels account:\n${verificationUrl}\n\nThis link expires in 24 hours.`,
    html: `<p>Hello ${escapeHtml(name)},</p><p>Verify your email address to activate your BME Steels account.</p><p><a href="${verificationUrl}">Verify email address</a></p><p>This link expires in 24 hours.</p>`,
  });
  return null;
}

function createVerificationToken(userId) {
  const token = randomBytes(32).toString('hex');
  database.prepare('DELETE FROM email_verifications WHERE user_id = ?').run(userId);
  database.prepare('INSERT INTO email_verifications (token_hash, user_id, expires_at) VALUES (?, ?, ?)')
    .run(hashToken(token), userId, Date.now() + verificationLifetime);
  return token;
}

app.post('/api/auth/register', limitAuthAttempts, async (req, res) => {
  const name = String(req.body?.name || '').trim();
  const company = String(req.body?.company || '').trim();
  const email = String(req.body?.email || '').trim().toLowerCase();
  const password = req.body?.password;
  if (name.length < 2 || company.length < 2 || !validEmail(email) || typeof password !== 'string' || password.length < 10) {
    return res.status(400).json({ ok: false, message: 'Enter your name, company, valid email, and a password of at least 10 characters.' });
  }
  if (database.prepare('SELECT 1 FROM users WHERE email = ?').get(email)) {
    return res.status(409).json({ ok: false, message: 'An account with this email already exists.' });
  }

  const id = randomBytes(16).toString('hex');
  const salt = randomBytes(16).toString('hex');
  const passwordHash = (await scrypt(password, salt, 64)).toString('hex');
  database.prepare('INSERT INTO users (id, email, name, company, password_salt, password_hash, email_verified, created_at) VALUES (?, ?, ?, ?, ?, ?, 0, ?)')
    .run(id, email, name, company, salt, passwordHash, new Date().toISOString());
  const verificationToken = createVerificationToken(id);
  try {
    const verificationUrl = await sendVerificationEmail(email, name, verificationToken);
    return res.status(201).json({
      ok: true,
      verificationRequired: true,
      message: 'Account created. Check your email for a verification link before signing in.',
      ...(verificationUrl ? { verificationUrl } : {}),
    });
  } catch {
    return res.status(503).json({ ok: false, message: 'Account created, but verification email could not be sent. Use Resend verification or contact support.' });
  }
});

app.post('/api/auth/login', limitAuthAttempts, async (req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  const password = req.body?.password;
  const user = database.prepare('SELECT id, email, name, company, password_salt, password_hash, email_verified FROM users WHERE email = ?').get(email);
  if (!user || typeof password !== 'string') return res.status(401).json({ ok: false, message: 'Email or password is incorrect.' });

  const suppliedHash = Buffer.from(await scrypt(password, user.password_salt, 64));
  const storedHash = Buffer.from(user.password_hash, 'hex');
  if (suppliedHash.length !== storedHash.length || !timingSafeEqual(suppliedHash, storedHash)) {
    return res.status(401).json({ ok: false, message: 'Email or password is incorrect.' });
  }

  if (!user.email_verified) {
    return res.status(403).json({ ok: false, code: 'EMAIL_NOT_VERIFIED', message: 'Verify your email before signing in.' });
  }

  issueSession(res, user.id);
  return res.json({ ok: true, user: { id: user.id, email: user.email, name: user.name, company: user.company } });
});

app.post('/api/auth/resend-verification', limitAuthAttempts, async (req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  if (!validEmail(email)) return res.status(400).json({ ok: false, message: 'Enter a valid email address.' });
  const user = database.prepare('SELECT id, email, name, email_verified AS emailVerified FROM users WHERE email = ?').get(email);
  if (!user || user.emailVerified) return res.json({ ok: true, message: 'If the account needs verification, a new link has been sent.' });

  const token = createVerificationToken(user.id);
  try {
    const verificationUrl = await sendVerificationEmail(user.email, user.name, token);
    return res.json({
      ok: true,
      message: 'If the account needs verification, a new link has been sent.',
      ...(verificationUrl ? { verificationUrl } : {}),
    });
  } catch {
    return res.status(503).json({ ok: false, message: 'Email delivery is temporarily unavailable.' });
  }
});

app.post('/api/auth/verify-email', async (req, res) => {
  const token = String(req.body?.token || '');
  if (token.length < 32 || token.length > 256) return res.status(400).json({ ok: false, message: 'This verification link is invalid or expired.' });
  const verification = database.prepare('SELECT user_id AS userId FROM email_verifications WHERE token_hash = ? AND expires_at > ?')
    .get(hashToken(token), Date.now());
  if (!verification) return res.status(400).json({ ok: false, message: 'This verification link is invalid or expired.' });

  database.prepare('UPDATE users SET email_verified = 1 WHERE id = ?').run(verification.userId);
  database.prepare('DELETE FROM email_verifications WHERE user_id = ?').run(verification.userId);
  return res.json({ ok: true, message: 'Email verified. You can now sign in.' });
});

app.post('/api/auth/google', limitAuthAttempts, async (req, res) => {
  const credential = req.body?.credential;
  if (!process.env.GOOGLE_CLIENT_ID) return res.status(503).json({ ok: false, message: 'Google sign-in is not configured yet.' });
  if (typeof credential !== 'string' || credential.length > 8192) return res.status(400).json({ ok: false, message: 'Google credential is missing or invalid.' });

  try {
    const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: process.env.GOOGLE_CLIENT_ID });
    const payload = ticket.getPayload();
    if (!payload?.sub || !validEmail(payload.email) || payload.email_verified !== true) {
      return res.status(401).json({ ok: false, message: 'Google did not provide a verified email address.' });
    }

    const email = payload.email.toLowerCase();
    let user = database.prepare('SELECT id, email, name, company FROM users WHERE google_sub = ?').get(payload.sub);
    if (!user) {
      user = database.prepare('SELECT id, email, name, company FROM users WHERE email = ?').get(email);
      if (user) {
        database.prepare('UPDATE users SET google_sub = ?, email_verified = 1 WHERE id = ?').run(payload.sub, user.id);
      } else {
        const id = randomBytes(16).toString('hex');
        const salt = randomBytes(16).toString('hex');
        const unusablePasswordHash = (await scrypt(randomBytes(32), salt, 64)).toString('hex');
        const name = String(payload.name || email.split('@')[0]).slice(0, 120);
        database.prepare('INSERT INTO users (id, email, name, company, password_salt, password_hash, email_verified, google_sub, created_at) VALUES (?, ?, ?, \'\', ?, ?, 1, ?, ?)')
          .run(id, email, name, salt, unusablePasswordHash, payload.sub, new Date().toISOString());
        user = { id, email, name, company: '' };
      }
      database.prepare('DELETE FROM email_verifications WHERE user_id = ?').run(user.id);
    }

    issueSession(res, user.id);
    return res.json({ ok: true, user });
  } catch {
    return res.status(401).json({ ok: false, message: 'Google sign-in could not be verified. Please try again.' });
  }
});

app.get('/api/auth/me', (req, res) => {
  const user = getSession(req);
  if (!user) return res.status(401).json({ ok: false, message: 'Not signed in.' });
  return res.json({ ok: true, user });
});

app.post('/api/auth/logout', (req, res) => {
  const token = getCookie(req, sessionCookieName);
  if (token) database.prepare('DELETE FROM sessions WHERE token_hash = ?').run(hashToken(token));
  res.setHeader('Set-Cookie', `${sessionCookieName}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  return res.json({ ok: true });
});

app.get('/api/account/quotes', requireAuth, (req, res) => {
  const quotes = database.prepare('SELECT id, company, requirement, created_at AS submittedAt FROM quote_requests WHERE user_id = ? ORDER BY id DESC LIMIT 25')
    .all(req.user.id);
  return res.json({ ok: true, quotes });
});

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'BME Steels API',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/catalog', (_req, res) => {
  res.json({
    categories,
    brands,
    topProducts,
    industries,
    trustPoints,
    processSteps,
    insights,
  });
});

app.post('/api/quote', (req, res) => {
  const { name, email, phone, company, deliveryLocation } = req.body || {};
  const requirement = `${String(req.body?.requirement || '').trim()}${deliveryLocation ? `\nPreferred delivery area: ${String(deliveryLocation).trim()}` : ''}`;

  if (!name || !email || !company || !requirement) {
    return res.status(400).json({
      ok: false,
      message: 'Name, email, company, and requirement are required.',
    });
  }

  const submittedAt = new Date().toISOString();
  const user = getSession(req);
  database.prepare('INSERT INTO quote_requests (user_id, name, email, phone, company, requirement, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(user?.id || null, name, email, phone || '', company, requirement, submittedAt);

  return res.status(201).json({
    ok: true,
    message: 'Quote request received successfully.',
    payload: {
      name,
      email,
      phone: phone || 'Not provided',
      company,
      requirement,
      submittedAt,
    },
  });
});

app.listen(port, () => {
  console.log(`BME Steels API listening on http://localhost:${port}`);
});
