# Potential Issues

## New site deployment doesn't work correctly after domain changes

Two things to check when the site moves to a new domain:

1. `site.base_url` in `.vitepress/data/site.js` - used as the canonical origin in Atom feeds and other absolute URLs.
2. `sitemap.hostname` in `.vitepress/config.mjs` - used by VitePress when generating `sitemap.xml`.
3. `public/CNAME` - GitHub Pages reads this file to know which custom domain to serve the site under.

All three should be updated together when the domain changes.
