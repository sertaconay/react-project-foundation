module.exports = {
  // parser: '@typescript-eslint/parser', // doesn't work on webstorm :(
  parser: 'typescript-eslint-parser', // overrided in webpack config
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    useJSXTextNode: true,
    extraFileExtensions: ['.ts', '.tsx'],
  },
  extends: 'airbnb',
  plugins: ['emotion', '@typescript-eslint', 'react-hooks'],
  globals: {},
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    'max-len': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-did-update-set-state': 0,
    'react/prefer-stateless-function' :0,
    'react/no-multi-comp': 0,
    'global-require': 0,
    'no-unused-vars': ['error', { varsIgnorePattern: 'jsx' }],
  },
};
