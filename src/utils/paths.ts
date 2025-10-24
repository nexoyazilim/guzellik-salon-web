export type Lng = 'en' | 'tr'

export const slugs = {
  en: { home: 'home', services: 'services', gallery: 'gallery', contact: 'contact', booking: 'booking' },
  tr: { home: 'anasayfa', services: 'hizmetler', gallery: 'galeri', contact: 'iletisim', booking: 'randevu' },
}

export type RouteKey = keyof typeof slugs.en

export const pathFor = (lng: Lng, key: RouteKey) => `/${lng}/${slugs[lng][key]}`

export const normalizeLng = (lng: string | undefined): Lng => (lng === 'en' || lng === 'tr' ? lng : 'tr')

export const routeKeyFromSlug = (slug: string): RouteKey => {
  const entries = Object.entries(slugs.en) as [RouteKey, string][]
  for (const [key, enSlug] of entries) {
    if (slug === enSlug) return key
  }
  const trEntries = Object.entries(slugs.tr) as [RouteKey, string][]
  for (const [key, trSlug] of trEntries) {
    if (slug === trSlug) return key
  }
  return 'home'
}

