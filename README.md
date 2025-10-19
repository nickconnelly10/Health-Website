# Health & Wellness Dashboard

A modern, responsive health and wellness website featuring Nick's personal health journey, evidence-based protocols, and comprehensive resources for optimal health and longevity.

## Features

- **Home Page**: Hero section with health & wellness focus and resource overview
- **Nick's Journey**: Personal health journey showcasing Body, Mind, and Spirit sections
- **Health Resources**: Comprehensive collection of health protocols and educational content
- **Resource Pages**: Detailed guides for Nutrition, Physical Activity, and Lifestyle
- **Responsive**: Modern UI that works perfectly on desktop and mobile
- **Fast**: Static deployment with global CDN
- **Beautiful Design**: Clean, medical-inspired design with custom animations

## Architecture

```
Frontend (React/TypeScript) → Static Site → Health Resources & Personal Journey
```

- **Frontend**: React with TypeScript, Vite build system, Tailwind CSS
- **Content**: Personal health journey with photos and videos, plus static health resources
- **Deployment**: Vercel with automatic deployments

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom health-focused theme
- **Testing**: Vitest for unit testing
- **Media**: Support for images (JPG) and videos (MOV)

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/nickconnelly10/health.nickconnelly.box.git
cd health.nickconnelly.box
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

## Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npx vercel login
   ```

2. **Deploy**:
   ```bash
   npx vercel --prod
   ```

3. **Custom Domain**: Set to `health.nickconnelly.box` in the Vercel dashboard

## Project Structure

```
src/
├── components/           # React UI components
│   ├── HomePage.tsx     # Home page with hero section
│   ├── NicksJourneyPage.tsx  # Personal journey page
│   ├── AboutPage.tsx    # About section
│   ├── ContactPage.tsx  # Contact information
│   ├── HealthBanner.tsx # Site header/navigation
│   ├── HealthFooter.tsx # Site footer
│   └── ...              # Other page components
├── utils/               # Utility functions
└── index.css           # Global styles

public/
├── photos/             # Image assets
│   ├── home/           # Home page images
│   └── journey/        # Journey page images
│       ├── body/       # Body section images
│       ├── mind/       # Mind section images
│       └── spirit/     # Spirit section images
├── videos/             # Video assets
│   └── journey/        # Journey page videos
└── favicon.svg         # Site favicon
```

## Design System

The site uses a health-focused theme with:
- **Colors**: Clean, medical-inspired palette with grays and accent colors
- **Typography**: Modern, readable fonts with proper hierarchy
- **Components**: Consistent card layouts, buttons, and media elements
- **Animations**: Smooth fade-in and slide-up animations
- **Accessibility**: WCAG compliant design with proper alt text

## Media Assets

### Image Structure
- **Home**: `hero-image.jpg` - Main hero image
- **Body**: `nutrition-photo.jpg` - Nutrition section image
- **Mind**: `mind-photo-1.jpg`, `mind-photo-2.jpg` - Reading and gardening images
- **Spirit**: `mural-jordan-jesus.jpg` - Spiritual journey image

### Video Structure
- **Body**: `IMG_2255.mov` - Physical activity video

## External Services

This site links to external services:
- **Main Site**: `https://nickconnelly.com`
- **DeFi Dashboard**: `https://defi.nickconnelly.com`
- **Articles**: `https://nicholasconnelly.substack.com/`

## Domain Configuration

This repository serves the following domains:
- **Primary**: `https://health.nickconnelly.box`

## Legal Pages

Static legal pages are served from the `public/` directory:
- `/privacy.html` - Privacy Policy
- `/terms.html` - Terms of Service

## Testing

Run tests with:
```bash
npm test
```

## Development Ready

This project is 100% development ready with:
- Clean, organized codebase
- No linter errors
- Successful build process
- Responsive design
- Optimized media assets
- Proper TypeScript types
- Error handling for missing images
- SEO-friendly structure

## Deployment

The site is configured for Vercel deployment with:
- Automatic HTTPS
- Global CDN
- Security headers
- Asset optimization
- SPA routing support

---

*Built on BITCOIN • Secure • Transparent • Professional • Health & Wellness Focused*