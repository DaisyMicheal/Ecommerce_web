module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],

  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^firebase/(.*)$': '<rootDir>/__mocks__/firebase.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}
