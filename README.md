# SafeStep — Cyber Defense Initiative

A browser-based cybersecurity training game. 15 missions teach everyday digital-safety skills through short, hands-on mini-games instead of reading text — no build step, no backend, just static HTML/CSS/JS.

Play it live via GitHub Pages: enable Pages on this repo (Settings → Pages → deploy from `main`) or just open `index.html`.

## What's inside

15 missions across 3 tiers (Recruit → Operator → Specialist), unlocked as you clear the previous one, each built on one of 4 mini-game types:

| Type | Mechanic | Example missions |
|---|---|---|
| **Forge** | Build something live against a checklist | Credential Forge (build a strong password) |
| **Scan** | Click every red flag in a mocked-up email / site / call transcript | Phish Hunt, Front Operations, Social Engineering |
| **Sort** | Drag items into two bins | Hostile Networks, Data Leak Control, Permissions Audit, Hostage Recovery (backups) |
| **Defend** | Allow/block a stream of timed prompts | Account Defender (2FA), Patch Protocol, Breach Response |

Topics covered: password hygiene, phishing, public Wi-Fi, device permissions, 2FA, fake software updates, social engineering calls, 3-2-1 backups, identity document exposure, smart-home defaults, digital footprint, and post-breach response.

Each mission ends with an after-action report (accuracy, errors, star rating) and a one-line takeaway. Clearing all 15 grants a final security-clearance grade.

## Stack

Plain HTML/CSS/JS — no framework, no dependencies, no build step. Installable as a PWA (`manifest.json`, `sw.js`). Sound effects are synthesized at runtime via the Web Audio API (no audio libraries), plus two embedded `.ogg` clips for feedback stings.

## Running locally

Just open `index.html` in a browser — everything is client-side and self-contained.
