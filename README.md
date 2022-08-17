# Vala on the Web

Website of the Vala programming language. View the website here: https://vala.dev

You can contribute to the new documentation website here: https://gitlab.gnome.org/lwildberg/vala-tutorial

## Reporting bugs and requesting features

Feel free to [create an new issue](https://github.com/colinkiama/vala-www/issues/new/choose) or [participate in an existing one](https://github.com/colinkiama/vala-www/issues)

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

1. Create an issue
2. Work on the translations. The translation strings are in `config.toml`. You can use these resources for help:
	- https://www.getzola.org/documentation/content/multilingual/
	- https://www.getzola.org/documentation/templates/pages-sections/
3. Create a pull request with the changes you've made, referencing the issue.

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
