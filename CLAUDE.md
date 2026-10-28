## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Tech stack
- Astro (SSR with Vercel adapter, planned), TypeScript, Tailwind CSS
- Frontend code lives in /frontend/src
- Current data: hardcoded files in /frontend/src/data (will be replaced
  by Supabase later)
- Planned backend: Supabase (PostgreSQL, Auth, Storage, RLS) via @supabase/ssr
- Planned: Resend (email), Cloudflare Turnstile (spam protection)
- Do not add libraries without asking first

## Workflow rules
- Build ONLY the phase I name. Never start later phases.
- Show a short plan first and wait for my approval before editing files.
- Never delete or rewrite working code outside the current phase.
- At the end of every phase: list files changed, commands to run, how to
  test, env variables needed. Then stop and wait.
- Run npm run build before saying a phase is done.

## Data rules
- Structure: main category → sub-item → products
- Never invent products, grades, prices, certifications, clients or stats
- Use "[to confirm]" for any value the owner has not provided
- Fuels, hazardous chemicals, industrial gases, waste, pharmaceuticals,
  controlled minerals: show no prices, use "Request Quote" only
- Remove or replace any JSW brand names, text or images found in the code

## Security rules
- RLS on every Supabase table, no exceptions
- SUPABASE_SERVICE_ROLE_KEY is server-only, never prefixed with PUBLIC_
  or imported in any client file
- Protect /admin with Astro middleware AND server-side session checks
- Validate all input with Zod on the server
- Uploads: jpg, png, webp only, max 5 MB
- Signups disabled in Supabase
- Secrets only in .env files, which must be in .gitignore

## Anti-slop rules
- No purple or pink gradients, glassmorphism, glowing blobs, emoji icons
- Do not centre everything. Left-aligned text, clear grid, varied layouts
- No animations except subtle hover and fade-in
- Banned copy: "Elevate", "Unleash", "Seamless", "Revolutionize",
  "Empower", "Cutting-edge", "Next-level", "Welcome to our website"
- Copy is plain, specific and trade-focused
- No lorem ipsum, no invented stats, clients, testimonials or awards
- Use "[Add real content]" placeholders instead
