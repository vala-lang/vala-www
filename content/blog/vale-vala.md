+++
title = "Vala Vala: Why I’m giving up on Vala for now"
date = "2025-10-10"
description="An exploration of Vala’s shortcomings"

[extra]
authors = ["Reuben Thomas"]
+++

Hi! I’m Reuben, a long-time free software maintainer and author. One of my specialities is taking on mature projects from their original authors and maintaining them long-term. (This is the same introduction I wrote last year in my [previous blog post](https://vala.dev/blog/c-off-ramp/); it’s all still true!)

Having now worked with Vala on several medium-sized projects (500-5,000 lines of code) projects over the last 5 years, I’ve decided to stop using it for new projects for now, because the pain points are outweighing the benefits for me. I thought it worth addressing them in a blog post; in another timeline, this is my to-do list for improving Vala!

In my previous post, I looked at two projects I have translated from C to Vala: the minimal Emacs clone [GNU Zile](https://www.gnu.org/software/zile) and the spell-checking meta-library [Enchant](https://abiword.github.io/enchant/), which has been used by GNOME for years, most recently by [libspelling](https://gitlab.gnome.org/GNOME/libspelling), which optionally provides spell-checking in the [GNOME Text Editor](https://apps.gnome.org/TextEditor/).

Before continuing, I want to say that I had a great deal of fun with Vala, I am sad to be putting it to one side for now, and I’d certainly consider using it again if there were signs that the shortcomings I’ve identified were being systematically addressed. Further, I’m sure that for many uses it’s still a good choice, and in any case I’ll continue to maintain the projects I have released. In particular, for Enchant, I don’t regret using Vala at all, and I still have plans to develop the project further, using the facilities that Vala provides more thoroughly to make Enchant easier to understand and maintain.


## My last straw

Recently, I translated another, smaller code base (about 500 lines of code) into Vala: the command-line text search-and-replace tool [rpl](https://github.com/rrthomas/rpl), which was previously written in Python. Although I mostly use rpl on small files (typically, documents in plain text formats) where the performance of the Python version is entirely adequate, some users run it on multi-gigabyte or even larger inputs, and were finding problems. I wanted to help these users, and had problems with both speed and memory consumption that I found hard to solve in Python. (I did not try using the Python C API, or extensions such as Cython. If I were starting the project today, I might do this instead.)

This foregrounded some problems I’ve run into in the past, and in this project they were harder to avoid. I’ll go through them below, but first…


## Why I’m not fixing Vala

Rather than changing my tools (with all the costs that involves), couldn’t I just fix Vala? I have in the past made quite a few contributions in my areas of expertise (in particular POSIX and GNU bindings, and to the build system), but I don’t want to get involved in the compiler. Others have already tried to fix some of the problems I’ve run into, in some cases, some years ago. Sadly, in the last couple of years development effort on Vala itself have all but stalled, so the bar to contributing to the compiler has risen from “convince a maintainer to take my patches” to “become a maintainer”. I have even some fairly simple and isolated fixes to VAPIs still waiting to be merged.

And some of the problems that were most serious for me do indeed need fixes to the internals compiler, unfortunately, though many could be solved without such drastic intervention.

For me, there are sufficiently good alternatives, whether sticking with C or C++, using Python and its ability to work with C when needed, or learning Go, whose more mature ecosystem makes up for the greater effort it requires to interface to C. (I have prototyped a version of rpl in Go, and may switch to it one day.)

In short, in Python and Go I have to do a bit more work to talk to C, but I don’t have to fix the language or standard libraries, and C bindings I might want often already exist.


## The types of problem

The problems I ran into fall into two main categories:

+ Language problems. These could be fixed with a new profile, i.e. without breaking backwards compatibility.
+ API problems. These are problems inherited from GLib. Fixing them in GLib is probably a whole other discussion, but just as [libgee](https://gitlab.gnome.org/GNOME/libgee) provides better containers for Vala than GLib, a Vala-specific library could fix the problems with the I/O APIs of GLib.

Let’s dig into the problems.


## Array indices are `int` by default

Array sizes should be `size_t`. This has been known for a long time ([issue from 2012](https://gitlab.gnome.org/GNOME/vala/-/issues/275)). Recently, Vala 0.56 added support for [specifying the type of an array’s length](https://gitlab.gnome.org/GNOME/vala/-/commit/a24f44294041cc87dd3cadab38e3caa919f774e0). But it is not the default, and many APIs still use `int`. This makes it hard to write code that safely deals with arbitrary amounts of data.

## Binding problems

There are problems in the Vala bindings for core APIs such as GLib. Some of these can be fixed (indeed, I have contributed several fixes over the last few years). Some can be worked around by using existing alternatives, but the broken versions are still a stumbling block to developers.

+ `Stat` is broken, as you can’t tell when it failed. Workaround: use `Posix.Stat`.
+ `size_t` is not actually `size_t`, but `gsize`. This can cause C compilation failure when a Vala `size_t` is passed to a C API expecting `size_t`. Similarly for `ssize_t`.

## GLib-induced problems

GLib is a comprehensive and capable library that is beset with paper-cut problems in its APIs. Its I/O abstractions are a mess: there are multiple overlapping abstractions, each of which have certain functionality and lack others. My current application, `rpl`, unfortunately, is quite demanding in some of the areas where GLib is weakest.

Here are some examples, along with suggested solutions. The suggestions are all Vala-specific. Of course, GLib itself could be improved, and is, gradually over time. But moving further and/or faster would presumably take a great deal of effort, and might well not be a priority for its core users, which I presume to be authors of Gtk applications. However, better Vala bindings and libraries based on GLib can offer benefits to Vala developers much more easily, as well as pointing to improvements that could be adopted by GLib itself.

### GLib assumes that strings are NUL-terminated

This means that when dealing with strings that may contain NULs, one cannot use the most convenient forms of APIs (in particular, Vala’s nice way of binding GLib so that you don’t need to pass an explicit length). Some APIs do not have a version that allows an explicit length to be passed.

This could be fixed with a new string type in Vala. It could be source-compatible with the existing type, replacing the current `length` accessor with a concrete property, and using that property as the default value of `length` arguments in methods.

### `int` is used where `size_t` should be used

Or at least `ssize_t`. For example, the `Regex` APIs use `int` (`gint` in C) for character offsets, even though the length of the string is `size_t` (`gssize` in C).

This example and others cannot be directly fixed in Vala, as it’s a problem with the underlying GLib API. In the case of `Regex`, it would be fairly straightforward to duplicate the API and reimplement it with correctly-sized indexes. One could take the opportunity to expose features of PCRE2 that are currently not available, such as different character widths, and the features required for streaming operation. (For `rpl`, I wrote my own PCRE2 binding, since I needed functionality not exposed by the GLib API.)

### File APIs are a mess

Want to do file I/O? Great, `FileStream` has you covered. Oh, so does `InputStream`/`OutputStream`. And `IOChannel`! None of these is deprecated, and they all have different functionality. `InputStream`/`OutputStream` can be easily sub-classed and composed (this is the API I would like to see recommended in Vala). But `IOChannel` is the only way in Vala to read text a character at a time.

Some classes are unnecessarily non-portable. For example, `UnixInputStream` and `UnixOutputStream`, which are used to wrap file descriptors as `InputStream`s and `OutputStream`s respectively, could work on Windows, but don’t, as they are in the gio-unix package, which is not built for Windows.

For Vala use, the easiest solution would be to write a new I/O library, along the lines of libgee, which one could view as providing better container types than the GLib-based ones. Something similar to the `InputStream`/`OutputStream` model, which hews closely to the Java and Go standard library APIs, both of which lack the rough edges of GLib, would be both straightforward to write (copy the mature existing models), look familiar to Vala and GLib programmers, and be easy to extend.

One example: `rpl` needs to use some of its input twice: first, it needs to
use some of it to detect its character encoding, and then it needs to
process the entire stream. I achieve this by copying the data that is used
to detect the character encoding, and then feeding it to a custom subclass
of `InputStream`, called `PrefixInputStream`, which combines a block of
bytes with an `InputStream`, and acts like an `InputStream` that
concatenates the two. (The Go standard library already has a way to compose
streams, just saying!)

### Character conversion is badly designed

Vala gets access to “raw” iconv, which is great, but apparently not much used, since I found and fixed a bug in the VAPI binding.

However, as usual, the code is nicer if you can use `InputStream` and `OutputStream` classes. These exist: `ConverterInputStream` and `ConverterOutputStream`. But there’s a problem: `ConverterInputStream` can return partial characters. Since it’s an `InputStream`, it returns a number of bytes, not a number of characters. Fair enough! But it will happily return part of, say, a UTF-8 code-point, meaning that when reading from it, one has to re-validate the input if one expects to work on valid UTF-8. A similar problem occurs with `ConverterOutputStream`: it will write partial characters if the destination is not ready to receive the whole array.

It’s worth nothing that `IOChannel` fixes this, but only for UTF-8 input, and further its structure means that it can’t be straightforwardly sub-classed in Vala.

### Building and using large strings is inconvenient

GLib, and hence Vala, offer the `StringBuilder` class to deal with making large strings. It keeps the string in a single array, and doubles the size of the array every time it needs to be reallocated, which amortizes the time cost of allocation. However:

- There’s no way to directly append bytes from an `InputStream` into a `StringBuilder`.
- A `StringBuilder` cannot be used as an `OutputStream`.
- There’s no way to manually reallocate a `StringBuilder`’s memory, which would be helpful when you know exactly how much is needed.
- The GLib function `g_string_set_size` for safely setting the length of a StringBuilder is missing from the Vala binding. Ideally the setter for `length` should do a bounds check and write the `NUL`.

## Vitality problem

Vala has been developed slowly for the last 5 years, but at least to start with it was possible to upstream fixes and some reported bugs were fixed. Now it seems pretty much to have ground to a halt. That’s an additional disincentive to trying to fix these problems.


## Summary: what would get me to reconsider?

### A new “Vala 1.0” profile

Implement and release a new profile that fixes the fundamental type problems. It should also include improved default VAPIs: move the legacy GLib APIs into a compatibility module, foreground newer and updated APIs, and add the new I/O library I mentioned (if necessary; it might be possible to write all or at least most of it as a VAPI).

Make it the future default, reassuring users that the current problems are not forever, and encouraging users to migrate their code. The use of profiles means that old code would not be abandoned, just eventually it would have to use an explicit `--profile vala0` switch, or similar.

### Updated documentation

I only discovered the ability to specify the type of array lengths while writing this article. I have submitted a patch to the Vala tutorial, but while doing so I noticed that the old language specification has not yet been transferred to the [vala.dev](https://vala.dev) web site, and hence there’s no way to update it, marooned on the old Wiki. Vala needs an up-to-date reference specification!

### Updated packaging

Relatedly, it wasn’t until I worked on `rpl` that I even found out about [vala-extra-vapis](https://gitlab.gnome.org/GNOME/vala-extra-vapis), which is unfortunately not packaged e.g. in Debian. By that time, I had already duplicated one of its bindings.


### More developer time

This is a Catch-22, of course: if Vala had more developer time, these problems might already have been fixed. At least, with the velocity of a few years ago, existing patches would be being upstreamed and release, and there would be a feeling of progress.

I’m not that interested in working on improving Vala: I’d rather be using it to write code. I’ve spent time on Vala in the past because of its advantages over other languages. Increasingly, other languages are overtaking it for my purposes, so the incentive for me to contribute time to Vala improvements is reduced.

This is a shame, because Vala is a great language, and I’ve invested considerable time and effort learning how to use it productively. Perhaps most frustratingly, the effort required to fix the problems I’ve outlined has mostly *already been made*: it’s largely a question of “getting it across the line”. The changes I’ve suggested above are within the scope of a single stable release cycle.


## Conclusion: “fare well”, not “goodbye”!

It may be that I’ve overlooked even more recent improvements like the ability to specify array length types, and that actually all my pain points are already cured. If not, I shall be exploring other, non-Vala avenues, but I’ll be casting occasional glances “over my shoulder” to see how Vala gets on. I hope it does get the attention it deserves to fix some of these problems at last, and make it once again more attractive to programmers who have or want to work in a C-based ecosystem but yearn for a way to do that that’s more pleasant and modern than C, and less rebarbative and perplexing than C++.
