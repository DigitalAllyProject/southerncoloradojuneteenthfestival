---
title: Southern Colorado Juneteenth Festival — Board Briefing
audience: Festival board + funders
last_verified: 2026-05-09
re_verify_by: 2026-06-08
visual_identity:
  fonts: Playfair Display (display), IBM Plex Sans (body), IBM Plex Mono (eyebrow)
  palette: "#C8102E red, #1A1612 black, #2D6A3E green, #D4A634 gold, #F4EFE6 cream"
target_length: 16 slides (~8–10 min spoken)
---

# Southern Colorado Juneteenth Festival — Board Briefing

**Paste each `#` heading into Gamma as a slide title; bullets become slide body. Speaker notes (italicized below each slide) hold the source citations and the technical names that don't belong on slides.**

---

## Slide 1 — Southern Colorado Juneteenth Festival

- A mobile companion app for **June 19, 2026**
- Built by a small team of community technologists, hosted by Digital Ally Project
- Open source. The festival nonprofit owns the app after July 17, 2026.

*Source: `JuneTeenth-PWA/README.md` §intro; user clarification 2026-05-09. Visual: Pan-African color rule top of slide.*

---

## Slide 2 — What it is, in one slide

- **A website that works like an app.** Open it once in your phone's browser, save it to your home screen, and it behaves like any other app — even offline.
- **Next step:** packaged for the Google Play Store and Apple App Store so attendees find it the way they find every other app.
- Map, schedule, and vendor list are open to everyone — no sign-in.
- To claim a photo, chat, or see your profile, sign in with **email, Facebook, Google, or Microsoft**.

*Source: README §intro; user clarification 2026-05-09 (multi-provider sign-in supersedes the Microsoft-only assumption in `CLAUDE.md`). Technical name not on slide: PWA (progressive web app).*

---

## Slide 3 — Who is building it

- **Community technologists** — community members using this build to gain real-world experience while solving a community problem
- Hosted by **Digital Ally Project**; led by an experienced architect
- Open source (Apache 2.0); the festival nonprofit owns the codebase after July 17, 2026
- *This is not paid workforce development. It's community service that builds skills.*

*Source: user clarification 2026-05-09. Supersedes `CLAUDE.md` § "Project identity" framing of "paid workforce-development cohort"; reconciliation queued.*

---

## Slide 4 — Timeline — six weeks to launch

- **2026-05-09** — Build begins
- **2026-06-05** — Board demo (private feedback)
- **2026-06-17** — Public launch; festival assistant activates
- **2026-06-19** — *Festival day*
- **2026-06-24** — Festival assistant winds down; app remains live for photo pickup
- **2026-07-17** — App stabilization complete; codebase fully in nonprofit hands

*Source: `CLAUDE.md` §"Project identity" lifecycle table.*

---

## Slide 5 — What's in v1 (what we're committing to build)

- Festival map (basemap + points of interest)
- Live schedule + vendor, sponsor, and food-truck listings
- Sign-in with email, Facebook, Google, or Microsoft
- Photo redemption — attendees claim event photos
- **Donations through Zeffy** — both general support and photo-tied
- A festival assistant chat to help attendees during the festival window

*Source: README; user clarification 2026-05-09. Note: general donation campaigns are in scope — supersedes the `CLAUDE.md` "no general donations" residual; reconciliation queued.*

---

## Slide 6 — How the app keeps working when the network is bad

- The venue's cell signal is poor. The app loads itself onto each phone in advance so the basics keep working even with no signal.
- The map, schedule, and vendor list never need a sign-in — they open instantly.
- **Attendee photos stay private.** Photos are stored in a locked location. When someone wants to see their photo, the app fetches it just for them. After they close the app or sign out, the photo is gone from their phone.
- **A vendor can't accidentally see a staff screen.** Permission rules are checked by the system, not just hidden in the design. If someone tries to access a screen they shouldn't, the system refuses — even if they know the link.

*Source: `festival-pwa/README.md` §"Cellular-hardening"; `CLAUDE.md` §Invariants 1, 8. Technical names not on slide: pre-cache, signed URLs, Row Level Security.*

---

## Slide 7 — The Southern Colorado Juneteenth Directory

- A community-built directory of **104 places** across Colorado Springs, Manitou Springs, Fountain, Pueblo, Denver, and statewide
- Categories: Anchor Juneteenth Events • Black-Led Organizations • Historic Black Churches • Buffalo Soldier Memorials • Murals & Public Art • Black-Owned Restaurants & Businesses • Cultural Pioneer Monuments • Parks named for Black figures
- A geocoded dataset + an editorial directory site — ready to inform the festival map

*Source: `Downloads/Juneteenth Scavenger Hunt/scavenger_hunt_directory.html` (title + regions + category badges); KML `<Placemark>` count = 104 (verified 2026-05-09).*

---

## Slide 8 — How the directory could connect to the app

- The simplest version: the app's map shows the directory's points of interest, contextual to the festival
- **Geographic scope is a question for the board** — see closing slides
- The directory situates the festival inside a year-round Southern Colorado Black-heritage story — useful long after June 19

*Source: deck design decision; geographic scope = open question Q1 (slide 12).*

---

## Slide 9 — How we keep our facts honest

- Every claim in our planning documents has a written source — we don't ship anything that says "we think" without backing it up
- Each cohort member's work is double-checked before it gets merged: one AI session writes the change, a second AI session reviews it against the plan, then a human signs off
- Automated guardrails prevent accidents — passwords being committed, files being deleted in bulk, mistakes that would take a normal team's whole afternoon to undo
- *Why this matters on a board slide: it's how community technologists, still learning, can ship a tool a nonprofit can trust.*

