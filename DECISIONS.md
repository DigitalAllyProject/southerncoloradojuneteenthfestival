# Decision Ledger — Phase 0.4

A single running document capturing cross-cutting decisions for the briefing PWA. Each entry: decision → why → where applied → when to revisit.

---

## D1 — Audience for the deck (now: site)

**Decision:** Festival board + funders.
**Why:** User clarification 2026-05-09. Load-bearing job is to surface open questions for board input; secondary is to inform funders.
**Where applied:** entire site (tone, depth, jargon-stripping); especially the **Open Questions** tab.
**When to revisit:** if the site is re-purposed for contributor / public-recruitment audience, fork the content.

## D2 — Heritage directory framing

**Decision:** Treated as community context AND as the seed dataset for the festival map. Not new feature scope.
**Why:** User clarification 2026-05-09. Adding hunt mechanics in v1 would expand scope past what six weeks supports.
**Where applied:** `heritage-map.html` (full directory rendered), `festival-app.html` § "How the directory could connect to the app".
**When to revisit:** post-festival; the nonprofit could decide to wire hunt mechanics for the next year's festival or as a year-round companion.

## D3 — Publication target

**Decision:** Standalone repo at `github.com/DigitalAllyProject/southerncoloradojuneteenthfestival`, public, GitHub Pages enabled.
**Why:** User selected the standalone option. Clean separation; the briefing repo can be archived post-festival without touching the codebase repo.
**Where applied:** all README references; footer of every tab.
**When to revisit:** if the festival nonprofit wants to relocate to its own domain post-handoff.

## D4 — Call to action

**Decision:** None. Informational + decision-eliciting.
**Why:** User clarification 2026-05-09.
**Where applied:** absence of any sponsor / partnership ask.

## D5 — Tone

**Decision:** Consultative, not declarative. Frame undecided items as questions the board owns. Avoid "deliberately not building" and "out of scope" as final words.
**Why:** Direct user feedback 2026-05-09 — *"this is to ask questions not dictate."*
**Where applied:** entire site; explicitly enforced on the Open Questions tab.
**When to revisit:** never — durable preference for board-facing material.

## D6 — Plain-English language for body content

**Decision:** No technical jargon on user-visible copy. Translate to everyday analogies.
**Why:** Direct user feedback 2026-05-09 — caught the bullet "Photos stream from a private store via signed links" with *"what does this mean?"* The jargon failed.
**Where applied:** every tab.
**Specific terms banned:** RLS, signed links, private store, dependency updates, safety pipeline, vendor lock-in, PWA, Edge Functions, cellular-hardening, pre-cache, 30-day retention purge, BKT, Bayesian, Qwen3, MoE, quantization.
**When to revisit:** never for board-facing material. If retargeted for technical audience, fork.

---

## User corrections to CLAUDE.md (canonical for this site)

`CLAUDE.md` is the codebase's authoritative document but was authored as a forward plan. Several of its assertions diverge from how the festival actually operates as of 2026-05-09. For the site, the user's clarification wins.

### D7 — Cohort model
**Decision:** Community technologists gaining experience. **Not** paid workforce development.
**Source:** User clarification 2026-05-09.
**Supersedes:** `CLAUDE.md` § "Project identity" — "six-person workforce-development cohort under a paid lead".
**Where applied:** `festival-app.html` § "Who is building it"; `index.html` § "At a Glance".
**Reconciliation:** queued separately.

### D8 — Sign-in providers
**Decision:** Email, Facebook, Google, Microsoft (multi-provider).
**Source:** User clarification 2026-05-09.
**Supersedes:** `CLAUDE.md` Stack table — "Microsoft Entra External ID" only.
**Where applied:** `festival-app.html` § "What's in v1", § "What it is, in one slide"; `index.html` § "At a Glance".
**Reconciliation:** queued separately.

### D9 — General donations are in scope
**Decision:** General donation campaigns happen via Zeffy.
**Source:** User clarification 2026-05-09.
**Supersedes:** `CLAUDE.md` § "Known residuals" — "No general donation campaigns".
**Where applied:** `festival-app.html` § "What's in v1" (Donations via Zeffy card).
**Reconciliation:** queued separately.

### D10 — Analytics is an open decision
**Decision:** Analytics scope = TBD pending board input (Q8 on Open Questions tab).
**Source:** User clarification 2026-05-09.
**Supersedes:** `CLAUDE.md` § "Excluded by design" — "No analytics SDKs in v1".
**Where applied:** `open-questions.html` Q8.
**Reconciliation:** queued separately.

### D11 — App-store distribution path is planned
**Decision:** PWA today; planned packaging for Google Play + Apple App Store.
**Source:** User clarification 2026-05-09.
**Supersedes:** `CLAUDE.md` implicit PWA-only assumption.
**Where applied:** `festival-app.html` § "What it is, in one slide"; `index.html` § "At a Glance".
**Reconciliation:** queued separately.

---

## Second-pass decisions (2026-05-09 evening)

### D12 — Deliverable shape: 4-tab PWA, not a slide deck

