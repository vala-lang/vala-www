# Structure

## Directories

- `.github` - GitHub-specific data is stored here like the [GitHub Pages Zola deploy action](https://github.com/shalzz/zola-deploy-action).
- `assets/` - Files that aren't deployed with the website but are used to generate pages in the website.
- `content/` - Here's where the content of pages is written with Markdown. Sections are defined here tohttps://github.com/shalzz/zola-deploy-action). There are more about this available here: https://www.getzola.org/documentation/content/overview/
- `docs/` - The directory where this guide you are reading is under.
- `sass/` - Where sass code to be processed is stored. The `css/` folder inside there is intentional as it copies the sass output straight to the `static/` folder.
- `static/` - Here are the assets stored that will be deployed with the website. The files in the root of the static folder will be located in the root of the website when deployed.
- `syntaxes/` - Custom syntaxes that aren't included with Zola's syntax highlighter are stored here. Note: Vala's syntax can be added to Zola by default by creating an issue in the [Zola repo](https://github.com/getzola/zola)
- `templates/` - This is where the majority of markup of the website is written using Tera.

## Root files


