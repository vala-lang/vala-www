#!/usr/bin/env bun
// Generate Atom 1.0 feeds for every locale that has blog posts.
//
// VitePress doesn't ship feed generation, so we run this after
// `vitepress build` and emit the feeds straight into the final
// `.vitepress/dist/` tree so they are deployed alongside the site.
//
// The default locale writes to /atom.xml and every other locale
// writes to /<code>/atom.xml.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

import { site } from '../.vitepress/data/site.js'
import { localeMessages, defaultLocale, supportedLocales } from '../.vitepress/locales/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, '.vitepress', 'dist')

function walkMarkdown(dir) {
  const entries = []
  let items
  try {
    items = readdirSync(dir)
  } catch {
    return entries
  }
  for (const name of items) {
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) {
      entries.push(...walkMarkdown(full))
    } else if (st.isFile() && name.endsWith('.md') && name !== 'index.md') {
      entries.push(full)
    }
  }
  return entries
}

function blogDirFor(locale) {
  return locale === defaultLocale ? join(ROOT, 'blog') : join(ROOT, locale, 'blog')
}

function urlFor(locale, file) {
  const rel = relative(ROOT, file).replace(/\\/g, '/').replace(/\.md$/, '')
  return `${site.base_url}/${rel}/`
}

function toIsoDate(value) {
  if (!value) return new Date().toISOString()
  if (value instanceof Date) return value.toISOString()
  const d = new Date(String(value))
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function feedFor(locale) {
  const files = walkMarkdown(blogDirFor(locale))
  const posts = files
    .map((file) => {
      const raw = readFileSync(file, 'utf8')
      const { data } = matter(raw)
      return {
        url: urlFor(locale, file),
        title: data.title ?? '',
        description: data.description ?? '',
        authors: Array.isArray(data.authors) ? data.authors : [],
        updated: toIsoDate(data.date)
      }
    })
    .sort((a, b) => b.updated.localeCompare(a.updated))

  if (posts.length === 0) return null

  const t = localeMessages[locale] ?? localeMessages[defaultLocale]
  const feedPath = locale === defaultLocale ? '/atom.xml' : `/${locale}/atom.xml`
  const selfHref = `${site.base_url}${feedPath}`
  const indexHref = locale === defaultLocale ? `${site.base_url}/` : `${site.base_url}/${locale}/`
  const updated = posts[0].updated

  const entries = posts
    .map((post) => {
      const authorTags = (post.authors.length > 0 ? post.authors : ['The Vala Team'])
        .map((name) => `    <author><name>${escapeXml(name)}</name></author>`)
        .join('\n')
      return `  <entry>
    <title>${escapeXml(post.title)}</title>
    <id>${escapeXml(post.url)}</id>
    <link href="${escapeXml(post.url)}"/>
    <updated>${post.updated}</updated>
    <summary>${escapeXml(post.description)}</summary>
${authorTags}
  </entry>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${locale.replace('_', '-')}">
  <title>${escapeXml(site.title)} - ${escapeXml(t.blog)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <link rel="self" type="application/atom+xml" href="${escapeXml(selfHref)}"/>
  <link rel="alternate" type="text/html" href="${escapeXml(indexHref)}"/>
  <id>${escapeXml(selfHref)}</id>
  <updated>${updated}</updated>
  <generator uri="https://vitepress.dev">vala-www atom generator</generator>
${entries}
</feed>
`

  return { feedPath, xml }
}

let written = 0
for (const locale of supportedLocales) {
  const feed = feedFor(locale)
  if (!feed) continue
  const outPath = join(DIST, feed.feedPath.replace(/^\//, ''))
  writeFileSync(outPath, feed.xml)
  console.log(`atom: wrote ${feed.feedPath}`)
  written += 1
}

if (written === 0) {
  console.warn('atom: no blog posts found, no feeds written')
}
