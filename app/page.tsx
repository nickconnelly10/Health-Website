import type { Metadata } from 'next'
import HomePage from '../src/components/HomePage'

export const metadata: Metadata = {
  title: { absolute: 'Health & Wellness' },
  description: 'My personal journey and resources for optimal health and longevity.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return <HomePage />
}
