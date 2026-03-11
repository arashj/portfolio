# Portfolio Website (Next.js)

Professional portfolio site powered by Next.js (App Router). All content lives in `src/content/profile.ts`.

## Quick Start

1. Install dependencies:
   - `npm install`
2. Run locally:
   - `npm run dev`
3. Customize content:
   - Edit `src/content/profile.ts`
   - Optional: replace `public/avatar-placeholder.svg` and `public/resume.pdf`

## Deploy to Vercel

### Option A: Vercel Web (Recommended)

1. Push this repo to GitHub.
2. In Vercel, import the repo and deploy.
3. Framework preset: Next.js (auto-detected).

### Option B: Vercel CLI

1. Install CLI:
   - `npm i -g vercel`
2. Login:
   - `vercel login`
3. Deploy:
   - `vercel`
4. Production deploy:
   - `vercel --prod`

### Custom Domain

1. In Vercel Project Settings: Domains.
2. Add your domain and follow DNS instructions.

## Content Notes

- This project does not scrape LinkedIn automatically. Paste/export your LinkedIn data into `src/content/profile.ts` (avoid personal phone/address if you don’t want it public).
- GitHub repos: add your project links manually in `src/content/profile.ts` (keeps the site deterministic and privacy-friendly).
