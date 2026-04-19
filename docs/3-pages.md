# Pages

## Creating pages

### Strategy

If your page is structured like a post (the About page, blog posts, etc.) write the content in a markdown file and let VitePress render it through an existing layout. Only create a new layout or Vue component when none of the existing ones can do the job.

For pages that need rich, interactive markup (the home page is a good example), use a custom layout component under `.vitepress/theme/layouts/` and point the markdown file at it through the `layout` front matter field. The markdown file still supplies front matter (title, description, etc.) and can include any markdown body you want rendered via `<Content />` inside the layout.

### Layouts

Each markdown page picks its layout through YAML front matter:

```yaml
---
layout: home # or: page, blog, post
title: Vala Programming Language
description: …
---
```

The supported layouts live in `.vitepress/theme/layouts/`:

- `home` - The landing page with the hero, features, usages, latest blog, versions, showcase, and community sections.
- `blog` - The paginated blog index rendered from `createContentLoader`.
- `post` - An individual blog post with title, byline, date, and back link.
- `page` - The default layout used for every other page (About, 404 fallback, etc.).

### Pages

Markdown files live at the repository root (for the default locale) or under a locale folder. A file placed at `about/index.md` is served from `/about/`. A file placed at `blog/my-post.md` is served from `/blog/my-post/`. Translations mirror the same path under the locale prefix, so `cs/about/index.md` serves `/cs/about/`.

### Using Components

VitePress supports Vue components inside markdown. Components registered globally in `.vitepress/theme/index.js` (for example `<PredefinedCtaStack />` or `<CtaStack />`) can be embedded anywhere in a markdown body. Local components can also be imported from markdown-aware `<script setup>` blocks when needed.

### Metadata

Front matter `title` and `description` flow through to `<title>` and `<meta name="description">` automatically. Additional `<head>` tags (theme-color, app icons, Open Graph data) are defined in `.vitepress/config.mjs`.

#### Front Matter

In all pages make sure that you fill in the following fields:

- `title`
- `description`
- `date` (for blog posts, in `"YYYY-MM-DD"` format and quoted so YAML keeps it as a string)

These are used when displaying link embeds and when ordering the blog index / Atom feed.

## Blog

### Blog Front Matter

As well as the [fields to include when creating pages in general](#front-matter), you should also include `authors` as an array of strings when the post is written by a specific person or group:

```yaml
---
layout: post
title: Vala 0.56
description: Here's what's new in Vala release version 0.56.
date: "2022-03-18"
authors:
  - Lorenz Wildberg
---
```

Filling in `authors` is not mandatory - by default the byline shows "The Vala Team".

### Blog Post Titles

You don't need to create an `<h1>` in your markdown content. The `title` field in front matter is used for the `<h1>` rendered by the `post` layout.

## Home Page

### Updating The Showcase Items

The showcase is rendered by `.vitepress/theme/components/ShowcaseSection.vue`. The actual data used to add each item to the showcase is in `.vitepress/data/showcase-items.json`.

It's an array where each item is a JSON object with the following fields:

- `name` - Name of the item.
- `icon_path` - Path to the icon relative to the `public/` folder (for example `icons/showcase/elementary.svg`).
- `url` - Where the user goes when they click on the item.

Here's an example:

```json
[
  {
    "name": "elementary OS",
    "icon_path": "icons/showcase/elementary.svg",
    "url": "https://elementary.io/"
  },
  {
    "name": "GNOME Boxes",
    "icon_path": "icons/showcase/gnome-boxes.svg",
    "url": "https://apps.gnome.org/en-GB/app/org.gnome.Boxes/"
  }
]
```

---

## Related Resources

- https://vitepress.dev/guide/markdown
- https://vitepress.dev/guide/using-vue
- https://vitepress.dev/reference/default-theme-config
