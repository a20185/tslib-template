module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: './tsconfig.json'
    },
    rules: {
      '@nibfe/todo-ddl/diy': 'off', //process.env.NODE_ENV === 'production' ? 'off' : 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/ban-types': 0,
      'no-irregular-whitespace': 'warn',
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
      complexity: ['error', { max: 10 }],
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],
      'max-depth': ['error', 4],
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/unbound-method': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // note you must disable the base rule as it can report incorrect errors
      'lines-between-class-members': 'off',
      '@typescript-eslint/lines-between-class-members': 'warn',
      '@typescript-eslint/strict-boolean-expressions': ['off'],
    },
    overrides: [
      {
        files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
        env: {
          jest: true,
        },
      },
    ],
  }
  