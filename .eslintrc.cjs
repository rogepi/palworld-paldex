module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@eslint-react/all-legacy',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva', 'ctx..*'],
    },
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    '@typescript-eslint/no-non-null-assertion': 'off',

    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',

    'no-console': ['warn', { allow: ['warn', 'error'] }],

    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],

    '@eslint-react/naming-convention/filename': 'off',
    '@eslint-react/naming-convention/filename-extension': 'off',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      excludedFiles: [
        'src/app/**/{layout,page,loading,not-found,error,global-error,route,template,default}.tsx',
        '*.config.ts',
      ],
    },
  ],
}
