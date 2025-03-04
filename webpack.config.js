const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias['react-native/Libraries/Utilities/codegenNativeCommands'] = 'react-native-web';

  return config;
};
