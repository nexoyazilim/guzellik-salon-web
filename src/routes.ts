export type SupportedLang = 'en' | 'tr'

export type RouteKey = 'home' | 'services' | 'gallery' | 'contact' | 'booking'

export const slugsByLang: Record<SupportedLang, Record<RouteKey, string>> = {
  en: {
    home: '/',
    services: '/services',
    gallery: '/gallery',
    contact: '/contact',
    booking: '/booking',
  },
  tr: {
    home: '/',
    services: '/hizmetler',
    gallery: '/galeri',
    contact: '/iletisim',
    booking: '/randevu',
  },
}

export function localizedPath(lang: SupportedLang, key: RouteKey): string {
  return slugsByLang[lang][key]
}

export function detectLangFromPath(pathname: string): SupportedLang {
  const normalized = pathname.toLowerCase()
  const trSlugs = Object.values(slugsByLang.tr)
  if (trSlugs.some((p) => p !== '/' && normalized.startsWith(p))) return 'tr'
  return 'en'
}

export function routeKeyFromPath(pathname: string): RouteKey | null {
  const normalized = pathname.toLowerCase()
  const all: Array<[RouteKey, string]> = (
    Object.entries(slugsByLang.en) as Array<[RouteKey, string]>
  ).concat(Object.entries(slugsByLang.tr) as Array<[RouteKey, string]>)
  for (const [key, slug] of all) {
    if (slug !== '/' && normalized.startsWith(slug)) return key
  }
  if (normalized === '/' || normalized === '') return 'home'
  return null
}

export function switchLangPath(pathname: string, toLang: SupportedLang): string {
  const key = routeKeyFromPath(pathname)
  if (!key) return localizedPath(toLang, 'home')
  return localizedPath(toLang, key)
}


