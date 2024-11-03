# Vala on the Web

Website of the Vala programming language. View the website here: https://vala.dev

You can contribute to the new documentation website here: https://github.com/vala-lang/vala-docs

## Reporting bugs and requesting features

Feel free to [create a new issue](https://github.com/vala-lang/vala-www/issues/new/choose) or [participate in an existing one](https://github.com/vala-lang/vala-www/issues)

## System Requirements

- [Zola](https://www.getzola.org) (Version 0.19.1 or higher)

## Getting started

First, start the development server:

```sh
zola serve
```

Then you should be able to access the website on your browser by navigating to: [http://127.0.0.1:1111](http://127.0.0.1:1111).

You can edit the index page by modifying `templates/index.html`. The rest of the pages are defined in `content`.

## Translations

1. Fork this repository
2. Work on the translations. The translation strings are in `config.toml`. You can use these resources for help:
   - https://www.getzola.org/documentation/content/multilingual/
   - https://www.getzola.org/documentation/templates/pages-sections/
3. For markdown pages (pages in `/content` where the content is written in markdown), you need to create a new markdown file for the translated version e.g. `page-name.{language_code}.md`.
4. Add your language to the `lang_map` macro in `templates/macros/body.html`
5. Create a pull request with the changes you've made

**Important Notes:**

- You must translate the About page and the Home page
- To translate strings in `config.toml` phrase by phrase, copy and paste the original English translations then replace each phrase over time.
- Feel free to ask for help. You can ask in the issue you created or on the [discussions page](https://www.github.com/vala-www/discussions).

## Adding new blog posts

1. Inside the `content/blog` directory: create a new markdown file that ends in `.md`, add [front matter](https://www.getzola.org/documentation/content/page/#front-matter) to the file then write the rest of your post below the front matter.
2. Create a pull request with the changes you've made.

Note: 

For more information, check out the ["pages" section of the contributor guide](docs/3-pages.md).

## Website Documentation

Check out the [contributor guide](docs/CONTRIBUTING.md) to learn more about how this website works.

## Credits

Various people have contributed to this website in some way and, more people will also help with the project over time.

The Contributors section in the GitHub repository doesn't tell the whole story. There's a file called `humans.txt` (available in [/static/humans.txt](/static/humans.txt)) where contributor details can be added.

Feel free to request for your details to be added or add them yourself if you have contributed to this project in any way. This is available for anyone to see if they visit: https://vala.dev/humans.txt.

You can find out more about humans.txt at: https://humanstxt.org/.

## Additional Resources

- [Zola Documentation](https://www.getzola.org/documentation/getting-started/overview/)
- [Tera Documentation](https://tera.netlify.app/docs/)
- [MDN Web Docs](https://developer.mozilla.org)
