import antfu from '@antfu/eslint-config';

import oxlint from 'eslint-plugin-oxlint';
import storybook from 'eslint-plugin-storybook';

export default antfu({
  lessOpinionated: true,
  typescript: true,
  unocss: true,
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    },
  },
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'style/semi': ['error', 'always'],
  },
}, storybook.configs['flat/recommended'], ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'));
