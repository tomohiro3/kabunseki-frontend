const path = require('path')
// const withSass = require('@zeit/next-sass')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
// This is an old way to configure sass, I guess, because it requies node-sass which is deprecated
// module.exports = withSass({
//   cssModules: true,
//   includePaths: [path.join(__dirname, 'styles')],
//   cssLoaderOptions: {
//     importLoaders: 2,
//   },
// })