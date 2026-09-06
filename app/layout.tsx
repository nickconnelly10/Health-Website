import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HealthBanner from '../src/components/HealthBanner'
import DeferredAnalytics from '../src/components/DeferredAnalytics'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://health.nickconnelly.com'),
  title: {
    default: 'Health & Wellness',
    template: '%s | Health & Wellness',
  },
  description: 'My personal journey and resources for optimal health and longevity.',
  icons: { icon: '/favicon.svg' },
  manifest: '/manifest.json',
  openGraph: {
    siteName: 'Health & Wellness',
    type: 'website',
    images: [
      {
        url: '/photos/home/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Health & Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/photos/home/hero-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <HealthBanner />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <DeferredAnalytics />
        </div>
      </body>
    </html>
  )
}
