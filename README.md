# Muscadine Health AI

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
  - `api/` — API route handlers (with `auth/` for authentication)
  - `context/` — React context providers
  - `protocols/` — Research PDFs and JSON protocol files
- `public/` — Static assets (favicon, privacy, terms)
- `prisma/` — Database schema and migrations
- `scripts/` — Utility scripts
- `server.ts` — Server entry point

---

*Built on BITCOIN • Secure • Transparent • Professional* 