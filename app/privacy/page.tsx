import type { Metadata } from 'next'
import PrivacyPage from '../../src/components/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How this site collects and uses information.',
  alternates: { canonical: '/privacy' },
}

export default function Page() {
  return <PrivacyPage />
}
