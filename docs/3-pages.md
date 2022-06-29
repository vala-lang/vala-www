# Pages

## Creating pages

### Strategy

If your page is structured like a post (e.g About page, blog posts, etc), you should opt create the majority of the content in markdown under its own directory under `content/` and use an existing template. Only create a new template if an existsing one doesn't meet your needs or can't be modified to fit your needs.

For pages that making heavy use of HTML, macros and/or partials, you should make create the majority of the content in the template itself like how the home page was made (index.html).
You will still need create a markdown file for it in order to set up the front matter. You just don't need to write any markdown inside of it.

### Metadata

A macros in `head.html` called `og_data` and  `og_data_with_image` take care of this for you. It handles the creates the Open Graph tags and adds the description meta tag for you. It's recommended that you assign the parameters to the page/sections's variables in templates you make.

## Updating the items in the showcase

