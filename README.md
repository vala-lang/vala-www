# Vala on the Web

Website of the Vala programming language. View the website here: https://vala.dev

You can contribute to the new documentation website here: https://gitlab.gnome.org/lwildberg/vala-tutorial

## Reporting bugs and requesting features

Feel free to [create an new issue](https://github.com/vala-lang/vala-www/issues/new/choose) or [participate in an existing one](https://github.com/vala-lang/vala-www/issues)

## System Requirements

- [Zola](https://www.getzola.org) (Version 0.16.0 or higher)

## Getting started

First, start the development server:

```sh
zola serve
```

Then you should be able to access the wesbite on your browser by navigating to: [http://127.0.0.1:1111](http://127.0.0.1:1111).

You can edit the index page by modifying `templates/index.html`. The rest of the pages are defined in `content`.

## Translations

1. Create a new issue
2. Work on the translations. The translation strings are in `config.toml`. You can use these resources for help:
   - https://www.getzola.org/documentation/content/multilingual/
   - https://www.getzola.org/documentation/templates/pages-sections/
3. For markdown pages (pages in `/content` where the content is written in markdown), you need to create a new markdown file for the translated version e.g `page-name.{language_code}.md`.
4. Create a pull request with the changes you've made, referencing the issue.

**Important Notes:**

- You must translate the about page and the home page
- To translate strings in `config.toml` phrase by phrase, copy and paste the original english translations then replace each phrase over time.
- Feel free to ask for help. You can ask in the issue you created or in the [discussions page](https://www.github.com/vala-www/discussions).

## Adding new blog posts

1. Create a new issue (Optional)
2. Inside the `content/blog` directory: create a new markdown file that ends in `.md`, add [front matter](https://www.getzola.org/documentation/content/page/#front-matter) to the file then write the rest of your post below it the front matter.
3. Create a pull request with the changes you've made, referencing the issue.

For more information, check out the ["pages" section of the contributor guide](docs/3-pages.md).

## Website Documentation

Check out the [contributor guide](docs/CONTRIBUTING.md) to learn more about how this website works.

## Additional Resources

- [Zola Documentation](https://www.getzola.org/documentation/getting-started/overview/)
- [Tera Documentation](https://tera.netlify.app/docs/)
- [MDN Web Docs](https://developer.mozilla.org)
