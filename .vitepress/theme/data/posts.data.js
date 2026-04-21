// Blog post data loader for VitePress.
//
// Discovers per-locale post trees and emits sorted metadata used by:
// - LatestBlog.vue on the home page (top N per locale).
// - BlogLayout.vue for the paginated blog index.
// - PostLayout.vue for neighbour links.
// - scripts/generate-atom.mjs as the source of truth for the Atom feed.
//
// Runs at build time via VitePress's data-loading API; the return value is
// serialised into the generated bundle.

import { createContentLoader } from 'vitepress'

// English posts live at the repo root (`blog/*.md`) because `en` is the
// default locale. Translated posts live under `<code>/blog/*.md`.
const POST_PATTERNS = [
  'blog/*.md',
  'cs/blog/*.md',
  'fr/blog/*.md',
  'pt_BR/blog/*.md',
  'ru/blog/*.md',
  'zh_CN/blog/*.md'
]

function localeFromUrl(url) {
  const match = url.match(/^\/(cs|fr|pt_BR|ru|zh_CN)\/blog\//)
  return match ? match[1] : 'en'
}

function normalizeDate(value) {
  if (!value) return ''
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

export default createContentLoader(POST_PATTERNS, {
  excerpt: true,
  transform(raw) {
    return raw
      .filter((page) => {
        // Skip the blog index pages (they don't have a title with a date).
        if (page.url.endsWith('/blog/')) return false
        return true
      })
      .map((page) => ({
        url: page.url,
        locale: localeFromUrl(page.url),
        excerpt: page.excerpt ?? '',
        frontmatter: {
          title: page.frontmatter.title ?? '',
          date: normalizeDate(page.frontmatter.date),
          description: page.frontmatter.description ?? '',
          authors: page.frontmatter.authors ?? []
        }
      }))
      .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date))
  }
})
