# Vala on the Web

Website of the Vala programming language. View the website here: https://vala.dev

You can contribute to the new documentation website here: https://github.com/vala-lang/vala-docs

## Reporting bugs and requesting features

Feel free to [create a new issue](https://github.com/vala-lang/vala-www/issues/new/choose) or [participate in an existing one](https://github.com/vala-lang/vala-www/issues)

## System Requirements

- [Bun](https://bun.sh) (version 1.1 or newer)

Bun is the only required toolchain; it bundles the package manager, the runtime, and the task runner used by this project.

## Getting started

Install the dependencies:

```sh
bun install
```

Start the development server:

```sh
bun run dev
```

Then open the website in your browser at [http://127.0.0.1:5173](http://127.0.0.1:5173).

Other scripts:

```sh
bun run build     # produce a static site in .vitepress/dist (and generate atom.xml)
bun run preview   # preview the built site locally
bun run format    # run prettier on the codebase
```

## Translations

1. Fork this repository.
2. Translate the strings in `.vitepress/locales/<language>.js`. Start from `.vitepress/locales/en.js` and keep the same keys. Helpful references:
   - https://vitepress.dev/guide/i18n
   - https://vitepress.dev/reference/site-config
3. For markdown pages (the home page, About, blog posts), create a translated copy under the matching locale folder, e.g. `cs/about/index.md` for Czech, `fr/blog/my-post.md` for French.
4. Register the locale (if new) in `.vitepress/locales/index.js` and in the `langAttr` map in `.vitepress/config.mjs`.
5. Create a pull request with the changes you've made.

**Important Notes:**

- You must translate the About page and the Home page.
- When translating `.vitepress/locales/<language>.js`, copy the English file first and replace each string over time.
- Feel free to ask for help. You can ask in the issue you created or on the [discussions page](https://www.github.com/vala-www/discussions).

## Adding new blog posts

1. Create a new markdown file under `blog/` (or under `<locale>/blog/` for a translated post), for example `blog/my-post.md`. The filename becomes the URL slug.
2. Add YAML [front matter](https://vitepress.dev/guide/frontmatter) at the top of the file. The required fields are:

   ```yaml
   ---
   layout: post
   title: My Post
   description: A short summary used in metadata and on the blog index.
   date: "YYYY-MM-DD"
   authors:
     - Your Name
   ---
   ```

3. Write the post body in markdown underneath the front matter.
4. Create a pull request with the changes you've made.

For more information, check out the ["pages" section of the contributor guide](docs/3-pages.md).

## Website Documentation

Check out the [contributor guide](docs/CONTRIBUTING.md) to learn more about how this website works.

## Credits

Various people have contributed to this website in some way and, more people will also help with the project over time.

The Contributors section in the GitHub repository doesn't tell the whole story. There's a file called `humans.txt` (available in [/public/humans.txt](/public/humans.txt)) where contributor details can be added.

Feel free to request for your details to be added or add them yourself if you have contributed to this project in any way. This is available for anyone to see if they visit: https://vala.dev/humans.txt.

You can find out more about humans.txt at: https://humanstxt.org/.

## Additional Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Bun Documentation](https://bun.sh/docs)
- [MDN Web Docs](https://developer.mozilla.org)
