import type { Metadata } from 'next'
import TermsPage from '../../src/components/TermsPage'
import { pageMetadata } from '../../src/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Terms for using this personal health and wellness site.',
  path: '/terms',
})

export default function Page() {
  return <TermsPage />
}
