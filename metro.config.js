const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  'react-native': require.resolve('react-native-web')
};

defaultConfig.resolver.blacklistRE = [
  /.*\/react-native\/Libraries\/Utilities\/codegenNativeCommands\.js/,
];

module.exports = defaultConfig;
