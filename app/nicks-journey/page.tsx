import type { Metadata } from 'next'
import NicksJourneyPage from '../../src/components/NicksJourneyPage'
import { pageMetadata } from '../../src/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: "Nick's Journey",
  description: 'My personal journey into body, mind, and spirit.',
  path: '/nicks-journey',
})

export default function Page() {
  return <NicksJourneyPage />
}
