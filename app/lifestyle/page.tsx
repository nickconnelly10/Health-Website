import { permanentRedirect } from 'next/navigation'

export default function LifestyleRedirect() {
  permanentRedirect('/healthy-living?tab=lifestyle')
}
