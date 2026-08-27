import type { Metadata } from 'next'
import NicksJourneyPage from '../../src/components/NicksJourneyPage'

export const metadata: Metadata = {
  title: "Nick's Journey",
  description: 'My personal journey into body, mind, and spirit.',
  alternates: { canonical: '/nicks-journey' },
}

export default function Page() {
  return <NicksJourneyPage />
}
