# 🏥 Muscadine Health Dashboard

A modern, responsive health dashboard for the Muscadine ecosystem. Built as a static React app with health resources and educational content.

## ✨ Features

- **📚 Health Resources**: Comprehensive collection of health protocols and educational content
- **📖 Resource Pages**: Detailed guides for Nutrition, Physical Activity, and Lifestyle
- **🔒 Secure**: HTTPS-only, comprehensive security headers enabled
- **📱 Responsive**: Modern UI that works on desktop and mobile
- **⚡ Fast**: Static deployment with global CDN
- **🌙 Dark Mode**: Full dark/light mode support across all components

## 🏗️ Architecture

```
Frontend (React/TypeScript) → Static Site → Health Resources
```

- **Frontend**: React with TypeScript, Vite build system, Tailwind CSS
- **Content**: Static health resources and educational materials
- **Deployment**: Vercel with automatic deployments

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom color scheme
- **Testing**: Vitest for unit testing

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/nickconnelly10/health.nicholasconnelly.box.git
cd health.nicholasconnelly.box
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npx vercel login
   ```

2. **Deploy**:
   ```bash
   npx vercel --prod
   ```

3. **Custom Domain**: Set to `health.nicholasconnelly.box` in the Vercel dashboard

## 📁 Project Structure

```
src/
├── components/     # React UI components
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
public/            # Static assets (favicon, legal pages)
```

## 🎨 Design System

The site uses a custom health-focused theme with:
- **Colors**: Clean, medical-inspired palette
- **Typography**: Modern, readable fonts
- **Components**: Consistent button, card, and layout patterns
- **Accessibility**: WCAG compliant design

## 🔗 External Services

This site links to external services:
- **Main Site**: `https://nicholasconnelly.box`
- **DeFi Dashboard**: `https://defi.nicholasconnelly.box`
- **Articles**: `https://nicholasconnelly.substack.com/`

## 🌐 Domain Configuration

This repository serves the following domains:
- **Primary**: `https://health.nicholasconnelly.box`
- **Muscadine**: `https://health.muscadine.box`

## 📄 Legal Pages

Static legal pages are served from the `public/` directory:
- `/privacy.html` - Privacy Policy
- `/terms.html` - Terms of Service

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 🚀 Deployment

The site is configured for Vercel deployment with:
- Automatic HTTPS
- Global CDN
- Security headers
- Asset optimization
- SPA routing support

## 📦 Deployment Hygiene: What to Commit

| File/Folder         | Required for Deployment? | Commit to Repo? | Notes                                 |
|---------------------|-------------------------|-----------------|---------------------------------------|
| `node_modules/`     | No                      | No              | Only for local dev/build. Should be in `.gitignore`. |
| `package-lock.json` | Yes                     | Yes             | Ensures consistent dependency install |
| `vercel.json`       | Yes (if using Vercel)   | Yes             | Custom Vercel config                  |
| `dist/`             | No                      | No              | Build output, auto-generated          |
| `public/`           | Yes                     | Yes             | Static assets (favicon, legal, etc)   |
| `src/`              | Yes                     | Yes             | Source code                           |
| `.gitignore`        | Yes                     | Yes             | Ensures build artifacts are ignored   |

**Delete or do not commit:**
- `node_modules/` (never commit)
- `dist/` (never commit)
- Any backup files like `package-lock 2.json`, `vercel 2.json`, etc.

---

*Built on BITCOIN • Secure • Transparent • Professional • Strava Club* 