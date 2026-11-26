# Japan Trip Brain

Where to stay, what's on, and what to do in Japan for any city, month, and traveler type. Built for AI agents first, with a page for humans.

- Full app and API (Vercel): https://japan-trip-brain.vercel.app
- Planner (GitHub Pages): https://akiba-labs.github.io/japan-trip-brain/
- Agent docs: `/agents`, `/llms.txt`, `/openapi.json`
- API: `GET /api/plan?city=kyoto&month=11&traveler=couple`, `GET /api/cities`

Cities: Tokyo, Kyoto, Osaka, Sapporo, Hiroshima, Naha. Data is typical seasonal patterns, not live data; verify festival dates and bloom forecasts each year.

Optional env vars for affiliate tagging: `NEXT_PUBLIC_BOOKING_AID`, `NEXT_PUBLIC_GYG_PARTNER_ID`.

Dev:

```
npm ci
npm test
npm run build
npm run build:pages
npm run dev
```

`npm run build` is the Vercel app (planner, JSON API, OpenAPI, and agent routes). `npm run build:pages` writes a static `out/` for GitHub Pages and checks that internal links and assets resolve under `/japan-trip-brain`. Server routes stay in the repo; the Pages script only moves them aside for that build.

GitHub settings: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Pushes to `main` deploy with `.github/workflows/pages.yml`. The copy-paste steps for the other tool repos are at the top of `scripts/build-pages.mjs`.
