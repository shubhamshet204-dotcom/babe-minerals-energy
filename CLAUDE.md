# BME Steels — AGENTS.md

## Repo layout
- `frontend/` — Astro 7 + Tailwind CSS v4 + TypeScript. Pages/components/styles under `frontend/src`; starter catalog data in `frontend/src/data/catalog.ts`.
- `backend/` — Express API + SQLite. Entry: `backend/index.js`. Database: `backend/data/bme.sqlite` (created on first start, gitignored).
- Root npm workspaces: `@bme-steels/frontend` and `@bme-steels/backend`.

## Commands (run from repo root, Node >= 22.12)
- `npm install` — install both workspaces once.
- `npm run server` — API on http://localhost:4000 (`node --env-file-if-exists=.env index.js`).
- `npm run dev` — Astro dev on http://localhost:4321. Run API and frontend in separate terminals.
- Kilo: `astro dev --background` runs the frontend server in the background; manage with `astro dev stop/status/logs`.
- `npm run build` — frontend production build.
- `npm run check` — `astro check` (TypeScript) then `node --check` on backend.
- `npm run preview` — preview the built frontend.

## Environment
- Copy `backend/.env.example` → `backend/.env` and `frontend/.env.example` → `frontend/.env` before auth/email features work.
- `.env` files and `backend/data/*.sqlite` are gitignored; never commit secrets.
- `PUBLIC_API_URL` must match the API origin at Astro build time when not `http://localhost:4000`.

## Data rules
- Catalog data (products, grades, prices) is starter data — verify against live BME inventory before publishing.
- Never invent products, grades, prices, certifications, clients, or stats. Use "[to confirm]" for unknown values.

## Design (from DESIGN.md)
- Palette: black `#000000`, canvas `#ffffff`, industrial yellow `#ffed00` (accent only, paired with black text).
- NouvelR typography; square corners; no glassmorphism, gradients, or emoji icons; left-aligned, grid-based layouts.
- Plain, trade-specific copy — no invented testimonials, stats, or lorem ipsum.

## Verification
- `npm run build && npm run check` before finishing a change.
- No test suite or CI exists in this repo.
