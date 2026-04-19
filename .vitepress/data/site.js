import showcaseItems from './showcase-items.json'

export const site = {
  base_url: 'https://vala.dev',
  title: 'Vala Programming Language',
  description:
    'Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject type system.',

  docs_url: 'https://docs.vala.dev',
  tutorial_url: 'https://docs.vala.dev/installation-guide.html',
  language_source_code_url: 'https://gitlab.gnome.org/GNOME/vala',
  site_source_code_url: 'https://github.com/vala-lang/vala-www',
  license_url: 'https://creativecommons.org/licenses/by-sa/4.0/',
  installation_guide: 'https://docs.vala.dev/installation-guide.html',

  features: {
    gnome_developer_tutorial:
      'https://developer.gnome.org/documentation/tutorials/beginners/getting_started.html',
    elementary_app_tutorial: 'https://docs.elementary.io/develop/'
  },

  showcase_url: 'https://github.com/vala-lang/awesome-vala',

  tooling: {
    vala_language_server: 'https://github.com/vala-lang/vala-language-server',
    vala_lint: 'https://github.com/vala-lang/vala-lint',
    valadoc: 'https://valadoc.org',
    gnome_builder: 'https://apps.gnome.org/en-GB/app/org.gnome.Builder/',
    vs_code: 'https://marketplace.visualstudio.com/items?itemName=prince781.vala',
    vim: 'https://github.com/arrufat/vala.vim',
    meson: 'https://mesonbuild.com/Vala.html',
    documentation: 'https://docs.vala.dev/tooling/index.html'
  },

  socials: {
    discourse: 'https://discourse.gnome.org/tag/vala',
    matrix: 'https://matrix.to/#/#vala:gnome.org',
    mastodon: 'https://mastodon.social/@vala_lang',
    discord: 'https://discord.gg/YFAzjSVHt7',
    telegram: 'https://t.me/vala_lang',
    twitter: 'https://www.twitter.com/vala_lang',
    reddit: 'https://www.reddit.com/r/vala'
  },

  versions: {
    stable: '0.56.17',
    lts: '0.56.17',
    devel: 'main'
  }
}

export { showcaseItems }
