module.exports = {
    env: {
        node: true,
        es2016: true,
    },
    extends: ['plugin:playwright/jest-playwright', 'prettier', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {},
};
