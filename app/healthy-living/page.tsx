import { Suspense } from 'react'
import type { Metadata } from 'next'
import HealthyLivingPage from '../../src/components/HealthyLivingPage'
import { pageMetadata } from '../../src/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Healthy Living',
  description: 'How I approach lifestyle, nutrition, and movement — personal habits, not prescriptions.',
  path: '/healthy-living',
})

export default function Page() {
  return (
    <Suspense fallback={<div className="page-shell pt-28" />}>
      <HealthyLivingPage />
    </Suspense>
  )
}
