import type { Metadata } from 'next'
import HomePage from '../src/components/HomePage'
import { pageMetadata } from '../src/lib/metadata'

export const metadata: Metadata = pageMetadata({
  absoluteTitle: 'Health & Wellness',
  description: 'My personal journey and resources for optimal health and longevity.',
  path: '/',
})

export default function Page() {
  return <HomePage />
}