*Source: `iterative-audit-methodology.md`; `JuneTeenth-PWA/docs/genai-pipeline-roadmap.md`. Technical names not on slide: Claude Code, gitleaks, OSV-Scanner, PreToolUse hooks.*

---

## Slide 10 — Risks we're carrying — and what we're doing about them

- **Six weeks is short.** We say "no" to anything outside the agreed scope, so the things we *do* ship are solid.
- **The venue's cell signal is poor.** The app is built to keep working without one, not to hope for the best.
- **Photos contain attendee faces.** They live in a locked storage area, are shown only to the right person, and are deleted 30 days after the festival.
- **The nonprofit isn't locked into our choices.** The tools we use are common enough that the festival could move the app elsewhere later if it ever made sense.

*Source: `CLAUDE.md` §"Threat model"; user clarification 2026-05-09. Technical names not on slide: Supabase, Azure Static Web Apps, photo retention policy.*

---

## Slide 11 — What the nonprofit receives on July 17, 2026

- A working app + the source code, fully documented, free to use forever (Apache 2.0 license)
- All festival data saved in a format the nonprofit can keep, move, or close out
- A maintainer's guide: what to keep running year-round, what to switch off, what to refresh next June
- A follow-up to-do list for after the festival — keeping the app's software pieces up to date, adding deeper security checks

*Source: `JuneTeenth-PWA/README.md` §License; `docs/genai-pipeline-roadmap.md` §"What's queued".*

---

## Slide 12 — Scope & content — questions for the board (1 of 4)

**Q1. Geographic scope of map content.**
- Festival grounds only?
- Colorado Springs + Manitou + Fountain only?
- Or include Denver + Pueblo (full directory of 104 places)?

**Q2. Place detail depth.**
- Stick to public website info per location?
- Or include custom content (story, photos, hours, accessibility) per location?
- *Note: the festival doesn't have social-media accounts, so any custom content would need to be Juneteenth staff- or business-owner-generated.*

**Q5. App content.**
- We have the festival basics (map, schedule, vendors). What else should be available in the app?

*These are the cohort's largest scope-unknowns. Each answer shapes how much work fits in six weeks.*

---

## Slide 13 — Engagement & education — questions (2 of 4)

**Q6. Interactive history / "Did You Know" feature.**
- ALAI — Digital Ally Project's AI agent — is an **intelligent tutoring system** that captures knowledge levels per person across content libraries.
- Should the app include a "Did You Know" experience powered by ALAI?
- **This is arguably the most important interaction the cohort can capture — the data signal of what learners absorb is core to DAP's work.**

**Q7. If yes — who creates the content?**
- ALAI needs curated content libraries (Juneteenth history, Black-heritage sites, local figures). We need a content owner.

**Q9. Voice or chat?**
- Is text chat sufficient for the festival, or do we need voice interaction?

---

## Slide 14 — Privacy & money — questions (3 of 4)

**Q8. Data minimization.**
- What festival-goer data *absolutely* needs to be collected?
- The internet has moved to privacy-first; we want to default to less, not more. Board input sets the floor.

**Q4. Photo pipeline + ALAI.**
- Zeffy-paid photo unlocks are confirmed.
- **Can a festival-goer also earn a free photo by interacting with ALAI?** (Engagement-reward path — would tie the photo system to the tutoring system and give us more learning-interaction data.)

---

## Slide 15 — Resources & partnerships — questions (4 of 4)

**Q3. Schedule a meeting with Jen** to secure:

- **Azure nonprofit credits** — $2,000/yr, auto-renewed, *currently not realized*
- **Zeffy API key** — needed for the donation + photo-unlock integration

*Without these, the photo and donation pipelines stall. This is the most time-sensitive of the nine questions.*

---

## Slide 16 — Sources & where this lives

- Repo: **github.com/DigitalAllyProject/southerncoloradojuneteenthfestival**
- Every slide's source citation lives in [`AUDIT.md`](./AUDIT.md) and [`SOURCES.md`](./SOURCES.md)
- Cohort contributors credited in `NOTICE` (in the codebase repo)
- Festival organizing nonprofit — partner and post-handoff owner
- Digital Ally Project — community-technologist host
- Last verified: **2026-05-09**

---

## Speaker-notes appendix (don't paste into Gamma slides)

### Reconciliation notes
These slides supersede statements in `JuneTeenth-PWA/CLAUDE.md`. Reconciliation back into CLAUDE.md is queued, not part of this deck:
- Slide 3: cohort model (not paid workforce-dev)
- Slide 2: multi-provider sign-in (not Microsoft-only)
- Slide 5: general donations in scope (not photo-unlock-only)
- Slide 2: app-store distribution path planned (not PWA-only)
- Slide 5/12: analytics deferred to board input (not blanket "no analytics SDKs")

### Glossary (for speaker preparation, not slides)
- **PWA** — progressive web app; web page that installs to a phone's home screen and works offline
- **ALAI** — Digital Ally Project's AI tutoring agent
- **Zeffy** — no-fee fundraising platform; hosts the donation/payment flow off our infrastructure
- **Supabase** — managed database + auth + functions provider; backend for the app
- **Azure Static Web Apps** — Microsoft's hosting service for the app's web front-end

### Visual identity
Pan-African accent palette throughout (red #C8102E / black #1A1612 / green #2D6A3E with gold #D4A634 highlights) on warm cream background (#F4EFE6). Fonts: Playfair Display for headlines, IBM Plex Sans for body, IBM Plex Mono for metadata / dates. Matches the existing community-directory site so the briefing and the directory read as one family.
