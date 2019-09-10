module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'object-curly-newline': 0,
    'no-class-assign': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-shadow': 0,
    'global-require': 0,
    eqeqeq: 0,
    'no-unused-expressions': [
      1,
      { allowShortCircuit: true, allowTernary: true }
    ],
    'array-callback-return': 0,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': 1,
    'no-var': 1,
    'no-trailing-spaces': 1,
    'eol-last': 1,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'jsx-quotes': 1,
    'no-multi-spaces': 1,
    'block-spacing': 1,
    'brace-style': 1,
    'comma-dangle': 0,
    'comma-spacing': [1, { before: false, after: true }],
    'comma-style': 1,
    'key-spacing': 1,
    'no-empty': [1, { allowEmptyCatch: true }],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'arrow-spacing': 1,
    'no-const-assign': 1,
    'object-curly-spacing': [1, 'always'],
    'space-before-blocks': [1, 'always'],
    'keyword-spacing': 1,
    indent: [1, 2, { SwitchCase: 1 }],
    'max-len': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/jsx-curly-spacing': 1,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-default-props': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 0,
    'import/extensions': 1,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'react-hooks/rules-of-hooks': 'error'
  },
  globals: {
    window: true,
    document: true,
    page: true,
    browser: true,
    navigator: true,
    fetch: true
  },
  env: {
    es6: true,
    jest: true
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
}
