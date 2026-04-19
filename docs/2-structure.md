# Structure

## Directories

- `.github/` - GitHub-specific data is stored here. `.github/workflows/deploy-website.yaml` installs Bun, builds the site with `bun run build`, and publishes `.vitepress/dist` to the `gh-pages` branch via [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).
- `.vitepress/` - VitePress configuration, custom theme, and data modules.
  - `config.mjs` - Site metadata, locales, markdown/shiki configuration, and `<head>` tags.
  - `data/` - Site-wide data loaded by Vue components and layouts (`site.js`, `showcase-items.json`).
  - `locales/` - One JavaScript module per language (`en.js`, `cs.js`, `fr.js`, `pt_BR.js`, `ru.js`, `zh_CN.js`) plus an `index.js` that re-exports them.
  - `shiki/` - Custom TextMate grammars registered with Shiki (for example `vala.tmLanguage.json`).
  - `theme/` - The custom VitePress theme: Vue components, layouts, composables, and the SCSS entry point.
- `blog/` - English blog posts as markdown files. Each file's slug becomes the URL.
- `about/` - The English About page (`about/index.md`).
- `<locale>/` (for example `cs/`, `fr/`, `pt_BR/`, `ru/`, `zh_CN/`) - Translations of the home, About, and blog pages. Each locale mirrors the structure at the repository root.
- `index.md` - The English home page, rendered with the home layout.
- `docs/` - The directory where this contributor guide lives.
- `public/` - Static assets copied verbatim into the build output. Files in the root (`favicon.ico`, icons, `manifest.json`, `humans.txt`, `CNAME`, etc.) are served from the site root.
  - `css/` - Precompiled CSS and any legacy stylesheets that ship alongside the site.
  - `fonts/` - Inter variable and static web fonts (`.woff` / `.woff2`).
  - `icons/` - Spritemap (containing icons used throughout the website) and showcase icons.
    - `showcase/` - Showcase icons.
  - `img/` - Generic images used across the site. `vala-hero-wide.png` is used in link embeds and `vala-hero.png` is the default image for blog posts.
  - `js/` - JavaScript files included via `<script>` tags.
- `sass/` - Sass/SCSS source. The VitePress theme imports these through `.vitepress/theme/styles/main.scss`.
  - `css/components/` - Files used to style small, specific parts of markup used across the entire site.
  - `css/utils/` - Utilities consumed by other sass files.
- `scripts/` - Build-time scripts run with `bun run`. `generate-atom.mjs` writes the Atom feeds into `.vitepress/dist/` after `vitepress build`.

## Root files

- **`package.json`** - Lists the JavaScript dependencies (VitePress, Vue, Sass, gray-matter, Prettier) and the `bun run` tasks (`dev`, `build`, `preview`, `format`).
- **`bun.lock`** - Bun's lockfile, committed for reproducible installs.
- **`.vitepress/config.mjs`** - The main VitePress configuration file. Previously `config.toml`.
- `.editorconfig` - Cross-editor settings for keeping consistent formatting.
- `.gitignore` - Defines files and directories that git should ignore (`node_modules/`, `.vitepress/cache/`, `.vitepress/dist/`, etc.).
- `.prettierignore` - Defines files and directories that Prettier should ignore.
- `.prettierrc` - Defines overrides for how Prettier should format code in this repository.
- `Dockerfile` / `.devcontainer.json` - A Bun-based container image that runs `bun run dev` on port 5173 for a reproducible development environment.
- `LICENSE` - The website's license information.
- `README.md` - The repository's README file. The first file we expect people to read to understand the repository.
