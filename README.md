# Portfolio Website (Next.js)

Professional portfolio site powered by Next.js (App Router). All content lives in `src/content/profile.fr.ts` and `src/content/profile.en.ts`.

## Quick Start

1. Install dependencies:
   - `npm install`
2. Run locally:
   - `npm run dev`
3. Customize content:
   - Edit `src/content/profile.fr.ts` and `src/content/profile.en.ts`
   - Optional: replace `public/avatar-placeholder.svg` and `public/resume.pdf`

## Contact Form (Web3Forms)

This site includes a contact form that posts to Web3Forms from the browser.

1. Create a Web3Forms access key.
2. For local dev, create `.env.local`:
   - Copy `.env.example` to `.env.local`
   - Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...`
3. For Vercel, set the same environment variable in:
   - Project Settings -> Environment Variables

Note: the email destination is configured in Web3Forms (not in this repo). Keep your personal phone/address out of the site if you do not want it public.

## Deploy to Vercel

### Option A: Vercel Web (Recommended)

1. Push this repo to GitHub.
2. In Vercel, import the repo and deploy.
3. Framework preset: Next.js (auto-detected).
4. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel Environment Variables (see above).

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

### If Vercel Requires Login To View The Site

If your deployment shows a Vercel login screen, your project likely has Deployment Protection enabled.

In Vercel:
- Project Settings -> Security -> Deployment Protection
- Disable "Vercel Authentication" for Production (and Previews if desired)

## Content Notes

- This project does not scrape LinkedIn automatically.
- GitHub repos: add your project links manually (keeps the site deterministic and privacy-friendly).