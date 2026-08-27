import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://health.nickconnelly.com'
  return [
    { url: `${base}/`, lastModified: new Date('2026-08-27') },
    { url: `${base}/nicks-journey`, lastModified: new Date('2026-08-27') },
    { url: `${base}/healthy-living`, lastModified: new Date('2026-08-27') },
    { url: `${base}/resources`, lastModified: new Date('2026-08-27') },
    { url: `${base}/privacy`, lastModified: new Date('2026-08-27') },
    { url: `${base}/terms`, lastModified: new Date('2026-08-27') },
  ]
}
