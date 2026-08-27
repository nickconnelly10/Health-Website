# CLAUDE.md

Guidance for AI agents working in this repository.

## Project Overview

Personal health and wellness website for Nicholas Connelly. The site documents Nick's health journey and shares lifestyle, nutrition, and activity resources. It is **not** a medical product—content is personal experience and educational, not professional advice.

- **Domain**: `health.nickconnelly.com`
- **Owner**: Nicholas Connelly
- **Version**: See `package.json`

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** for styling (Inter via `next/font`, matches nickconnelly.com)
- **Vercel** for deployment and **Vercel Analytics**
- Static/SSG-oriented pages; no backend database or auth

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint --max-warnings 0
```

## Project Structure

```
app/                      # Next.js App Router routes (thin page wrappers + metadata)
  layout.tsx              # Root layout: fonts, HealthBanner, analytics
  page.tsx                # Home
  nicks-journey/
  healthy-living/
  nutrition/              # 308 → /healthy-living?tab=nutrition
  physical-activity/      # 308 → /healthy-living?tab=physical-activity
  lifestyle/              # 308 → /healthy-living?tab=lifestyle
  resources/
  terms/
  privacy/
  not-found.tsx
  sitemap.ts
  robots.ts
src/
  components/             # Page and layout components
  constants/              # Shared strings (e.g. disclaimer text)
  lib/
    metadata.ts           # Per-page Open Graph / Twitter helper
public/                   # Static assets (photos, videos, favicon, manifest)
```

## Architecture Conventions

- **Routes**: `app/<route>/page.tsx` imports a component from `src/components/` and exports metadata.
- **Layout**: `HealthBanner` only (footer removed). Brand dropdown links to nickconnelly.com, Terms, Privacy.
- **Healthy Living**: tabbed client page; deep links via `?tab=lifestyle|nutrition|physical-activity`.
- **Styling**: Tailwind v4 via `@config` in `app/globals.css`; burgundy accent in theme.
- **Client components**: Use `'use client'` only when needed (banner, tabbed pages, filters).
- **Images**: Next.js `Image` in `public/photos/`.

## Content & Legal Guidelines

- **Disclaimer**: Canonical text in `src/constants/disclaimer.ts` via `PersonalDisclaimer`.
- **Tone**: First-person, personal journey—not clinical or prescriptive.
- **Legal pages**: `/terms` and `/privacy`; linked from HealthBanner brand dropdown.

## Key Components

| Component | Purpose |
|-----------|---------|
| `HealthBanner` | Top nav + brand dropdown (legal / main site links) |
| `PersonalDisclaimer` | Amber callout with standard disclaimer |
| `HomePage` | Landing page with hero and about section |
| `NicksJourneyPage` | Personal health journey (Body, Mind, Spirit) |
| `HealthyLivingPage` | Tabbed lifestyle, nutrition, physical activity |
| `ResourcesPage` | External health resource links with filters |

## Deployment

Deployed on Vercel. Config in `vercel.json` (CSP includes Strava `frame-src`). Node `24.x`. Do not commit secrets or `.env` files.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
