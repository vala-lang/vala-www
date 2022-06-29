# Structure

## Directories

- `.github` - GitHub-specific data is stored here like the [GitHub Pages Zola deploy action](https://github.com/shalzz/zola-deploy-action).
- `assets/` - Files that aren't deployed with the website but are used to generate pages in the website.
- `content/` - Here's where the content of pages is written with Markdown. Sections are defined here tohttps://github.com/shalzz/zola-deploy-action). There are more about this available here: https://www.getzola.org/documentation/content/overview/
  - `blog/` - Vala Blog content. All the blog posts are stored under here.
  - `about/` - About page contnet.
- `docs/` - The directory where this guide you are reading is under.
- `sass/` - Where sass code to be processed is stored. The `css/` folder inside there is intentional as it copies the sass output straight to the `static/` folder.
  - `css/components/` - Contains files used to style small, specific parts of markup used across the entire site.
  - `css/utils/` - Utilties to be used in other sass files.
- `static/` - Here are the assets stored that will be deployed with the website. The files in the root of the static folder will be located in the root of the website when deployed.
  - `./` - (The root). The favicon, platform icons and `manifest.json` file for the website is stored here.
  - `css/` - CSS files are stored here. There are also generated syntax stylesheets stored here with the pattern: "syntax-theme.{color-scheme}.css". If you change the highlighting theme settings in Zola, you may need to remove these first to see the changes.
  - `fonts/` - There is one variable font named `Inter-roman.var.woff2`. The rest of the files are all Inter fonts for different font weights if a browser doesn't support variable fonts. We use both `.woff` and `.woff2` fonts for better browser compatibility.
  - `icons/` - spritemap (containing icons used throughout the website) and showcase icons are stored here
    - `showcase/` - Showcase icons
  - `img/` - These are generic images used in the website. `vala-hero-wide.png` is used in link embeds and `vala-hero` is the default image used for posts on the website.
  - `js/` - JavaScript files used in the website.
- `syntaxes/` - Custom syntaxes that aren't included with [Zola's built-in syntax highlighter](https://www.getzola.org/documentation/content/syntax-highlighting/) are stored here. Note: Vala's syntax can be added to Zola by default by creating an issue in the [Zola repo](https://github.com/getzola/zola)
- `templates/` - This is where the majority of markup of the website is written using Tera. Templates are explained in detail here: https://www.getzola.org/documentation/templates/overview/
  - `macros` - Contains files that with macros that generate markup based in data you pass in when you call them.
  - `partials` - Similar to `macros` but only a file can be a partial. There can't be multiple partials in one file and you can't pass in data when including the partial to your template.
  - `shortcodes` - Markdown or tera temlpate code that is called from your content markdown.

## Root files

**`config.toml`** - Configuration file for Zola. Features The site's URL, markdown settings and custom variables. More information about this file is availble here: https://www.getzola.org/documentation/getting-started/configuration/
`.editorconfig` - Cross-editor settings for keeping consistent formatting.
`.gitignore` - Defines files and directories that git should ignore.
`.prettierignore` - Defines files and directories that prettier should ignore.
`.prettierrc` - Defines overrides for how prettier should format code in this repository.
`LICENSE` - The website's license information.
`README.md` - The repository's README file. The first file we expect people to read to understand the repository. The contents of this file may be shown in this repository's page in codeforges such as GitHub, GitLab, etc.
