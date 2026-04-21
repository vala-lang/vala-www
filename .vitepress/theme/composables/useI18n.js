import { useData } from 'vitepress'
import { computed } from 'vue'
import { localeMessages, defaultLocale, supportedLocales } from '../../locales/index.js'

export function useI18n() {
  const { localeIndex } = useData()

  const code = computed(() => {
    // VitePress uses "root" as the key for the default locale. Map to its code.
    return localeIndex.value === 'root' ? defaultLocale : localeIndex.value
  })

  const t = computed(() => localeMessages[code.value] ?? localeMessages[defaultLocale])

  return {
    code,
    t,
    defaultLocale,
    supportedLocales
  }
}

export function localeLink(code, path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return code === defaultLocale ? normalized : `/${code}${normalized}`
}
