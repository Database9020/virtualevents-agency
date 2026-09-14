# virtualevents.agency — Astro rebuild

A multi-page Astro rebuild of the virtualevents.agency Carrd site: same visual
design and copy, plus a blog for organic search, proper SEO metadata, and
structured data. Static output, no CMS, no database — content lives in this
repo as Markdown/MDX.

## What's here

- **Home** (`/`) — hero, services, pricing, comparison, stats, how it works,
  FAQ, final CTA — copy migrated as-is from the live site.
- **Pricing** (`/pricing`) — standalone pricing page with the monthly/annual
  toggle.
- **Blog** (`/blog`, paginated) and **blog post template**
  (`/blog/[slug]`) with related articles, reading time, and full SEO/OG
  metadata per post.
- 8 starter articles in `src/content/blog/`, written for the B2B SaaS
  marketing audience this agency targets (webinar pipeline, cadence,
  repurposing, follow-up sequences, build vs. buy).
- Sitemap, robots.txt, canonical URLs, Open Graph + Twitter cards, and
  JSON-LD (`Organization`, `Service`, `FAQPage`, `BlogPosting`) — see
  `src/components/Seo.astro`, `src/layouts/BaseLayout.astro`.

### A couple of intentional differences from the live site

- **Favicon / touch icon / default share image** are freshly generated
  (`scripts/gen_icons.py`, Pillow) rather than pulled byte-for-byte from the
  Carrd site, using the same dark + mint→yellow palette. Swap them for your
  own files in `public/` any time — same filenames.
- The two decorative desk/keyboard **background photos** behind the hero and
  pricing sections weren't carried over — they sit under an 75–80% black
  overlay on the live site and are barely visible, so they're replaced here
  with a CSS radial gradient in the same accent colour. If you'd rather use
  the real photos, drop them in `src/assets/` and reference them from
  `Hero.astro` / `PricingTable.astro`.

Everything else — copy, prices, FAQ, colours, fonts, button shapes — matches
the live site; see the design tokens in `src/styles/global.css`.

## Editing content

All copy, pricing, FAQ, and nav links live in **one file**:
`src/lib/site.ts`. Edit it once and the homepage, pricing page, and FAQ
schema all stay in sync.

To add a blog post, create a new `.mdx` file in `src/content/blog/` with this
frontmatter:

```md
---
title: "Your title"
description: "One or two sentences for meta description + card excerpt"
pubDate: 2026-09-14
tags: ["webinars", "b2b marketing"]
slug: "your-post-slug" # optional — defaults to the filename
---

Article body in Markdown/MDX...
```

Commit and push to `main` — Netlify redeploys automatically. No dashboard,
no login.

## Before you go live

1. In `astro.config.mjs`, confirm `SITE_URL` is `https://virtualevents.agency`
   (already set).
2. In `src/lib/site.ts`, double-check `SITE.strategyCallUrl` and the
   per-plan `bookingUrl`s still point at the right Cal.com links.
3. Swap `public/favicon.svg`, `public/apple-touch-icon.png`, and
   `public/og-image.jpg` for your own assets if you'd rather not use the
   generated ones.

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Astro rebuild of virtualevents.agency"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

### 2. Connect Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an
   existing project** → choose GitHub → select this repo.
2. Build settings (Netlify usually detects these automatically from
   `netlify.toml`, included in this repo):
   - **Build command:** `astro build`
   - **Publish directory:** `dist`
3. Deploy. You'll get a `*.netlify.app` preview URL — check it over before
   touching DNS.
4. Once you're happy: **Site settings → Domain management → Add a custom
   domain** → `virtualevents.agency`, then point your domain's DNS at
   Netlify (it'll show you the exact records — usually a CNAME or Netlify's
   load-balancer IP for the apex domain).

From then on, every push to `main` redeploys automatically.

## Project structure

```
src/
  components/     UI building blocks (Hero, Services, PricingTable, Faq, ...)
  content/blog/   blog posts (.mdx)
  content.config.ts  blog collection schema
  layouts/        BaseLayout.astro — head, nav, footer, JSON-LD wiring
  lib/site.ts     all copy + pricing + FAQ data in one place
  pages/          index.astro, pricing.astro, blog/[...page].astro, blog/[slug].astro
  styles/global.css  design tokens (colours, type, spacing)
public/           static assets — favicon, OG image, robots.txt
scripts/gen_icons.py  regenerate the favicon/OG image if you tweak the palette
```
