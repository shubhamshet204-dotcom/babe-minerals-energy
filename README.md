# BME Steels

BME Steels is an Astro storefront with an Express API for steel and construction-material procurement. The UI follows the BME black, white, and yellow design system; marketplace functionality is implemented independently of other brands' visual assets or copy.

## Project Structure

```text
frontend/   Astro pages, components, styles, public assets, and frontend dependencies
backend/    Express API, SQLite database, and backend dependencies
package.json  npm workspace commands for both applications
```

## Features

- Browse material categories, popular brands, industries, and product details.
- View local product and category photography with attribution in `/image-credits`.
- Search the catalog and filter products by brand or category.
- Build a guest cart, adjust quantities, and submit a quote request.
- Choose a preferred delivery area and include it with quote requests.
- Register with email/password, verify the address, or sign in with Google; view saved quote requests after sign-in.
- Persist accounts, sessions, and quote requests in SQLite at `backend/data/bme.sqlite`.

## Run Locally

Use Node.js 22.12 or newer and run `npm install` once at the repository root. Start the API and frontend in separate terminals from the project root:

```sh
npm run server
npm run dev
```

The Astro site runs at `http://localhost:4321`; the Express API runs at `http://localhost:4000`. The API creates its SQLite database on first start. Node may print an experimental warning for the built-in `node:sqlite` module on Node 22.

Copy `backend/.env.example` to `backend/.env` and `frontend/.env.example` to `frontend/.env` when configuring auth. For Google sign-in, create a Google OAuth 2.0 Web client, add the frontend origin to its Authorized JavaScript origins, and set the same client ID in backend `GOOGLE_CLIENT_ID` and frontend `PUBLIC_GOOGLE_CLIENT_ID`. For real verification emails, configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `SMTP_FROM`. Without SMTP in development, the API prints a local verification link to its console. Production fails closed if email sending is not configured.

Set `PORT` to change the API port. Set `FRONTEND_ORIGIN` to the exact frontend origin when deploying the API. Set `PUBLIC_API_URL` at Astro build time if the API is hosted at a different URL.

Each application can also be run directly with `npm run dev --workspace @bme-steels/frontend` or `npm run server --workspace @bme-steels/backend`.

## Routes

- `/products` — catalog search and filters
- `/brands` — brand directory
- `/product/{id}` — product detail
- `/cart` — cart and quote checkout
- `/login` — email/password sign-in, Google sign-in, or account creation
- `/verify-email` — consume an email verification link
- `/account` — business profile and saved quote requests
- `/quote` — general quote form
- `/industries` and `/contact` — industry and sales information

## Important Before Launch

Catalog, brand associations, and indicative prices are starter data in `frontend/src/data/catalog.ts` and `backend/data/catalog.js`. Replace them with verified BME inventory, brand availability, and live pricing before publishing. Password reset delivery, payments, freight calculation, and order/dispatch tracking require production providers or business systems and are not enabled yet.

Photography in `frontend/public/images/` is illustrative, not official brand product photography. Commons image authors, source pages, and licenses are listed at `/image-credits`.

## Validation

```sh
npm run build
npm run check
```
