# Overview

## Website goals

- Be Vala's offical presence on the internet
- Advertise Vala in an attractive way
- Encourage people to learn Vala
- Increase the amount of traffic to Vala's source code repository
- Provide an open space for the community to produce Vala content with creative freedom

## Codebase goals

- Be as accessible as possible to contributors - Make it easy as possible for new people to contribute to the website.
- Long-term maintainablitliy - Even after a long period of time, contributing to the website should still be a fast and seamless experience

## Technical Details

- The website is a static site and is generated using [Zola](https://www.getzola.org/)
  - Extremely fast (written in Rust)
  - Is a single binary with no dependencies (Very simple to install)
- Pages templates are powered by the [Tera templating engine](https://tera.netlify.app/)
- Page content is written using the [CommonMark](https://commonmark.org/) implementation of [markdown](https://daringfireball.net/projects/markdown/)
  - Markdown files are human readable
  - Simple syntax
  - Well documented
- [Sass](https://sass-lang.com/) is used for preprocessed styles:
  - Spliting styles across so that it's easier to make changes to specific places.
  - Taking advantage of preprocessing (calculations and variable substitutions during builds etc.)
  - Note: As of 2022-06-28, Zola uses libsass internally which doesn't support the latest Sass features
- The rest of the site used the standard trio of [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


