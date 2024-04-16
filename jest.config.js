export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styleMock.js', // Puedes utilizar un mock en su lugar si es necesario
    },
}