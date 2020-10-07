// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// const withSass = require('@zeit/next-sass')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    CHECK_AXE: process.env.CHECK_AXE
  }
};
// This is an old way to configure sass, I guess, because it requies node-sass which is deprecated
// module.exports = withSass({
//   cssModules: true,
//   includePaths: [path.join(__dirname, 'styles')],
//   cssLoaderOptions: {
//     importLoaders: 2,
//   },
// })
