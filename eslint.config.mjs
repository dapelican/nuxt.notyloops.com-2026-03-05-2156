'use strict';

// You need to run at least `npx nuxt prepare`` or `npx nuxt build` or `npm run local`
// once before ESLint can work with this config.
// After that initial preparation, ESLint works normally.
// You don't need a full build each time, because the .nuxt directory to exist.

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      }],
      '@stylistic/semi': ['error', 'always'],
      'curly': ['error', 'all'],
      'sort-imports': 'error',
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'off',
      'vue/object-curly-newline': ['error', { multiline: true, minProperties: 1 }],
      'vue/prop-name-casing': ['error', 'snake_case'],
    },
  }
);
