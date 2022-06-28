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
- `syntaxes/` - Custom syntaxes that aren't included with [Zola's built-in syntax highlighter](https://www.getzola.org/documentation/content/syntax-highlighting/) are stored here. Note: Vala's syntax can be added to Zola by default by creating an issue in the [Zola repo](https://github.com/getzola/zola)
- `templates/` - This is where the majority of markup of the website is written using Tera. Templates are explained in detail here: https://www.getzola.org/documentation/templates/overview/

## Root files

**`config.toml`** - Configuration file for Zola. Features The site's URL, markdown settings and custom variables. More information about this file is availble here: https://www.getzola.org/documentation/getting-started/configuration/
`.editorconfig` - Cross-editor settings for keeping consistent formatting.
`.gitignore` - Defines files and directories that git should ignore.
`.prettierignore` - Defines files and directories that prettier should ignore.
`.prettierrc` - Defines overrides for how prettier should format code in this repository.
`LICENSE` - The website's license information.
`README.md` - The repository's README file. The first file we expect people to read to understand the repository. The contents of this file may be shown in this repository's page in codeforges such as GitHub, GitLab, etc.
