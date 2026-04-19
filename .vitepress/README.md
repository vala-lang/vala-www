# VitePress site source

This directory houses the VitePress config, custom theme, locale strings, and shared data for [vala.dev](https://vala.dev).

Entry points:

- `config.mjs` - VitePress config (`defineConfig`), `locales`, `head`, markdown (Shiki Vala grammar), theme settings.
- `theme/index.js` - custom theme entry: registers the root `Layout` and per-route layouts (home, blog, post, 404).
- `locales/<code>.js` - translation strings for each supported language.
- `data/site.js` - site-wide data migrated from the former `[extra]` tables in `config.toml`.

Run locally with Bun:

```sh
bun install
bun run dev
```
