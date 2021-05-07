const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd
    ? 'https://cdn.statically.io/gh/nahuelwexd/vala-website/gh-pages/'
    : '',
  basePath: isProd ? '/vala-website' : '',
}
