import type { Metadata } from 'next'
import ResourcesPage from '../../src/components/ResourcesPage'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Trusted sources I reference for lifestyle, nutrition, and physical activity.',
  alternates: { canonical: '/resources' },
}

export default function Page() {
  return <ResourcesPage />
}
