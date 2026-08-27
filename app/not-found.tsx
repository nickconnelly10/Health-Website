import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="page-shell">
      <div className="max-w-xl mx-auto container-padding pt-32 pb-24 text-center">
        <h1 className="text-gray-800 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          That page does not exist. Head back home or browse healthy living and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium">
            Home
          </Link>
          <Link href="/healthy-living" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium">
            Healthy Living
          </Link>
        </div>
      </div>
    </div>
  )
}
