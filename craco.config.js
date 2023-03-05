const resolveTsconfigPathsToAlias = require('./resolve-tsconfig-path-to-webpack-alias');

module.exports = {
  webpack: {
    alias: resolveTsconfigPathsToAlias({
      tsconfigPath: './tsconfig.paths.json', // Using custom path
      webpackConfigBasePath: './', // Using custom path
    }),
  },
};
