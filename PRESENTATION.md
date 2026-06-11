# 🎤 Probashi Shield — Presentation & Demo Script

How to (1) explain every feature, and (2) prove you built it.

Live app: **https://probashi-shield.vercel.app**

---

## PART 1 — The 30-second opening (say this first)

> "Every year, thousands of Bangladeshi families sell their land or take loans to
> pay a recruiting agent 3–5 lakh taka for a job abroad — and get cheated by a
> fake agent. The official list of licensed agencies exists, but a worker in a
> village can't use it. So I built **Probashi Shield** — a free website and SMS
> service where anyone can check, in seconds, whether a recruiting agent is real
> and safe, before they pay."

---

## PART 2 — Feature walkthrough (what to click + what to say)

Open **https://probashi-shield.vercel.app** on the screen and go in this order.

### 1. Verify an agency (the core feature)
- **Do:** On the home page, type **`Dubai Dream`** → click **Verify**.
- **Say:** "A worker types the agency name. Instantly they get a clear verdict —
  red, yellow, or green. This one is RED: blacklisted, with verified fraud
  reports. Do not pay."
- **Do:** Click the result to open its detail page.
- **Say:** "They see the license status, how many people reported it, and real
  complaint summaries — like '*paid 4 lakh, agent disappeared, we sold land.*'"

### 2. The green contrast
- **Do:** Go back, search **`Al-Amin`**.
- **Say:** "Same search — but this agency is licensed and clean, so it's GREEN
  with a verified badge. In two seconds a worker knows who to trust."

### 3. Share with a QR code
- **Do:** On an agency page, scroll to the **QR code** → scan it with your phone.
- **Say:** "Anyone can share a verification by QR or link — so one informed
  person protects their whole village."

### 4. SMS version (for basic phones — the key insight)
- **Do:** Open the **SMS Demo** page → tap **`VERIFY Dubai Dream`**.
- **Say:** "Most at-risk workers don't have smartphones or internet. So the same
  check works by SMS on a 200-taka phone — type VERIFY and a name, get the
  warning back. This is how it reaches real villages."

### 5. Official fees (stops overcharging)
- **Do:** Open **Country Fees**.
- **Say:** "These are the government-approved costs per country. If an agent asks
  far more than this, that's a red flag — now the worker knows the real number."

### 6. Report fraud (crowd-sourced + tracked)
- **Do:** Open **Report Fraud** → fill a quick example → submit → show the
  **tracking number**.
- **Say:** "Victims report fraud and get a tracking number to follow their case.
  These reports warn the next family."

### 7. Sign up & 'My Reports'
- **Do:** **Sign up** → then open **My Reports**.
- **Say:** "Registered users can track every report they've filed in one place."

### 8. Safety guide
- **Do:** Open **Safety Guide**.
- **Say:** "A plain-language checklist and red-flags list, so people know what to
  verify before paying."

### 9. Impact / transparency dashboard
- **Do:** Open **Impact**.
- **Say:** "Public accountability — total searches, reports filed, verified fraud,
  and money-loss reported, updating in real time."

### 10. Ministry admin dashboard (the control room)
- **Do:** Go to **/admin/login** → sign in (`admin@probashishield.gov.bd` /
  `admin123`) → show the dashboard.
- **Say:** "The Ministry side: they review reports, mark them verified, and
  blacklist agencies with one click. This is what keeps honest agencies safe and
  catches the fraudulent ones."

### 11. Bilingual — English / বাংলা
- **Do:** Click the **বাংলা** toggle in the navbar.
- **Say:** "The whole experience switches to Bangla — because the people we
  protect read Bangla, not English."

### 12. Installable app
- **Do:** On your phone, **Add to Home Screen**.
- **Say:** "It installs like a normal app with an icon — no app store, works on
  any phone."

---

## PART 3 — PROOF that you built it

Judges respect builders. Use these, strongest first:

### A. Explain the architecture in your own words (the #1 proof)
> "It's a full-stack app. The **frontend** is built with Next.js and React. The
> **backend** is a Node.js + Express REST API. Data lives in a **PostgreSQL**
> database. The frontend is deployed on **Vercel**, the backend on **Render**,
> and the database is hosted on **Neon**. When you search, the website calls my
> API, which queries the database and computes the risk verdict."

If you can explain the flow — *browser → my API → database → back* — that alone
convinces technical judges.

### B. Show it's under YOUR accounts (live evidence)
- Open your **GitHub repo**: `https://github.com/problemsolver-web/probashi-shield`
  — show the `backend/` and `frontend/` folders and the **commit history** with
  your username and timestamps.
- Open your **Vercel dashboard** (logged in as you) → the project building from
  your repo.
- Open your **Render dashboard** → the live backend service.

### C. Show the data is real & dynamic (not a fake mock-up)
- **Submit a brand-new fraud report live** during the demo → it gets a tracking
  number → then log into the **admin dashboard** and show that the report you
  just made appears there. This proves it's a real database, not hard-coded
  screens.
- Search the agency you just reported and show the report count went up.

### D. Make a tiny live change (optional, very convincing)
- In the admin dashboard, change a complaint's status or blacklist an agency,
  then refresh the public page and show it changed. Live control = you own it.

### E. Walk through the code briefly
- Open the repo and show one file you can explain — e.g. the risk logic
  (`backend/src/utils/helpers.ts`, the `computeRisk` function) — and explain in
  plain words how green/yellow/red is decided.

---

## PART 4 — Business model & impact (45 seconds)
> "It sustains itself three ways: licensed agencies pay for a verified trust
> badge; the Ministry can fund it as public-safety infrastructure; and telecoms
> can sponsor the SMS line as social good. If it stops even one in ten of these
> frauds, it protects thousands of families and crores of taka a year."

## PART 5 — Close (15 seconds)
> "Probashi Shield turns a government list nobody reads into a shield every
> family can hold — in Bangla, by SMS, before they pay. Thank you."

---

## PART 6 — Likely questions (have answers ready)

- **"Is the data real?"** — "The licensed-agency list is official BMET public
  data; I've built a CSV importer that loads it. Reports are crowd-sourced and
  only marked 'verified' after a Ministry review step, so honest agencies aren't
  falsely accused."
- **"What stops fake reports?"** — "Reports start as unverified and labelled as
  such; only admins can verify them; submissions are rate-limited and logged."
- **"How is this different from the BMET website?"** — "The data exists but is
  unusable for a villager. I deliver a one-word answer — safe or not — by SMS in
  Bangla. Distribution and simplicity are the product."
- **"Can it scale nationwide?"** — "Day one. It's a national dataset plus SMS —
  no per-district logistics."
- **"Did you build this yourself?"** — Walk them through the architecture (Part
  3A) and the live repo/commits (3B). That settles it.

---

## PART 7 — Delivery tips
- Open the backend a minute before you present (free server "wakes up" in ~30s).
- Have a **screen recording** of the demo as backup in case of wifi issues.
- Practice the 90-second core demo (features 1, 4, 6, 10) until it's automatic.
- Speak to the **family losing their land** — that emotion wins rooms.
