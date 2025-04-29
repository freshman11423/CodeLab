const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),  // Bu doğru olacak
};

config.resolver = {
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),  // SVG'yi asset olarak kaldırıyoruz
  sourceExts: [...config.resolver.sourceExts, 'svg'],  // SVG dosyasını kaynak olarak ekliyoruz
};

module.exports = config;
