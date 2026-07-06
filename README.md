# Portfolio — Gioacchino Pio Di Leo

Single-page portfolio CV. Editorial design, GDPR-first by construction.

**Live:** https://gioacchino-dileo.vercel.app

## How it works

- `content/profile.ts` is the single typed source of truth — it renders
  **both** the site and the ATS-friendly `cv.pdf`, generated at build time
  with `@react-pdf/renderer` (`prebuild`). Site and CV can never drift apart.
- A **GDPR leak gate** (`postbuild`) scans every tracked file and the built
  output: if personal data (phone, address, DOB, plain email…) ever appears
  outside the generated PDF, **the build fails**. Patterns live outside the
  repo (local gitignored file / CI secret) — compliance as a test, not a
  checklist.
- The email address exists in source only reversed + base64-encoded and is
  decoded client-side on click — no plain email in HTML, bundles or repo.
- No cookies, no analytics, no forms, no third-party runtime requests.

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS 4 · Motion ·
next-themes · @react-pdf/renderer · Vitest · Playwright · GitHub Actions ·
Vercel.

## Develop

```bash
npm ci
npm run dev        # local dev (no PDF needed)
npm run build      # PDF generation → next build → GDPR leak check
npm run test       # unit (Vitest)
npm run test:e2e   # smoke (Playwright, needs a prior build)
```

The GDPR leak check needs `gdpr-patterns.local.txt` (gitignored) or the
`GDPR_PATTERNS` env var; forks can set `ALLOW_NO_GDPR_PATTERNS=1`.

Code: MIT. Content (texts, CV data): © Gioacchino Pio Di Leo.