**Decision:** The deliverable is a 4-tab PWA website (Heritage Map / The Festival App / Meet ALAI / Open Questions), not a Gamma slide deck.
**Why:** User direction 2026-05-09 — *"this is not a slideshow — it is a website/pwa."*
**Where applied:** entire site structure; `outline.md` retained as legacy slide source for traceability only.
**When to revisit:** if a slide-format version is needed for a specific presentation, regenerate from this site's content.

### D13 — Festival dates: June 20 and June 21, 2026

**Decision:** Two-day festival on June 20 and June 21, 2026. App live June 17 for early scavenger-hunt access.
**Why:** User correction 2026-05-09 — *"the festival is two days - June 20th and 21st. App is live on the 17th to allow folks to participate in the scavenger hunt."*
**Supersedes:** `CLAUDE.md` § "Project identity" — "a one-day public event (June 19, 2026)" and the Gamma PDF (which carried the old date).
**Where applied:** every page's hero and footer; `festival-app.html` § "Timeline"; `index.html` hero metadata.
**Reconciliation:** queued — `CLAUDE.md` lifecycle table needs update.

### D14 — ALAI window unchanged

**Decision:** ALAI active window stays June 17 to June 24, 2026.
**Why:** User confirmation 2026-05-09 in response to clarifying question.
**Where applied:** `festival-app.html` § "Timeline" implicitly (assistant winds down June 24).

### D15 — No photos in v1

**Decision:** Photo redemption feature is OUT of scope for v1. Donations remain in scope through Zeffy as general support only (no photo-tied unlocks).
**Why:** User direction 2026-05-09 — *"no need to include photos."*
**Supersedes:** all earlier draft references to photo redemption / photo-unlock donations / photo PII risk / Q4 ALAI free-photo path.
**Where applied:**
- `festival-app.html` § "What's in v1" — no photo-redemption card; donations card describes general donations only.
- `festival-app.html` § "Risks" — photo-PII bullet removed.
- `festival-app.html` § "How the app keeps working when the network is bad" — photo-privacy bullet removed.
- `meet-alai.html` § "A festival-goer's experience" — Maria does NOT earn a free photo at end of day.
- `open-questions.html` — Q4 (ALAI free-photo path) REMOVED. Question count: **8** (not 9).
- `index.html` hero metadata — "Open board questions: 8".
**Reconciliation:** queued — `CLAUDE.md` "Stack" entries about photo workflow may need pruning, depending on whether the festival nonprofit wants the photo pipeline brought back in a future version.

### D16 — Festival logo from Wix CDN

**Decision:** The Southern Colorado Juneteenth Festival logo (served by Wix CDN at `static.wixstatic.com/.../85cc7f_b1586c1fed724103a23d782738c165d2~mv2.png`) is the canonical festival logo. Bundled locally at `assets/festival-logo.png`. Used as:
- The brand mark in the global header on every page.
- The PWA install icon (icons/icon-192.png, icon-512.png, icon-maskable-512.png) — generated by centering the logo on a cream square. **The user explicitly directed that the installed app's home-screen icon must use this logo.**
**Why:** User direction 2026-05-09 in two messages.
**Where applied:** all five HTML pages, manifest.webmanifest, all icons.

### D17 — DAP logos for "Who is building it"

**Decision:** Digital Ally Project logos (Digital Ally Project2.png and logo.png from the user's OneDrive) are the canonical "hosted by" branding.
**Why:** User direction 2026-05-09 — *"for who is creating the app."*
**Where applied:** `festival-app.html` § "Who is building it" via the `.logo-strip` component.

### D18 — Tab titles

**Decision:** Tab titles are **Heritage Map · The Festival App · Meet ALAI · Open Questions**.
**Why:** User selected from options 2026-05-09.
**Where applied:** the global nav on every page.

---

## Open board questions (recorded for traceability)

These are the load-bearing decisions the cohort cannot make alone. Each maps to the Open Questions tab.

| ID | Question | Owner | Priority | Deadline |
|---|---|---|---|---|
| Q1 | Geographic scope of map content | Board | High | Board meeting |
| Q2 | Place detail depth (public info vs custom content) | Board | High | Board meeting |
| Q3 | Schedule Jen meeting (Azure $2,000/yr credits + Zeffy API key) | Lead | **Urgent** | ASAP — donation pipeline blocker |
| Q5 | Additional app content beyond the basics | Board | Medium | Board meeting |
| Q6 | Include ALAI "Did You Know" experience? | Board | High | Board meeting |
| Q7 | Content owner for ALAI (only fires if Q6 = yes) | Board | High (if Q6=yes) | Board meeting |
| Q8 | Data minimization floor | Board | Medium | Board meeting |
| Q9 | Voice or text chat for festival assistant | Board | Medium | Board meeting |

**Note: Q4 was removed (D15) when photos were dropped from v1 scope.** Question numbering preserved (Q1, Q2, Q3, Q5, Q6, Q7, Q8, Q9 — there is no Q4) so the question IDs stay stable across documents and the user's mental model.

Each board answer landed will move from this table to a corresponding D-entry above with the resolution captured.
