module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'standard',
    'eslint-config-standard-with-typescript',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '12',
    sourceType: 'module',
    project: './tsconfig.json'
  },
    plugins: ['@typescript-eslint', 'prettier'],
  rules: {
      'prettier/prettier': 'error'
  }
}
