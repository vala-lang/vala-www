<script setup>
import { useI18n, localeLink } from '../composables/useI18n.js'
import { useSiteData } from '../composables/useSiteData.js'

const { t, supportedLocales } = useI18n()
const site = useSiteData()

function labelFor(code) {
  // Lazy-safe: look up label from static messages.
  // Imported lazily to avoid a circular dep footprint.
  return localeLabels[code] ?? code
}

const localeLabels = {
  en: 'English',
  cs: 'Čeština',
  fr: 'Français',
  pt_BR: 'Português Brasileiro',
  ru: 'Русский',
  zh_CN: '简体中文'
}
</script>

<template>
  <footer>
    <div>
      <ul>
        {{ t.languages }}
        <li v-for="lang in supportedLocales" :key="lang">
          <a :href="localeLink(lang, '/')">{{ labelFor(lang) }}</a>
        </li>
      </ul>
      <div>{{ t.made_by_vala_community }}</div>
      <a :href="site.site_source_code_url">{{ t.view_website_source_code }}</a>
      <p>
        {{ t.license_description }}
        <a rel="license" :href="site.license_url">
          Creative Commons Attribution-ShareAlike 4.0 International License.
        </a>
      </p>
    </div>
  </footer>
</template>
