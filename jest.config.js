module.exports = {
    rootDir: '.',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    verbose: true,
}
