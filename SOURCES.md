# Sources — Phase 0.2 source-of-truth registry

Every factual claim on the briefing site cites a row in this table. Anything not traceable here doesn't ship.

Verify date for all stable entries: **2026-05-09**. Re-verify before relying on if past **2026-06-08**.

| ID | Source | Location | Authority for | Last verified |
|---|---|---|---|---|
| S1 | Project README | `JuneTeenth-PWA/README.md` | Stack, repo layout, Apache 2.0 license, project flow | 2026-05-09 |
| S2 | Architecture invariants | `JuneTeenth-PWA/CLAUDE.md` | 8 roles, 3-layer authorization, ALAI window, threat model. **NOTE:** several entries superseded by user clarification — see `DECISIONS.md` D7–D11, D13, D15. | 2026-05-09 |
| S3 | Frontend seed README | `JuneTeenth-PWA/festival-pwa/README.md` | PWA stack details, cellular-hardening strategy | 2026-05-09 |
| S4 | Supabase Edge seed README | `JuneTeenth-PWA/supabase-functions/README.md` | Backend tooling shape | 2026-05-09 |
| S5 | Pi services seed README | `JuneTeenth-PWA/pi-services/README.md` | Edge hardware shape | 2026-05-09 |
| S6 | GenAI pipeline roadmap | `JuneTeenth-PWA/docs/genai-pipeline-roadmap.md` | Safety tooling tiers | 2026-05-09 |
| S7 | Scavenger Hunt directory site | `~/Downloads/Juneteenth Scavenger Hunt/scavenger_hunt_directory.html` | POI count (104), region partitioning, category taxonomy, visual-identity palette, the rendered POI cards reused on `heritage-map.html` | 2026-05-09 |
| S8 | Scavenger Hunt geocoded dataset (KML) | `~/Downloads/Juneteenth Scavenger Hunt/southern_colorado_juneteenth_scavenger_hunt.kml` | Geocoded POI dataset; `<Placemark>` count = 104 (verified via `grep -c`) | 2026-05-09 |
| S9 | Iterative audit methodology | `~/Downloads/iterative-audit-methodology.md` | The process this site is produced under | 2026-05-09 |
| S10 | ALAI pitch cheatsheet | `~/Downloads/alai-pitch-cheatsheet-2026-05-08.md` | What ALAI is; production-deployment status (14 active learners, CCBIT 2026 cohort); the "personalized adaptive tutor" framing; everything on `meet-alai.html`. **Translated** for non-technical audience — see `AUDIT.md` for what was deliberately omitted. | 2026-05-09 |
| S11 | Gamma-generated briefing PDF | `~/Downloads/Southern-Colorado-Juneteenth-Festival.pdf` | Gamma's slide wording — vetted for drift and incorporated into `festival-app.html` where wording was both accurate and well-phrased. **Drift found and corrected:** see `AUDIT.md` § "Phase 1 — second-pass". | 2026-05-09 |
| S12 | Festival logo (Wix CDN) | `https://static.wixstatic.com/media/85cc7f_b1586c1fed724103a23d782738c165d2~mv2.png/...` (cached locally at `assets/festival-logo.png`) | Festival branding. The user explicitly directed that the installed PWA's home-screen icon must use this logo. | 2026-05-09 |
| S13 | DAP logos (OneDrive) | `~/OneDrive - Digital Ally Project/Documents/DAP OneDrive/Digital Ally Project/Administration/{Digital Ally Project2.png,logo.png}` (cached locally at `assets/dap-project2.png`, `assets/dap-logo.png`) | "Hosted by Digital Ally Project" branding on `festival-app.html` § "Who is building it" | 2026-05-09 |
| U1 | User clarifications 2026-05-09 | Conversation, multi-pass plan-mode session 2026-05-09 | Cohort framing, multi-provider sign-in, general donations in scope, app-store migration trajectory, festival dates (Jun 20–21), app-live date (Jun 17), photos OUT of scope, tone = consultative, plain-English jargon ban, four-tab PWA structure, eight (not nine) board questions, festival-logo placement | **Authoritative for the site**; supersedes S2 where they conflict | 2026-05-09 |
| T1 | Workstream briefs | `JuneTeenth-PWA/workstreams/Stream_<A–F>_*.md` | (TBD) Stream-specific scope — **NOT YET IN REPO** | n/a |
| T2 | Umbrella plan v3 | `JuneTeenth-PWA/Juneteenth_Festival_PWA_Plan_v3.md` | (TBD) Full project plan — **NOT YET IN REPO** | n/a |

## Re-verification commands

- POI count = 104: `grep -c '<Placemark>' "$HOME/Downloads/Juneteenth Scavenger Hunt/southern_colorado_juneteenth_scavenger_hunt.kml"` → returns `104`
- Festival logo URL: open the URL in a browser; should serve the 213×120 PNG
- DAP logos: `ls -la "$HOME/OneDrive - Digital Ally Project/Documents/DAP OneDrive/Digital Ally Project/Administration/"`
- Lifecycle dates (codebase view, currently superseded for the festival proper): re-read `JuneTeenth-PWA/CLAUDE.md` § "Project identity" lifecycle table

## Conflict resolution rule

S2 (CLAUDE.md) and U1 (user clarifications) conflict in seven places. **U1 wins for the site.** Each divergence is logged in `DECISIONS.md` D7–D15. Reconciliation back into CLAUDE.md is a separate work item (queued, not part of this deliverable).
