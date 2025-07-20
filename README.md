# Muscadine Launch Health

**Institutional-grade AI chat for health and financial self-sovereignty.**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## 🚀 Vercel Deployment
1. **Create a new Vercel project** and set the **Root Directory** to the project root (not `health-site`).
2. **Build Command:**
   ```bash
   npm run build
   ```
3. **Output Directory:**
   ```
   dist
   ```
4. **Custom Domain:**
   - Set to `health.muscadine.box` in the Vercel dashboard.

## 📁 Project Structure

- `index.html` — Main entry point for Vite (required in project root)
- `src/` — Application source code
  - `components/` — React components
    - `NutritionPage.tsx` — Comprehensive nutrition guidance with supplements
    - `PhysicalActivityPage.tsx` — Exercise recommendations and tips
    - `Dashboard.tsx` — Main dashboard interface
    - `ChatWindow.tsx` — AI chat interface
    - `Sidebar.tsx` — Navigation sidebar
  - `api/` — API route handlers (with `auth/` for authentication)
  - `context/` — React context providers
  - `protocols/` — Research PDFs and JSON protocol files
- `public/` — Static assets (favicon, privacy, terms)
- `prisma/` — Database schema and migrations
- `scripts/` — Utility scripts
- `server.ts` — Server entry point

## 🆕 Latest Features (v0.0.11)

### Nutrition Guidance
- **Whole-foods principles** inspired by The Paleo Cure
- **Shopping strategies** for perimeter shopping and label reading
- **Plate building** with protein quality, healthy fats, and carbohydrates
- **Timing strategies** including 8-hour eating windows
- **Batch cooking** recommendations

### Comprehensive Supplement Guide
- **Essential Nutrients**: Multivitamins, Vitamin D, B12
- **Immune Support**: Liposomal Vitamin C, Elderberry, Zinc
- **Sleep Support**: Magnesium Glycinate, Melatonin (with caution), L-Theanine
- **Energy & Brain Health**: Omega-3s, CoQ10, Creatine
- **Methylation Support**: Methylated Folate, B6 (P5P)
- **Gut Health**: Natural probiotics, Prebiotics, Glutamine
- **Safety Guidelines** for supplement use

### Exercise Recommendations
- **CDC guidelines** for weekly activity requirements
- **Daily movement** integration strategies
- **Strength training** (weight-bearing and bodyweight options)
- **Aerobic activities** with sprinting recommendations
- **Mobility and flexibility** guidance
- **Recreational activities** and functional movement
- **Routine building** and consistency tips

### Technical Improvements
- **Equal-width layouts** for better content balance
- **Enhanced UI/UX** with improved typography and spacing
- **Responsive design** for mobile and desktop
- **Comprehensive testing** with Vitest

## 🛠️ Available Scripts

- `npm run dev` — Start development server (frontend + backend)
- `npm run build` — Build for production
- `npm run test` — Run test suite
- `npm run db:studio` — Open Prisma Studio for database management
- `npm run db:migrate` — Run database migrations

## Product

- **Launch Health**: `https://health.muscadine.box`

---

*Built on BITCOIN • Secure • Transparent • Professional • Strava Club* 