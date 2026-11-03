---
layout: post
title: Vala Documentation Updates - November 2026
date: "2026-11-03"
description: Highlighting the latest updates to the Vala Documentation website as of November 2026
authors:
 - Colin Kiama
---


## Intro

Since the [September update](./vala-docs-september-2026), the [documentation website](https://docs.vala.dev) has had a lot of improvements to the main tutorial, which now covers more language features, plus a new page on format strings, a fuller Syntax Guide, and more complete code editor listings.

Here's what's new:

## What's New

### Changes

- Main Tutorial additions:
	- [Added a Format Strings page](https://github.com/vala-lang/vala-docs/pull/294)
	- [Added info about structured logging and expanded on GLib's logging functions](https://github.com/vala-lang/vala-docs/pull/291), including [clarifying the difference between GLib and stdio print functions](https://github.com/vala-lang/vala-docs/pull/290)
	- [Added info about the `params` keyword](https://github.com/vala-lang/vala-docs/pull/292)
	- [Added info about nested functions, partial classes, the `lock` keyword and the `dynamic` keyword, which were missing from the tutorial](https://github.com/vala-lang/vala-docs/pull/293)
	- [Added info about variable declarations in the `with` statement](https://github.com/vala-lang/vala-docs/pull/284)
	- [Added info about file naming conventions](https://github.com/vala-lang/vala-docs/pull/273), also covered in the guides for C# and Java programmers
	- [Added a warning about setting the environment variable needed to view debug log messages](https://github.com/vala-lang/vala-docs/pull/285)
- [Added code examples to the Syntax Guide](https://github.com/vala-lang/vala-docs/pull/295), [added more features to it and linked to it from the Syntax Overview page](https://github.com/vala-lang/vala-docs/pull/297)
- [Added Blueprint code to the GTK4 Samples](https://github.com/vala-lang/vala-docs/pull/296)
- Code Editors and IDEs page:
	- [Added an entry for Pulsar](https://github.com/vala-lang/vala-docs/pull/281), thanks to Charadon
	- [Updated the JetBrains IDE plugin link and fixed an editor name](https://github.com/vala-lang/vala-docs/pull/276), thanks to Tbusk
	- [Switched the table to HTML to make it easier to maintain](https://github.com/vala-lang/vala-docs/pull/283)

### Fixes

- [Corrected a false statement in the Bindings guide that Vala always null-terminates the arrays it creates](https://github.com/vala-lang/vala-docs/pull/288)
- [Fixed link opening behaviour in the Code Editors and IDEs page](https://github.com/vala-lang/vala-docs/pull/287)

## Closing Statements

Feel free to share your thoughts on this post in [community spaces and social media](https://vala.dev/#community).

The repository for the documentation website is located at: [https://github.com/vala-lang/vala-docs](https://github.com/vala-lang/vala-docs). Feel free to report issues and help update the documentation.

Also, at the bottom of every page of the documentation site, there's an "edit this page" link, which makes it easy to fix any typos that you find on a page you were reading.

Thanks for reading!
