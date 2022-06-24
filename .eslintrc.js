module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
      generics: 'ignore',
    }],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      offsetTernaryExpressions: true,
    }],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
  },
}
