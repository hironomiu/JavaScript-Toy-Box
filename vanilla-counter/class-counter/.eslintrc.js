module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prefer-const': 'error',
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  env: {
    'jest/globals': true,
  },
}
