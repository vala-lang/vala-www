+++
title = "Vala: the smoothest C off-ramp"
date = "2024-04-13"
description="Using Vala to rewrite old C code"

[extra]
authors = ["Reuben Thomas"]
+++

Hi! I’m Reuben, a long-time free software maintainer and author. One of my specialities is taking on mature projects from their original authors and maintaining them long-term.

In this post, I want to talk about how I’ve rewritten entire projects in Vala, to make them easier, more productive and more fun to maintain.

Vala works well with C—that’s one of its primary features and design choices. But these abilities can be used for another purpose: to provide a “smooth off-ramp” for C, converting old code step-by-step to more-maintainable Vala, without an “all or nothing” rewrite, and with the ability to reimplement C libraries in Vala, so that existing C code can still call them.

Over the few years, I have rewritten two small–to–medium-sized C
code bases in Vala: the minimal Emacs clone [GNU Zile](https://www.gnu.org/software/zile) and the spell-checking meta-library [Enchant](https://abiword.github.io/enchant/), which has been used by GNOME for years, most recently by [libspelling](https://gitlab.gnome.org/GNOME/libspelling), which provides spell-checking in the [GNOME Text Editor](https://apps.gnome.org/TextEditor/). In the rest of this post, I’ll focus on the challenges I faced doing these rewrites, how Vala helped me, and discuss whether such a drastic move (of rewriting entire code bases) was in fact a good idea.


## Vala is good at talking to C

Vala is designed to work well with C, and a nice consequence of this is that often one doesn’t have to think about C at all, because so many useful libraries are already conveniently bound to Vala “out of the box”. It’s impressive the degree to which some of Vala’s basic abilities, such as its “built-in” container types are “just” clever binding of GLib functions plus some syntactic sugar.

But Vala’s binding abilities are very powerful: it’s not just GLib and GObject APIs that it can bind successfully; it can bind almost any C API. Later I will also show some examples that test its limits.

Further, Vala can *implement* C APIs just as well as it can *consume* them.


## Allowing C to talk back

Why would you want to implement C APIs in Vala? I have three answers for you. Firstly, maintaining a typical C code-base is a horrible experience. I just wanted to not have more memory management errors, especially to do with strings (which both Zile and Enchant are big on). It’s so easy to corrupt memory, to get lifetimes wrong, or simply get the wrong answer with C’s primitive string manipulation routines.

Secondly, implementing an existing C API in Vala gives an easier-to-maintain codebase that can be used by existing consumers, which don’t need to be C programs: they can be written in Python, Rust, JavaScript or, of course, Vala!

Thirdly, and perhaps less obviously, you can use this ability to rewrite a C program in Vala incrementally, one module (say) at a time. The result is a pure Vala application (no C APIs are being implemented), but at each step one has a complete working application, partly written in C and partly in Vala; and where C needs to call Vala, the Vala code must implement the right C APIs.


## Before we start, a sanity check

I’m talking about rewriting mature code-bases. Zile dates from the late 1990s, and I rewrote it into Vala in 2020. Enchant was written starting around 2003, and I rewrote it in Vala this week (in 2024). So:

* Isn’t that an awful lot of work?
* Won’t it introduce lots of new bugs?

In other words, is it worth it? Or am I just being quixotic?


## It’s not that hard

As I said above, I rewrote Enchant in Vala this week. Actually, that’s not quite true: I rewrote the core, about 2,000 lines of C. Enchant is, as I said above, a meta-library: that is, it doesn’t do spell-checking itself, but delegates to a number of libraries that do. Each one needs an adaptor plugin, which Enchant calls a “provider”, and these providers are written in C, C++ and even Objective C. I haven’t touched those (yet!).

But still, 2,000 lines of code in a week is not bad.

GNU Zile was about 8,000 lines of C, and that took me about a month.


## Avoiding a plague of new bugs

### Vala is well matched to C

Any time you touch code you can introduce bugs, of course: the slightest adjustment can be risky. How much more so rewriting in another language?

The good news here is that because Vala is so close to C, it is relatively easy to translate code without introducing new bugs. The syntax is sufficiently similar that code can be easily translated with some search and replace (e.g. `NULL` in C becomes `null` in Vala) plus light editing (e.g. adding missing comparisons in conditions to make them boolean, so that `if (ptr)` in C becomes `if (ptr != null)` in Vala). C APIs can be used directly via Vala bindings, and C data structures can be replicated precisely. Vala’s static typing also helps.

Here’s an example of a struct in C from Zile:

```c
struct Region
{
#define FIELD(ty, name) ty name;
#include "region.h"
#undef FIELD
};

#define FIELD(ty, field)                  \
  GETTER (Region, region, ty, field)      \
  SETTER (Region, region, ty, field)

#include "region.h"
#undef FIELD
```

The file `region.h` contained:

```c
FIELD(size_t, start)
FIELD(size_t, end)
```

Here’s the translation into Vala:

```vala
public class Region {
    public size_t start { get; set; }
    public size_t end { get; set; }
    // …methods go here
}
```

Compare and contrast: around 2009, I translated Zile into [Lua](https://www.lua.org). I completed the translation, but I did not release it, as I found that Lua’s lack of static type-checking made it too easy to introduce new bugs. While I was translating it I was forever finding off-by-one errors caused by Lua counting arrays and string positions from 1, while C is 0-based (as is Vala, of course). Don’t get me wrong: Lua is a great language; indeed, I have successfully written other, smaller programs from C into Lua, though I wouldn’t now recommend that; its strengths lie elsewhere.

With Vala, I recommend making the initial translation as “light” as possible: don’t use lots of Vala’s features to rewrite code. Translate `char *` pointers to string offsets (that is, an integer string index). Make sure the translated code works first, then start simplifying. Even the “light” translation will contain simplifications, anyway: no more `malloc` or `free`, for example.

### You already have a test suite, of course

The other way you avoid a plague of new bugs is with a good test suite. Sorry! There’s no way around that. If you want to alter, let alone completely rewrite code, you need to have tests.

Fortunately, I had already added a fairly extensive test suite to Zile years ago, when I was trying to make sure that it really behaved exactly like Emacs. The situation with Enchant was even better: it has an exhaustive (and sometimes exhausting) test suite that checks every aspect of its API, added a few years after Enchant was written, by a commission from [SIL International](https://www.sil.org). (A big shout-out to those who commission work on libre software, especially this sort of important under-the-hood work. These tests have saved me from introducing bugs time and time again.)

Again, you have to be disciplined: no turning off the tests, or changing them as you go. Complete the translation without changing them, as far as possible.

### Your existing build tool is probably supported

Many Vala projects these days are using the [Meson](https://mesonbuild.com) build system, which is very popular in the GNOME space. But Vala is also supported well by older tools, such as [CMake](https://cmake.org) and [GNU Autotools](https://en.wikipedia.org/wiki/GNU_Autotools). Both of the projects I translated were using GNU Autotools, and I stuck with it, for two main reasons:

1. I use the excellent [gnulib](https://www.gnu.org/software/gnulib/) portability library to ensure that my POSIX-compliant code runs on most systems without problems. Unfortunately, gnulib is tied to GNU Autotools. But then, few build systems work on as many platforms as the Autotools in any case.
2. [Automake](https://www.gnu.org/software/automake/) not only has Vala support, but allows you to ship the generated C sources, so that users can build your code without a Vala compiler. This means that your translated project has exactly the same build dependencies as it had before, which can help with users and packagers who haven’t heard of Vala and don’t want to learn. With Zile, previously a pure-POSIX project, I added GLib as a build-time dependency, but of course that’s so widely used that it’s unlikely to be a problem. Enchant already used GLib.


## The Vala experience

I will now describe the process of translating the two code-bases. Although they were a bit different (Zile an application, Enchant a library), and I made the translations a few years apart, I was pleasantly surprised to find the second time that the process was much the same as the first.

### Add Vala to the build system

With Autotools, this is a matter of adding a couple of `configure.ac` lines to detect the Vala compiler and check for GNU Make (which is required to build from Vala sources), and then adding a test Vala source file to a `Makefile.am`.

### Translating the code

I typically translate one file at a time. The code will of course usually call functions from other parts of the program: I add a private VAPI file with suitable bindings. You can usefully pre-populate the VAPI file with the commented-out contents of relevant C header files, then just uncomment the APIs you need in Vala, and edit them suitably. The excellent [Manual bindings](https://wiki.gnome.org/Projects/Vala/ManualBindings) guide from the Wiki is my constant companion.

To translate a file, I copy `foo.c` to `foo_vala.vala`. (The `_vala` bit ensures that the Vala-generated C won’t overwrite the original file, which I will keep for reference.) I translate the code, possibly in multiple steps, commenting out the bits I have translated in `foo.c`.

Compile, test, fix, rinse, repeat.

I find that I get a nice rhythm with my translation, of doing the obvious basic syntactic stuff, as mentioned above, then finding the equivalent Vala APIs where necessary, then tackling any hard bits, such as binding third-party APIs that Vala does not yet know about.

For Zile I leaned heavily on the POSIX VAPI, and added a new GNU VAPI for some GNU-specific APIs, which I have also used and extended while translating Enchant. Enchant was easier on the whole, because it was already GLib-based, so I just had to search [valadoc.org](https://valadoc.org) for the Vala versions of the GLib APIs.

For Zile, I found [libgee](https://wiki.gnome.org/Projects/Libgee) invaluable, with its superior collections that are both richer than GLib’s and allows extra use cases, such as collections of unboxed simple types (e.g. `ArrayList<int>`). For Enchant, it so happened I didn’t need this extra functionality; Enchant’s use of collections is mostly limited to singly-linked lists of objects and hash tables with string keys.

### Stumbling blocks…

#### Documentation and API coverage

Vala is a small ecosystem, even after all these years. Hence, I found bugs, mostly in the documentation. I took the time to submit [fixes](https://github.com/vala-lang/valadoc-org/pull/414), and this past week reaped the rewards! Some of these fixes went as far as GLib itself; many were to the Vala wiki. As I noted above, I also made additions to the VAPIs, in particular adding a complete binding for the POSIX, GNU and BSD regex APIs (Zile only needed the GNU API, but since the GNU regex module implements all three, I thought I might as well!), as well as `getopt_long()`. I added `freopen` to the POSIX VAPI (as `FILE.reopen()`), upgraded the curses VAPI to improve its Terminfo coverage and add key-codes for function keys, and added return codes to GLib’s `FileStream.putc` and `puts`.

I was also able to offer my old-school expertise to the Vala project itself: I converted the test suite to use Automake’s relatively recent ability to run tests in parallel.

#### Falling between two stools

Vala itself mostly insulates you from the memory-management woes that bedevil C, but mid-translation there is still C code, so you have to be careful if you want to keep a working program. It’s always tempting to just plough on with the translation and hope that crashes will disappear, but I try not to give in, as that can bury bugs deeper and make them harder to find later. So, expect to spend some time studying `valac`-generated C, and revising your knowledge of `owned` and other esoteric Vala features.

For me, this is particularly relevant to Enchant, as a C library whose API and ABI I want to maintain. I am happy to report that I have been mostly successful, and at the time of writing I am tracking down some problems with object lifetime management, but otherwise the Vala implementation seems to perfectly replicate the C.

Another area of awkwardness is strings: as I hinted above, C often uses pointers to refer to string positions, whereas in Vala it’s usual to use integer offsets. This code is fairly easy to convert once you get the hang of it. Since C *can* use offsets instead of pointers, you can always rewrite the code in two stages, first changing the C to use offsets, and then translating it into Vala.

Here’s an example of the translation from pointers in C to offsets in Vala. The C version refers to positions in strings with pointers:

```c
char * enchant_iso_639_from_tag (const char * const dict_tag) {
    char * new_tag = strdup (dict_tag);
    if (new_tag == NULL)
        return NULL;
    char * needle = strchr (new_tag, '_');

    if (needle != NULL)
        *needle = '\0';

    return new_tag;
}
```

In Vala, we use string offsets:

```vala
static string iso_639_from_tag(string dict_tag) {
    return dict_tag.substring(0, dict_tag.index_of_char('_'));
}
```

The comparison here is perhaps obscured by the simplification obtained in Vala from automatic memory management, which is nothing to do with string handling *per se*.

#### Binding challenges

I had a number of particular challenges. Some of them may be relevant to other developers, but I detail them here mostly to illustrate that Vala can bind just about anything if you try!

##### `config.h`

Like any Autoconf-based build system, mine produce a `config.h` header of various `#define`d symbols, some of which my C code uses. These I simply replicate in a `Config` module, following a pattern by Jürg Billeter, one of the original authors of Vala.

##### `relocate`

This is a GNU API that returns a string that may or may not be `malloc`ed. You can tell which easily enough: if the return value is different from the argument, then it is a newly-allocated string. The problem is getting Vala to do the right thing. Even in C, I wrote my own wrapper function that would always return a `malloc`ed string.

Here’s the Vala VAPI definition:

```vala
[CCode (cheader_filename = "relocatable.h", cname = "relocate")]
private unowned string _gnulib_relocate(string path);
```

I use the name `_gnulib_relocate` because I am about to add a Vala wrapper which uses the original name. We tell Vala that the return value is `unowned`, to prevent Vala thinking that it must `free` it.

Here’s the wrapper, which I also put in the VAPI:

```vala
[CCode (cname = "_vala_relocate")]
public string relocate(string path) {
    unowned string newpath = _gnulib_relocate(path);
    // If relocate malloced, then return the value, defeating Vala's attempt
    // to (re-)strdup it.
    GLib.return_val_if_fail(newpath.data == path.data, newpath);
    // Otherwise, allow Vala to strdup the non-malloced return value.
    return newpath;
}
```

This is tricky. First, it calls the “real” `relocate` (but using its Vala name), and stores the result in an `unowned` string. So far, `valac` will not allocate any memory.

We then test the value returned, and if it is unequal to the original argument, return it. Because we use the `return_if_fail` macro, `valac` will not insert memory allocation code at this point, but that’s OK, because `relocate` has already `malloc`ed in this case, so the return value is an allocated `string` as indicated.

Otherwise, we simply `return` the un-`malloc`ed value. In the generated C, `valac` will insert a `g_strdup` at this point, so again the return value is an allocated string.

Phew!

##### `strfreev`

Rather surprisingly, while `g_strfreev` takes `char **` (because it frees a list of strings), `strfreev` takes `string **`. Why? Well, Vala uses one level of pointer indirection to indicate that a value is not managed by Vala. So we have the following set of equivalences:

* `string` = `char *` (generates `char *`; as we expect, a string is a pointer to `char`)
* `string *` = `char *` (generates `char *`; this is just a `string` that Vala does not manage)
* `string **` = `char **` (generates `char **`; now we have a list of `string`)

This was a problem for me because I wanted to use `strfreev` to free a “real” `char **` passed in from C. But `valac` gives a type error. I got sufficiently confused that I submitted a [merge request](https://gitlab.gnome.org/GNOME/vala/-/merge_requests/383), and Rico had to de-confuse me. In the end, all I needed was a cast:

```vala
strfreev((string **)c_string_list);
```

The cast placates `valac`, and the generated C ends up calling `g_strfreev`, which expected a `char **` all along.

##### `[s]size_t` is not really `[s]size_t`

When compiling my Vala version of Enchant on Windows, I accidentally tried compiling it in a flavour of Windows I don’t normally test, namely Mingw MSYS (I normally build for Mingw64-x86_64 and Mingw64-i686). To my surprise, I got a compilation error: GCC complained that one 8-byte signed integer type (`long int`) was incompatible with another 8-byte signed integer type (`long long int`). Yes, these are both 64-bit types on this system, and yes, they are nonetheless incompatible.

But why did I have this problem in the first place? I was using Vala’s `ssize_t`, and Vala maps this to GLib’s `gsize`. I don’t know why, but it’s a problem, because in some cases, like mine, these two types end up with different fundamental types in the C compiler, and an error results. I filed an [issue](https://gitlab.gnome.org/GNOME/vala/-/issues/1539) and found a workaround, which was to copy the definition of `size_t` and `ssize_t` from `posix.vapi`, which are normally only used when `valac` is used with `--profile posix` and the GLib definitions are not used. The `posix.vapi` definitions correctly map `size_t` in Vala to `size_t` in C.


### …and helping hands

I mentioned above that Vala is a small ecosystem. An up-side to this is that it’s friendly and usually quick to get things done. The fixes I offered were mostly triaged and applied by the indefatigable Rico Tzschichholz, who was often able to suggest more elegant solutions, mostly for my VAPI bindings. I ended up using a pre-release of `valac` for Zile, but I could release the code, since you didn’t need `valac` to build it, and within a few months, Vala 0.52 was released with all the fixes I needed.

With Enchant I have had help from Rico again, and also from Lorenz Wildberg; many thanks to both of them, and to everyone else in the community to has both helped me with my projects, and welcomed my own contributions, which, I hope, improve things for everyone else.


## Was it worth it?

With GNU Zile I can say: probably, yes. I found one “brown-paper bag” bug in the initial stable release, but that’s it: I have made only two non-alpha releases of the Vala version. On the other hand, the C version was already very stable, and I suspect it’s not widely used any more (I myself have encouraged users to migrate to Emacs for some years!). But then, it was a low-risk project to try out this new technique. And a few years on, the code still builds with no problems: unlike some language ecosystems, Vala seems very stable, and code does not rot fast.

For Enchant, it’s too early to say. It’s a much more widely-used package, and though it is quite mature, I have steadily improved and developed it over the past few years, and intend to continue in future. I hope that the switch to Vala will not annoy packagers (it shouldn’t, as they shouldn’t have to change their recipes at all if they don’t want to), and that developers should not notice (because the library remains API and ABI compatible), nor users (because the functionality should be identical, and the performance much the same). Certainly, I expect it will make my future work more productive and fun!


## Is this a good idea?

My projects are old-school: highly portable, low-level C. This is not an area that Vala is particularly aimed at, although it does pretty well here. For projects that are firmly in the GLib world, and especially when they use related libraries such as Gtk, rewriting C in Vala seems an excellent option to me. 

While I completely rewrote my projects before releasing them, I think I’ve shown there’s no need to do that. When I rewrote Zile in Lua, the intermediate steps had horrible performance, because the Lua/C interface I used was very inefficient (Lua has an efficient-but-complex C API; I chose to use some simple-but-slow home-grown macros instead). When I rewrote Zile in Vala, the performance was much the same at every stage of the process, and I could easily have translated just half of the code and released the project. Many projects, particularly larger ones, might benefit from such an approach.

After completing the translation, the code was already significantly shorter and more readable than in C. This in turn unlocked further simplifications: able to “see the wood for the trees” it was much easier to refactor and further simplify the code. With Zile, I eventually reduced 8,000 lines of C to 6,000 of Vala, a 25% reduction; in Enchant the percentage saving was more like 35%, largely because of a reduction in GLib boilerplate, such as argument validation, which Vala mostly automates.

One final thought: I hope that Vala will continue to flourish for many years, but if it doesn’t, then all is not lost: in the worst case, I or my successor could salvage the generated C code, which is ugly but far from impossible to read (and C, I think we can confidently say, will be around for many decades yet); and Vala is also a relatively “neutral” language that would be easy to translate again, into Rust, say; indeed, it would be easier to do that starting from Vala than from C, largely because the Vala code is easier to read and understand.

---

You are always invited to join our matrix chat [#vala:gnome.org](https://matrix.to/#/#_gimpnet_#vala:gnome.org) and ask questions about Vala or how to contribute. Until then, have a nice time and build great apps with Vala!

<!--  LocalWords:  Vala’s GLib GObject Lua’s VAPI GLib’s Enchant’s codegen
<!--  LocalWords:  Automake’s Terminfo Gtk Mingw MSYS VAPIs regex libgee ed
<!--  LocalWords:  ArrayList int getopt freopen FileStream putc valac Jürg
<!--  LocalWords:  config Billeter malloc vala CCode cheader cname newpath
<!--  LocalWords:  malloced Vala's strdup val un strfreev Mingw64 i686 vapi
<!--  LocalWords:  ssize gsize posix gimpnet se
-->
