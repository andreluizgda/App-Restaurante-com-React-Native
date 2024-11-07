module.exports = {
    preset: 'react-native', // Usar preset do React Native
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest', // Usar babel-jest para transformar arquivos TS e TSX
      '^.+\\.(js|jsx)$': 'babel-jest', // Para arquivos JavaScript/JSX
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'], // Extensões de arquivos suportadas
    testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignorar node_modules e build
    setupFiles: ['<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'], 
  };
  