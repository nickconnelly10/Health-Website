import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import HealthBanner from '../src/components/HealthBanner'
import HealthFooter from '../src/components/HealthFooter'

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
    title: 'Health & Wellness',
    description: 'My personal journey and resources for optimal health and longevity.',
    url: 'https://health.nickconnelly.com',
    siteName: 'Health & Wellness',
    type: 'website',
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
          <HealthFooter />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
