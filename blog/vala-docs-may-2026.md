---
layout: post
title: Vala Documentation Updates - May 2026
date: “2026-05-10”
description: Highlighting the latest updates to the Vala Documentation website as of May 2026
authors:
 - Colin Kiama
---


## Intro

In case you missed it, a new Vala Documentation website ([https://docs.vala.dev](https://docs.vala.dev)) was created to replace the old documentation in the deprecated GNOME Wiki website.

Over time, updates have been made to the [documentation website repository](https://github.com/vala-lang/vala-docs). The majority of the old docs have been ported over. What’s left is:
- Sample code (In Progress)
- Genie Programming Language Documentation

However, people may not be aware  of the changes the updates to the documentation website. These blog posts should help with that.

Now, here’s what’s new (April - May 2026):

## What's New

### Changes

- [Overhaul of Main Tutorial](https://github.com/vala-lang/vala-docs/pull/50)
	- Simply code examples in First Program chapter
	- Explain the multiple ways we can write the main method
	- Add structs methods example to language elements chapter
	- Add Enums section to language elements chapter which expands on the features enums have
	- Add Flags section to language elements chapter, showing how to use enums like flags
	- Add Input / Output section to tutorial, explaining how to interact input, ouptut and file streams. Also contains info on how to use FileUtils convenience features for easily reading and writing contents of a file.
	- Add section on the Async main function feature in Main Loop chapter
	- Add async threads example to Asynchronous Methods chapter
	- Add `with` statement feature chapter
- [Add libsoup-3.0 (HTTP Client/Server Library) Samples](https://github.com/vala-lang/vala-docs/pull/194)
- [Add Testing Samples page (#152)](https://github.com/vala-lang/vala-docs/pull/152)
- [Add "Basics: Collections, Files, I/O, Networking, IPC" Sample code](https://github.com/vala-lang/vala-docs/pull/149)
- [Port Vala for Java Programmers Developer Guide](https://github.com/vala-lang/vala-docs/pull/6)
- [Add Memory Management Guide](https://github.com/vala-lang/vala-docs/pull/144)
- [Add Language Features and Introductory Samples pages to Sample Code](https://github.com/vala-lang/vala-docs/pull/143)
- [Introduce Sample Code Section](https://github.com/vala-lang/vala-docs/pull/141)

### Fixes

- [BNF Code blocks now have colouring](https://github.com/vala-lang/vala-docs/pull/145)
- Grammar and typo fixes:
	- [#191](https://github.com/vala-lang/vala-docs/pull/191)
 	- [#190](https://github.com/vala-lang/vala-docs/pull/190)
 	- [#140](https://github.com/vala-lang/vala-docs/pull/140)

## Closing Statements

Feel free to share your thoughts on this post in the [community spaces and social media](https://vala.dev/#community).

The repository for the documentation website is located at: [https://github.com/vala-lang/vala-docs](https://github.com/vala-lang/vala-docs). Feel free to report issues and help update the documentation.

Also, at the bottom of every page of the documentation site, there’s an “edit this page” link, which makes it easy to fix fix any issues you find on a page you were reading.

Thanks for reading!