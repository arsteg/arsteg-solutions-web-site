# ARSTEG website

Next.js 15 App Router website for ARSTEG Solutions. This checkout contains the October 2026 redesign; it has not been published.

Start with [the review handoff](docs/REDESIGN-HANDOFF.md) for the audit, design decisions, validation, limitations and launch checklist. [Competitor research](docs/REDESIGN-RESEARCH.md) includes five first-party website comparisons and a search-intent map.

```powershell
npm run dev
npm run lint
npx tsc --noEmit
node --test tests/enquiry.test.mjs
npm run build
npm run start
```

If a development server is already using `.next`, isolate the review build:

```powershell
$env:NEXT_BUILD_DIR = '.next-review'
$env:SITE_INDEXABLE = 'false'   # keep the review build noindex (routes.mjs asserts this)
npm run build
npm run start -- --port 3102
# Separate terminal, once the server is ready:
node tests/routes.mjs
```

Environment configuration is documented in `.env.example`. Production builds are indexable by default; set `SITE_INDEXABLE=false` to force `noindex` + `Disallow: /` (used for preview/review builds and any non-production environment). Vercel non-production deployments and local `next dev` are never indexed. See `docs/LEAD-INTEGRATION.md` for the existing Supabase/Postmark integration and the current handoff for acceptance-behaviour fixes. Do not put private credentials into public environment variables.

Review screenshots: [desktop](docs/screenshots/home-desktop.jpg), [mobile](docs/screenshots/home-mobile.jpg).
