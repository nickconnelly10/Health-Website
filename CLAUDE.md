# CLAUDE.md

Guidance for AI agents working in this repository.

## Project Overview

Personal health and wellness website for Nicholas Connelly. The site documents Nick's health journey and shares lifestyle, nutrition, and activity resources. It is **not** a medical product—content is personal experience and educational, not professional advice.

- **Domain**: `health.nickconnelly.com`
- **Owner**: Nicholas Connelly
- **Version**: See `package.json`

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** for styling
- **Vercel** for deployment and **Vercel Analytics**
- Static/SSG-oriented pages; no backend database or auth

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Project Structure

```
app/                      # Next.js App Router routes (thin page wrappers)
  layout.tsx              # Root layout: fonts, banner, footer, analytics
  page.tsx                # Home
  nicks-journey/
  healthy-living/
  nutrition/
  physical-activity/
  lifestyle/
  resources/
  terms/
  privacy/
src/
  components/             # Page and layout components
  constants/              # Shared strings (e.g. disclaimer text)
  utils/                  # Utilities (e.g. scrollToTop)
public/                   # Static assets (photos, favicon, manifest)
```

## Architecture Conventions

- **Routes**: `app/<route>/page.tsx` imports a component from `src/components/`.
- **Layout**: `HealthBanner` (nav) and `HealthFooter` wrap all pages via `app/layout.tsx`.
- **Styling**: Tailwind utility classes; custom theme in `tailwind.config.js` and `app/globals.css`.
- **Client components**: Use `'use client'` only when needed (state, effects, event handlers).
- **Images**: Next.js `Image` in `public/photos/`; handle missing images with fallbacks where used.

## Content & Legal Guidelines

- **Disclaimer**: All health-related content must respect the personal-disclaimer policy. The canonical text lives in `src/constants/disclaimer.ts` and is rendered via `PersonalDisclaimer`.
- **Tone**: First-person, personal journey—not clinical or prescriptive.
- **Do not** present site content as medical, nutritional, fitness, or health advice.
- **Legal pages**: `/terms` and `/privacy` are first-party pages; footer Legal section links to them.

## Key Components

| Component | Purpose |
|-----------|---------|
| `HealthBanner` | Top navigation |
| `HealthFooter` | Footer with nav, connect, and legal sections |
| `PersonalDisclaimer` | Amber callout with standard disclaimer |
| `HomePage` | Landing page with hero and about section |
| `NicksJourneyPage` | Personal health journey (Body, Mind, Spirit) |
| `HealthyLivingPage` | Hub for nutrition, activity, lifestyle |
| `ResourcesPage` | External health resource links |

## What to Avoid

- Adding medical advice, diagnosis, or treatment recommendations
- Introducing unnecessary dependencies or backend infrastructure
- Duplicating disclaimer text—import from `src/constants/disclaimer.ts`
- Breaking the existing visual style (stone/gray palette, rounded cards, Playfair + Inter fonts)

## Deployment

Deployed on Vercel. Config in `vercel.json`. Do not commit secrets or `.env` files.
