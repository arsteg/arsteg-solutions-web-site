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
npm run build
npm run start -- --port 3102
# Separate terminal, once the server is ready:
node tests/routes.mjs
```

Environment configuration is documented in `.env.example`. Preview indexing is disabled by default. Set `SITE_INDEXABLE=true` only for an approved production build. See `docs/LEAD-INTEGRATION.md` for the existing Supabase/Postmark integration and the current handoff for acceptance-behaviour fixes. Do not put private credentials into public environment variables.

Review screenshots: [desktop](docs/screenshots/home-desktop.jpg), [mobile](docs/screenshots/home-mobile.jpg).
