import type { Metadata } from 'next'
import ResourcesPage from '../../src/components/ResourcesPage'
import { pageMetadata } from '../../src/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Resources',
  description: 'Trusted sources I reference for lifestyle, nutrition, and physical activity.',
  path: '/resources',
})

export default function Page() {
  return <ResourcesPage />
}
