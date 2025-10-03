export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru'] as const
export const defaultNS = 'base'
export const cookieName = 'i18next'

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    debug: false,
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
