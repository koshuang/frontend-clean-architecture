const { resolve } = require('path');
const fs = require('fs');

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({
  tsconfigPath = './tsconfig.json',
  webpackConfigBasePath = __dirname,
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;
  const folders = fs.readdirSync('./src/modules');

  const aliases = {};

  folders.forEach((folderName) => {
    const value = resolve(
      webpackConfigBasePath,
      Object.values(paths)[0][0].replace('*', folderName)
    );

    aliases[`@${folderName}`] = value;
  });

  return aliases;
}

module.exports = resolveTsconfigPathsToAlias;
