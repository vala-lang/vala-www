#!/usr/bin/env bun
// One-shot helper: fetch upstream vala.YAML-tmLanguage from
// vala-lang/vala-vscode and convert it into a Shiki-ready
// TextMate grammar JSON.
//
// Not part of the site build - kept around for the maintainer so
// the grammar can be refreshed in place whenever upstream moves.

import yaml from 'js-yaml'

const BLOB_URL =
  'https://api.github.com/repos/vala-lang/vala-vscode/contents/syntaxes/vala.YAML-tmLanguage'

const res = await fetch(BLOB_URL, {
  headers: { Accept: 'application/vnd.github.raw' }
})
if (!res.ok) {
  throw new Error(`Failed to fetch grammar: ${res.status} ${res.statusText}`)
}
const text = await res.text()
const grammar = yaml.load(text)

// Drop fields Shiki doesn't need, and the external include that
// would pull in text.html.javadoc (not registered in our Shiki).
delete grammar.uuid
if (grammar.repository?.comments?.patterns) {
  grammar.repository.comments.patterns =
    grammar.repository.comments.patterns.filter(
      (p) => p.include !== 'text.html.javadoc'
    )
}

const dest = new URL('../.vitepress/shiki/vala.tmLanguage.json', import.meta.url)
await Bun.write(dest, JSON.stringify(grammar, null, 2) + '\n')
console.log(`wrote ${dest.pathname}`)
