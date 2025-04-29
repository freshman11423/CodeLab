const { createWebpackConfig } = require('@expo/webpack-config');

module.exports = function (env, argv) {
  const config = createWebpackConfig(env, argv);
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
};
