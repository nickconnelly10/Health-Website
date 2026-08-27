import type { Metadata } from 'next'
import HealthyLivingPage from '../../src/components/HealthyLivingPage'

export const metadata: Metadata = {
  title: 'Healthy Living',
  description: 'How I approach lifestyle, nutrition, and movement — personal habits, not prescriptions.',
  alternates: { canonical: '/healthy-living' },
}

export default function Page() {
  return <HealthyLivingPage />
}
