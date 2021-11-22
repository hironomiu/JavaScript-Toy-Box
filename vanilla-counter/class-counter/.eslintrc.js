module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prefer-const': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
}
