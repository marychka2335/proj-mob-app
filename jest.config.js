module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    'react-native/Libraries/Utilities/codegenNativeCommands': '<rootDir>/__mocks__/react-native/Libraries/Utilities/codegenNativeCommands.js',
  },
};
