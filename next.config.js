const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  includePaths: [path.join(__dirname, 'styles')],
  cssLoaderOptions: {
    importLoaders: 2,
  },
})