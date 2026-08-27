import type { Metadata } from 'next'
import TermsPage from '../../src/components/TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using this personal health and wellness site.',
  alternates: { canonical: '/terms' },
}

export default function Page() {
  return <TermsPage />
}
