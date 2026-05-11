# Audit Log — Phase 1 + Phase 2

Produced per the [iterative-audit-methodology](https://github.com/DigitalAllyProject/southerncoloradojuneteenthfestival). Two audit passes are recorded here:

- **First pass** (afternoon 2026-05-09): the original 16-slide deck source (`outline.md`)
- **Second pass** (evening 2026-05-09): the rebuilt 4-tab PWA after the user's reframe and corrections

---

## Phase 1 — Second-pass audit (the published site)

### Drift findings against the Gamma PDF (S11)

The Gamma-exported PDF (`~/Downloads/Southern-Colorado-Juneteenth-Festival.pdf`, 19 pages) was vetted page-by-page against the source-of-truth registry. Three drift items found and fixed:

| Pages | Drift | Resolution |
|---|---|---|
| 1, 4, 18 | Repeated "JUNE 19, 2026" as the festival date | **Fixed.** All site copy uses the corrected date "June 20–21, 2026" with app-live "June 17, 2026" per D13. |
| 19 | Glossary slide cites `JUNETEENTH-PWA/CLAUDE.MD §GLOSSARY` — that section does not exist in CLAUDE.md (verified via `grep`) | **Did not reproduce.** No glossary slide / page on the site; technical terms either avoided per D6 or expanded inline on `meet-alai.html`. |
| 9 | "How We Keep Our Facts Honest" slide on audit methodology | **Did not reproduce per user direction.** The audit methodology lives in this file; doesn't get a board-facing tab. |
| 5, 10, 14 | Photo references (photo redemption in v1 scope; photo-PII risk bullet; Q4 ALAI free-photo path) | **Removed per D15.** Photos out of v1; Q4 deleted; question count: 8. |
| 6 | Slide had four bullets (cellular + public surfaces + photo privacy + permissions). User said keep reliability bullets only. | **Fixed.** `festival-app.html` § "How the app keeps working when the network is bad" has only the two reliability cards. |

The Gamma PDF's wording elsewhere was vetted as accurate and reused on `festival-app.html` where it was both correct and well-phrased (especially the §"What it is" three cards, the §"Who is building it" framing, and the timeline narrative).

### Per-tab Phase 1 audit (18-point checklist)

For each tab, the 18 checks most relevant to a board-facing briefing site are: #1 audience-appropriate depth · #2 in-scope/out-of-scope explicit · #3 cross-reference accuracy · #4 no hallucinated entities · #5 no drift from canonical sources · #6 recency markers · #7 identifier consistency · #9 arithmetic · #10 cross-file interfaces · #17 testable acceptance criteria · #18 self-audit hook. Heavier executable checks (12–16) and Phase 3 do not apply (this is a briefing site, not a runbook).

#### Tab — `heritage-map.html`
- ✓ #4 no hallucinated entities — the 104 POIs are ported verbatim from `scavenger_hunt_directory.html` (S7) with the same region keys, category badges, and descriptions; nothing invented.
- ✓ #9 arithmetic — POI count = 104, verified via `grep -c '<Placemark>'` against the KML (S8).
- ✓ #5 no drift — markup ported byte-faithful from source between explicit boundary lines (632–666 for filters, 669–2902 for region sections).
- ✓ #1 audience — directory cards are the public-readable copy, not technical.
- ✓ #6 recency marker — footer shows "Last verified · 2026-05-09".

#### Tab — `festival-app.html`
- ✓ #1 audience — board / funder altitude. No technical jargon on user-visible copy. Spot-check: searched output for `RLS`, `Edge Function`, `pre-cache`, `signed link`, `Supabase`, `Workbox`, `BKT` — only "Supabase" appears, and only inside a phrase explaining "the tools we use are common enough" → not user-confusing.
- ✓ #2 in-scope / out-of-scope — § "What's in v1" lists what ships; explicit pointer to Open Questions for what's still being decided.
- ✓ #3 cross-references — every `href="open-questions.html#qN"` resolves (verified Q1, Q3, Q7 anchors all exist on `open-questions.html`).
- ✓ #5 no drift — date corrections from D13 applied throughout (no "June 19" residue); cohort framing per D7 ("community technologists … not paid workforce development"); sign-in providers per D8 (email/Facebook/Google/Microsoft); donations per D9 (general support via Zeffy); distribution per D11 (app-store packaging is the next step).
- ✓ #15 no photos — D15 applied: no photo-redemption card, no photo-PII risk bullet, no photo-tied donation language.
- ✓ #6 recency marker — footer date.
- ✓ #17 acceptance criteria — every "Question N" reference is answerable yes/no/numerically by the board.

#### Tab — `meet-alai.html`
- ✓ #1 audience — every concept translated to plain English. Verified absence of: BKT, Bayesian, Qwen3, MoE, quantization, llama.cpp, KV cache, Cortex, AWS, Bedrock, OpenAI-compatible, multi-round dispatch, fine-tune.
- ✓ #4 no hallucinated entities — all named heritage sites (Knob Hill Urban Arts District, Sun Kissed mural, Five Points Mural Gallery, John Lewis mural, Breonna Taylor mural, Buffalo Soldiers Community Memorial, George Mason gravesite, Buffalo Soldiers Memorial Highway, Fannie Mae Duncan, William Seymour, Justina Ford, Payne Chapel A.M.E., Trinity Missionary Baptist, St. John's Baptist, Solid Rock, Emmanuel Missionary, Mactory, Drip Queen Coffee, Welton Street Cafe) verified to exist as POIs in `scavenger_hunt_directory.html` (S7).
- ✓ #5 no drift — ALAI claims grounded in cheatsheet S10; "14 active learners" + "CCBIT 2026 cohort program" cited. Festival-specific claims marked as "could" / "would" (not "will"), since they depend on Q6 board greenlight.
- ✓ #10 interfaces — explicit cross-links to Q6, Q7, Q8, Q9 (the four ALAI-related board questions); each resolves on `open-questions.html`.
- ✓ #1 jargon scrub — story (Maria) does NOT include the dropped free-photo earning per D15.

#### Tab — `open-questions.html`
- ✓ #2 in-scope — eight questions, each with category, owner, and priority labels.
- ✓ #4 no hallucinated entities — Jen named (per user U1); Azure nonprofit credits ($2,000/yr, currently not realized) per U1; Zeffy API key per U1; ALAI per S10.
- ✓ #5 no drift — Q4 removed per D15. Question IDs preserved (Q1, Q2, Q3, Q5, Q6, Q7, Q8, Q9 — no Q4) so cross-references in the deck conversation stay stable.
- ✓ #9 arithmetic — eight question blocks rendered, eight summary rows above. Counts match.
- ✓ #10 interfaces — Q6, Q7 cross-link from `meet-alai.html`; Q1, Q3 cross-link from `festival-app.html` and `index.html`.
- ✓ #17 acceptance criteria — each question is answerable in the board meeting; placeholders ("Board answer · ____________") explicitly invite the answer to be captured.

#### Tab — `index.html`
- ✓ #1 audience — start-here cards are board-readable.
- ✓ #6 hero metadata shows correct dates: Festival Jun 20–21, App live Jun 17, Heritage places 104, Open board questions 8, Nonprofit handoff Jul 17.
- ✓ #10 cross-links — every "Tab N" card link resolves to the right page.

### PWA shell audit

- ✓ Manifest valid JSON; theme color `#C8102E` matches the design system; display `standalone`; scope `./`.
- ✓ Service worker pre-caches all five pages + styles + manifest + icons + festival logo via `assets/festival-logo.png`.
- ✓ Service worker version-bumped (`CACHE_VERSION = 'v1-2026-05-09'`); old caches cleaned on activate.
- ✓ Icons generated from the festival logo (S12) per user direction D16. Three sizes: 192, 512, maskable-512 (60% safe area).
- ✓ Install prompt available in DevTools when served over HTTP/HTTPS (not `file://`).

---

## Phase 2 — Cross-file checks

### 2.1 Reference graph integrity
- All internal links between the five HTML pages resolve (verified by spot-grep for `href="<page>.html"` patterns).
- All anchor links to open-questions.html#qN exist on the target page (Q1, Q2, Q3, Q5, Q6, Q7, Q8, Q9 anchors verified).
- External link to Wix festival logo CDN: `static.wixstatic.com/.../85cc7f_b1586c1fed724103a23d782738c165d2~mv2.png` — confirmed serving the 213×120 PNG (downloaded successfully, 38 KB).
- T1 (workstream briefs) and T2 (umbrella plan v3) flagged as "NOT YET IN REPO" in SOURCES.md; the site does not cite their content.

### 2.2 Decision-ledger reconciliation
- D1–D18 each map to ≥1 site location (per the "Where applied" lines in DECISIONS.md). Spot-verified:
  - D5 (consultative tone) → Open Questions tab uses question-framed language throughout ✓
  - D6 (plain English) → searched all five pages for banned terms (RLS, Edge Function, pre-cache, BKT) → only "Supabase" once, in a benign explanation context ✓
  - D7 (cohort framing) → festival-app.html § "Who is building it" ✓
  - D8 (multi-provider sign-in) → festival-app.html § "What's in v1" + § "What it is" ✓
  - D13 (June 20–21 dates) → searched for "June 19" → no instances on the site ✓
  - D15 (no photos) → searched for "photo" on each page → only references in `outline.md` (legacy) and `meet-alai.html` (in the context of "the data signal of what learners absorb"). No user-facing photo-redemption / photo-unlock language ✓
  - D16 (festival logo) → manifest.webmanifest references icons; icons regenerated from festival-logo.png per user direction ✓
  - D18 (tab titles) → nav on all five pages shows "Heritage Map · The Festival App · Meet ALAI · Open Questions" ✓

### 2.3 Glossary alignment
- "ALAI" expanded on first use on `meet-alai.html` and `index.html` ("Ally-Led Adaptive Intelligence" + "Digital Ally Project's AI tutoring agent").
- "Zeffy" expanded inline on `festival-app.html` ("Zeffy's no-fee platform").
- "Apache 2.0" expanded inline on `festival-app.html` and README.
- No PWA / RLS / Edge Function references appear on user-visible body text.

### 2.4 Conflict detection
- Festival dates: same on every page (June 20–21, 2026).
- App-live date: same on every page (June 17, 2026).
- ALAI window: stays June 17–24 (D14, never contradicted).
- Question count: 8 on every page (index hero meta, open-questions summary, open-questions detail blocks).
- POI count: 104 on every page (index hero meta, festival-app.html § "How the directory could connect", heritage-map.html `<title>` + `<meta description>` + `<input id="result-count">`).

### 2.5 Coverage map
- Q: What is this? → `index.html`, `festival-app.html` § "What it is"
- Q: Who builds it? → `festival-app.html` § "Who is building it"
- Q: Timeline? → `festival-app.html` § "Timeline"
- Q: What ships? → `festival-app.html` § "What's in v1"
- Q: How does it stay reliable? → `festival-app.html` § "How the app keeps working when the network is bad"
- Q: How does it connect to community context? → `heritage-map.html` (the directory itself) + `festival-app.html` § "How the directory could connect"
- Q: What's ALAI? → `meet-alai.html` (full tab)
- Q: What does the nonprofit get? → `festival-app.html` § "What the nonprofit receives"
- Q: What do we need from the board? → `open-questions.html` (full tab)
- Every audience-relevant question is covered by exactly one canonical location plus cross-links.

### 2.6 Refinement back-fill
Refinements surfaced during this site's drafting that affect the upstream `JuneTeenth-PWA/CLAUDE.md`:
- D7–D11, D13, D15 (cohort framing, sign-in, donations, analytics, distribution, festival dates, no photos) — queued for separate reconciliation.
- The "8 roles" enum count was not contested but should be re-verified against the user's actual operational plan before the next CLAUDE.md edit (the site does not cite "8" anywhere — it lists role names instead).

---

## Phase 3 — Operational readiness

**Not applicable.** Briefing PWA, not a runbook or playbook.

The PWA install + service worker + offline behavior IS executable surface, however, so a minimal verification was run:
- ✓ Manifest validates as JSON.
- ✓ Service worker registers without errors when served over `http://localhost`.
- ✓ Pre-cache list contains all five HTML pages, styles.css, manifest, icons, and festival-logo.png.
- ⏳ Install-to-home-screen behavior on a real phone — not yet tested. To test post-publish: open the GitHub Pages URL on a phone, tap browser menu → "Add to Home Screen", confirm icon shows the festival logo (per D16) and tapping it opens the site in standalone mode.

---

## Phase 4 — Resume protocol

If picking this site back up days/weeks later:

1. **Re-read** every HTML page end-to-end and `DECISIONS.md` D1–D18 — not summarized, read.
2. **Reload** `SOURCES.md`. Re-pull any live state that decays:
   - Re-check POI count: `grep -c '<Placemark>' "$HOME/Downloads/Juneteenth Scavenger Hunt/southern_colorado_juneteenth_scavenger_hunt.kml"` should return 104.
   - Re-check whether `JuneTeenth-PWA/workstreams/` and `JuneTeenth-PWA/Juneteenth_Festival_PWA_Plan_v3.md` now exist; if they do, integrate their facts and flip T1/T2 in `SOURCES.md` from "NOT YET IN REPO" to a real verify date.
   - Re-check the festival logo URL still serves the same PNG.
   - Re-check whether `CLAUDE.md` has been updated to match D7–D15 (the reconciliation queue items).
3. **Scan for new decisions** — board questions Q1–Q9 may have landed; if so, move resolved questions out of `DECISIONS.md` "Open board questions" table into D-entries.
4. **Re-run Phase 1** for any tab that changes.
5. **Bump `CACHE_VERSION`** in `sw.js` if any HTML/CSS/asset changes shipped, so installed PWAs pull the new content.
6. **Re-verify the published Pages URL** loads cleanly on mobile.

---

## Discipline rules — what's enforced here

- Every tab got the full Phase 1 audit. (Methodology Discipline Rule 1.)
- Audit work shown above. (Discipline Rule 2.)
- Drift findings (the three Gamma items, the photos cut, the date correction, the slide-9 removal) were caught and fixed in-line, not deferred. (Discipline Rule 3.)
- Source-of-truth conflict (CLAUDE.md vs user clarification) resolved in favor of user clarification per Discipline Rule 5 — the user is canonical for current operating reality; CLAUDE.md is a forward plan that hasn't caught up yet. Reconciliation queued separately.
