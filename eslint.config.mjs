import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // 코드 품질
      'no-unused-vars': 'error',
      'no-console': 'warn',

      // 스타일
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],

      // TypeScript
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default eslintConfig;
