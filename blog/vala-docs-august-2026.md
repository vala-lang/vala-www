---
layout: post
title: Vala Documentation Updates - August 2026
date: "2026-09-01"
description: Highlighting the latest updates to the Vala Documentation website as of August 2026
authors:
 - Colin Kiama
---


## Intro

Since the [June update](./vala-docs-june-2026), the [documentation website](https://docs.vala.dev) has gone through a big reorganisation and the Compiler Guide has grown a lot, with several new sections explaining how the Vala compiler actually works under the hood.

Here's what's new:

## What's New

### Changes

- [Reorganised the site's directory structure to use fewer directory levels and be faster to navigate](https://github.com/vala-lang/vala-docs/pull/251)
	- Global navigation links are now used to navigate between top-level sections
	- Removed redundant index pages to improve nesting
	- Merged top-level sections together, like the Compiler Guide and Contributor Guide, into a single top-level Guides section
	- Sidebar content is now dependent on the current top-level section
	- Subsections with multiple pages now use their own separate sidebars
- [Replaced the About page with a link to the About page on the main Vala programming language website](https://github.com/vala-lang/vala-docs/pull/253)
- Big expansion of the [Compiler Guide](https://docs.vala.dev/guides/compiler-guide.html):
	- [Updated the Semantic Analyzer page with up-to-date information](https://docs.vala.dev/guides/compiler-guide/03-00-the-vala-compiler/03-04-semantic-analyzer.html), covering what the Semantic Analyzer does, its key classes, how built-in symbol types are looked up, how the symbol tree is analysed, and error handling
	- [Added a Flow Analyzer page](https://docs.vala.dev/guides/compiler-guide/03-00-the-vala-compiler/03-05-flow-analyzer.html) explaining how the compiler's flow analysis works
	- [Added a C Code Generation page](https://docs.vala.dev/guides/compiler-guide/03-00-the-vala-compiler/03-06-c-code-generation.html) with initial info on the C code generation process
	- [Added a C Code Compilation and Linking page](https://docs.vala.dev/guides/compiler-guide/03-00-the-vala-compiler/03-07-c-code-compilation-and-linking.html)
	- [Updated the Project Information page](https://docs.vala.dev/guides/compiler-guide/01-00-project-information.html) with up-to-date information
	- [Added detailed info on how tests work in the compiler repo](https://docs.vala.dev/guides/compiler-guide/07-00-testing.html)
	- [Expanded on how `vapigen` works](https://docs.vala.dev/guides/compiler-guide/06-00-other-tools.html)
	- [Added info on debugging in the compiler repo using GNU Autotools](https://docs.vala.dev/guides/compiler-guide/09-00-build-system.html)
	- [Added info on configuring an isolated install prefix in the Build System page](https://docs.vala.dev/guides/compiler-guide/09-00-build-system.html#configuring-an-isolated-install-prefix)
	- [Rewrote the Vala Attributes processing info](https://docs.vala.dev/guides/compiler-guide/04-00-vala-bindings-vapi.html)
	- Added section numbering to page titles throughout the guide, to make it easier to reference specific sections
- [Added info about the `valadoc --doclet` option to the Valadoc Guide](https://docs.vala.dev/guides/valadoc-guide/02-00-command-line-tool.html)
- [The Contributor Guide now appears before the Compiler Guide in the sidebar](https://github.com/vala-lang/vala-docs/pull/252)
- [Added mailing list archive links to the External Resources section](https://github.com/vala-lang/vala-docs/pull/249)
- [Added a link to the awesome-vala repo to the home page](https://github.com/vala-lang/vala-docs/pull/250)

### Fixes

- Grammar and typo fixes:
	- [#248](https://github.com/vala-lang/vala-docs/pull/248) - Fixed "Lanugage" typo in the sidebar
	- [#270](https://github.com/vala-lang/vala-docs/pull/270) - Fixed a typo in the Contributor Guide

## Closing Statements

Feel free to share your thoughts on this post in [community spaces and social media](https://vala.dev/#community).

The repository for the documentation website is located at: [https://github.com/vala-lang/vala-docs](https://github.com/vala-lang/vala-docs). Feel free to report issues and help update the documentation.

Also, at the bottom of every page of the documentation site, there's an "edit this page" link, which makes it easy to ~~fiz~~ fix any typos that you find on a page you were reading.

Thanks for reading!
