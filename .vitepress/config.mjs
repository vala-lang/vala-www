import { defineConfig } from 'vitepress'
import { localeMessages, supportedLocales, defaultLocale } from './locales/index.js'
import { site } from './data/site.js'
import valaGrammar from './shiki/vala.tmLanguage.json'

const commonHead = [
  ['meta', { name: 'theme-color', content: '#7239b3' }],
  ['meta', { name: 'msapplication-TileColor', content: '#a56de2' }],
  ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['link', { type: 'text/plain', rel: 'author', href: '/humans.txt' }],
  ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  [
    'link',
    {
      rel: 'alternate',
      type: 'application/atom+xml',
      title: 'Vala - Feed',
      href: '/atom.xml'
    }
  ]
]

// Locale → VitePress `lang` attribute (BCP-47 style).
const langAttr = {
  en: 'en',
  cs: 'cs',
  fr: 'fr',
  pt_BR: 'pt-BR',
  ru: 'ru',
  zh_CN: 'zh-CN'
}

function buildLocales() {
  const out = {}
  for (const code of supportedLocales) {
    const t = localeMessages[code]
    const entry = {
      label: t.lang_label,
      lang: langAttr[code],
      title: t.site_title,
      description: t.site_description,
      themeConfig: {
        nav: [
          { text: t.about, link: code === defaultLocale ? '/about/' : `/${code}/about/` },
          { text: t.documentation, link: site.docs_url },
          {
            text: t.community,
            link: code === defaultLocale ? '/#community' : `/${code}/#community`
          },
          { text: t.blog, link: code === defaultLocale ? '/blog/' : `/${code}/blog/` },
          { text: t.source_code, link: site.language_source_code_url }
        ]
      }
    }
    if (code === defaultLocale) {
      out.root = entry
    } else {
      out[code] = entry
    }
  }
  return out
}

export default defineConfig({
  title: site.title,
  description: site.description,
  cleanUrls: true,
  lastUpdated: false,
  sitemap: { hostname: site.base_url },

  // Only the per-locale content trees at the repo root and inside each
  // locale folder should produce pages. Everything else — contributor
  // docs, README etc. is excluded so it doesn't
  // leak into the build.
  srcExclude: ['**/README.md', 'docs/**'],

  head: commonHead,

  locales: buildLocales(),

  markdown: {
    theme: {
      light: 'one-light',
      dark: 'one-dark-pro'
    },
    // Shiki has no built-in Vala grammar, so we ship a minimal TextMate
    // grammar with the theme and register it here. Without this, fenced
    // ```vala blocks would render as plain text.
    languages: [
      {
        ...valaGrammar,
        name: 'vala',
        aliases: ['vapi']
      }
    ]
  },

  themeConfig: {
    siteData: site
  }
})
