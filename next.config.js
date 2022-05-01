const isProd = process.env.NODE_ENV === 'production'

// TODO: Also utilise environment variables to figure out
// whether this is a local build, GitHub pages build or a public build
module.exports = {
  assetPrefix: isProd
    ? 'https://cdn.statically.io/gh/nahuelwexd/vala-website/gh-pages/'
    : '',
  basePath: isProd ? '/vala-www' : '',
}
