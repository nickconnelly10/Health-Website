import type { Metadata } from 'next'
import PrivacyPage from '../../src/components/PrivacyPage'
import { pageMetadata } from '../../src/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How this site collects and uses information.',
  path: '/privacy',
})

export default function Page() {
  return <PrivacyPage />
}
