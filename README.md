# Southern Colorado Juneteenth Festival — Briefing PWA

A board / funder briefing for the **Southern Colorado Juneteenth Festival** (June 20–21, 2026) mobile companion app project. Built as a four-tab progressive web app (installable to a phone's home screen) and hosted on GitHub Pages.

Live site (after Pages enables): **https://digitalallyproject.github.io/southerncoloradojuneteenthfestival/**

---

## What's in here

The site has four tabs sharing a unified visual identity (Playfair Display + IBM Plex Sans + Pan-African accent palette on cream paper — matching the existing community heritage-directory site).

| Tab | File | Purpose |
|---|---|---|
| **Heritage Map** | [`heritage-map.html`](./heritage-map.html) | Community-built directory of 104 places across CO Springs, Manitou, Fountain, Pueblo, Denver, statewide |
| **The Festival App** | [`festival-app.html`](./festival-app.html) | Briefing material — what the app is, who's building it, timeline, scope, risks, handoff |
| **Meet ALAI** | [`meet-alai.html`](./meet-alai.html) | What ALAI is, in plain English, with festival-specific use cases (performer backgrounds, monument history, "Did You Know" moments) |
| **Open Questions** | [`open-questions.html`](./open-questions.html) | The eight decisions the cohort needs from the board |

The default landing ([`index.html`](./index.html)) is the briefing index with a "start here" overview of all four tabs.

## Audit trail

Every factual claim on the site cites a source. Three files document the trail:

- [`SOURCES.md`](./SOURCES.md) — Phase 0.2 source-of-truth registry. Every claim in the site cites a row here.
- [`DECISIONS.md`](./DECISIONS.md) — Phase 0.4 decision ledger. Records what was decided, why, and where it was applied.
- [`AUDIT.md`](./AUDIT.md) — Phase 1 + Phase 2 audit notes. Documents every check applied and every finding.

The legacy slide-deck source (the original Gamma input) lives at [`outline.md`](./outline.md) — kept for traceability only.

## Updating the site

1. Edit the relevant `*.html` file (or `styles.css` for shared design changes).
2. If the change introduces a new fact, add a row to `SOURCES.md`.
3. If the change reflects a new decision, append an entry to `DECISIONS.md`.
4. Re-run the Phase 1 audit on the touched section; append findings to `AUDIT.md`.
5. Bump `CACHE_VERSION` in [`sw.js`](./sw.js) so installed PWAs pull the new version.
6. Commit with a date-stamped message; push to `main`. GitHub Pages redeploys automatically.

## Local preview

Any static-file server works. Examples:

```bash
# Python 3
python3 -m http.server 8000
# Then open http://localhost:8000/

# Or via npx
npx serve .
```

The service worker only registers over HTTPS or `localhost`, so PWA install behavior won't fire when opening the file directly via `file://`.

## Visual identity

Anchored to the existing scavenger-hunt directory site so the briefing PWA, the directory, and the production festival app all read as one publication.

- **Fonts:** Playfair Display (display) + IBM Plex Sans (body) + IBM Plex Mono (eyebrow / dates)
- **Palette:** Pan-African `#C8102E` red, `#1A1612` black, `#2D6A3E` green, `#D4A634` gold, on `#F4EFE6` warm cream paper
- **Top rule:** 6px Pan-African flag bar across every page header
- **Card pattern:** `<details><summary>` expandable cards from the heritage directory, reused throughout

Festival logo: served from the festival's Wix CDN (`static.wixstatic.com`) and bundled at [`assets/festival-logo.png`](./assets/festival-logo.png) so it's also available to the installed PWA offline. Hosted-by branding (Digital Ally Project) at [`assets/dap-logo.png`](./assets/dap-logo.png) and [`assets/dap-project2.png`](./assets/dap-project2.png).

## License

Site source code released under Apache 2.0 (matching the codebase repo). Logo assets remain owned by their respective rightsholders (the festival nonprofit for the festival logo; Digital Ally Project for the DAP logos).

## Verify date

Site content last verified against canonical sources: **2026-05-09**. Re-verify before relying on if accessed after **2026-06-08** (30-day staleness threshold).
