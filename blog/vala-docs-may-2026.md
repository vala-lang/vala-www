---
layout: post
title: Vala Documentation Updates - May 2026
description: Highlighting the latest updates to the Vala Documentation website as of May 2026
date: "2026-05-10"
authors:
	- Colin Kiama
---


## Intro

- Greet Reader
- Explain why this blog series is being started in a 1-3 sentences.
	- Vala Documentation has moved away from old GNOME Wiki - Which took ages to get updates
	- New Vala Documentation is now in its own website and has its own repository that makes its easier than ever update the docs.
	- The majority of the old docs have been ported over, what's left is:
		- Sample Code (in-progress)
		- Genie Programming Language Documentation

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
- 
- Grammar and typo fixes:
	- [#191](https://github.com/vala-lang/vala-docs/pull/191)
 	- [#190](https://github.com/vala-lang/vala-docs/pull/190)
 	- [#140](https://github.com/vala-lang/vala-docs/pull/140)

## Closing Statements

- Ask people to share their thoughts about these blog posts in the community spaces and social media accounts (Link to the community section of the vala website).
- Remind readers again where the documentation repo is so they can help contribute to the docs
	- Can report issues
	- Can write docs themselves
- Remind readers that in the docs, there is an "edit this page" link on the bottom of every page of the documentation, which is very useful for fixing typos in the pages.
- Thank the reader for reading
