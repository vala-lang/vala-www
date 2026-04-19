// Blog post data loader for VitePress.
//
// Discovers per-locale post trees (e.g. `en/blog/*.md`, `cs/blog/*.md`) and
// emits sorted metadata used by:
// - LatestBlog.vue on the home page (top N per locale).
// - BlogLayout.vue for the paginated blog index.
// - PostLayout.vue for neighbour links.
// - scripts/generate-atom.mjs as the source of truth for the Atom feed.
//
// Runs at build time via VitePress's data-loading API; the return value is
// serialised into the generated bundle.

import { createContentLoader } from 'vitepress'

const LOCALES = ['en', 'cs', 'fr', 'pt_BR', 'ru', 'zh_CN']

export default createContentLoader(
  LOCALES.map((l) => `${l}/blog/*.md`),
  {
    excerpt: true,
    transform(raw) {
      return raw
        .filter((page) => !page.url.endsWith('/blog/'))
        .map((page) => {
          const match = page.url.match(/^\/([^/]+)\/blog\//)
          const locale = match ? match[1] : 'en'
          return {
            url: page.url,
            locale,
            excerpt: page.excerpt ?? '',
            frontmatter: {
              title: page.frontmatter.title ?? '',
              date: page.frontmatter.date ?? '',
              description: page.frontmatter.description ?? '',
              authors: page.frontmatter.authors ?? []
            }
          }
        })
        .sort((a, b) => {
          const ad = a.frontmatter.date || ''
          const bd = b.frontmatter.date || ''
          return bd.localeCompare(ad)
        })
    }
  }
)
