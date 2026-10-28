# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Both enterprise B2B procurement managers / contractors / builders and retail DIY fabricators and workshop owners looking to source structural steel, pipes, plates, bars, and construction materials with accurate weights, specifications, and fast turnaround.

## Product Purpose
Provide an authoritative, transparent, and responsive digital procurement storefront for steel and construction supplies. Allow users to inspect material specifications, calculate weight and dimensions dynamically, check multi-brand availability (such as JSW, Tata, SAIL), build quotes/orders, and request custom commercial delivery estimates.

## Positioning
Combines consumer-grade speed and responsive weight/dimensional calculators with industrial B2B procurement rigor: comprehensive brand/spec transparency, guest & authenticated quote workflows, and multi-brand inventory availability without opaque pricing or friction.

## Operating Context
- On-site contractors or procurement desks ordering materials for construction, infrastructure, or fabrication jobs.
- Steel spec verification: standard sizes, thickness, unit weights (kg/m, kg/sqm), grades (e.g., IS 2062, Fe 500D), and mill certificates.
- Multi-step procurement ritual: catalog discovery -> steel weight estimation -> quote submission -> dispatch/delivery negotiation.

## Capabilities and Constraints
- **Frontend Stack**: Astro 7, Tailwind CSS v4, TypeScript, Supabase SSR client.
- **Backend Stack**: Node.js / Express API with SQLite database (`backend/data/bme.sqlite`).
- **Catalog & Spec Calculators**: Dimension, weight, and grade calculators per steel category (TMT, structural beams, plates, hollow sections, angles/channels).
- **Cart & Quotes**: Guest cart with session persistence, user account authentication (email/password & Google OAuth), and quote request submission with delivery location.
- **Brand/Inventory Constraints**: Primary verified mills include JSW, Tata Tiscon/Steel, SAIL, Jindal, Apollo; current catalog data is starter data to be verified against live stock before production launch.
- **Payment & Freight**: Payments, automated freight rates, and live dispatch tracking require production enterprise integrations and are currently quotation-mediated.

## Brand Commitments
- **Name**: BME (Babe Minerals & Energy / BME Steels).
- **Visual Identity**: High-contrast, disciplined industrial palette anchored in deep black (`#000000`), stark canvas (`#ffffff`), and signature industrial yellow (`#ffed00` / `#e6d200`). Confident, typography-forward (NouvelR / modern grotesque typography), squared or tight-radius containers, and high-clarity technical data presentation.
- **Tone & Voice**: Authoritative, transparent, precise, industrial, and dependable. No fluff or consumer gimmicks.

## Evidence on Hand
- Full Astro frontend codebase in [frontend](file:///d:/BME/frontend) with catalog routes, product detail pages, and steel calculators.
- Comprehensive brand design system in [DESIGN.md](file:///d:/BME/DESIGN.md).
- Real material spec sheets, category taxonomy (`frontend/src/data/catalog.ts`), and localized product photography attribution (`/image-credits`).

## Product Principles
1. **Precision & Spec Transparency First**: Every dimension, weight per meter, and material grade must be explicit and unambiguous.
2. **Frictionless Quotation**: Whether a guest builder or registered enterprise buyer, building and submitting an RFQ must take seconds with zero dark patterns.
3. **Industrial Authority**: The interface should reflect heavy industrial confidence—stark contrast, disciplined color restraint, and functional utility over decorative noise.
4. **Resilient Performance**: Clean semantic SSR delivery via Astro, sub-second load times, and responsive mobile utility for on-site checking.

## Accessibility & Inclusion
Target WCAG 2.1 AA compliance across high-contrast text ratios, accessible interactive spec tables, keyboard-navigable steel calculators, and responsive touch targets for mobile job-site access.
