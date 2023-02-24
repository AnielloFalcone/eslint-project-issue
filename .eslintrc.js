const SRC_DIRS = '**/{src}/**';

const fullLint = process.env.NPM_CONFIG_FULL_LINT;

module.exports = {
  root: true,
  plugins: ['import'],
  extends: ['eslint:recommended', 'plugin:import/warnings'],
  overrides: [
    {
      files: ['**/*'],
      excludedFiles: [`${SRC_DIRS}/*`],
      parser: 'espree',
      plugins: ['node'],
      extends: ['plugin:node/recommended-script', 'plugin:node/recommended'],
      env: {
        node: true,
        commonjs: true
      }
    },
    {
      files: [`${SRC_DIRS}/*.{ts,tsx}`, '**/tsconfig.d.ts'],
      extends: [
        fullLint
          ? './.eslintrc.typescript-full.js'
          : './.eslintrc.typescript.js'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ...(fullLint && {
          tsconfigRootDir: __dirname,
          // project: [
          //   './packages/package-*/tsconfig.json',
          //   './packages/special-package/tsconfig.json',
          //   './external-folder/tsconfig.json'
          // ]
          project: './packages/*/tsconfig.json'
        })
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            ...(fullLint && {
              // project: [
              //   './packages/package-*/tsconfig.json',
              //   './packages/special-package/tsconfig.json',
              //   './external-folder/tsconfig.json'
              // ]
              project: './packages/*/tsconfig.json'
            })
          }
        }
      }
    },
    {
      files: [`${SRC_DIRS}/*.{js,jsx}`],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        babelOptions: {
          root: __dirname,
          rootMode: 'upward-optional'
        }
      },
      plugins: ['@babel'],
      rules: {
        'new-cap': 'off',
        'no-invalid-this': 'off',
        'no-unused-expressions': 'off',
        'object-curly-spacing': 'off',
        semi: 'off',

        '@babel/new-cap': 'error',
        '@babel/no-invalid-this': 'error',
        '@babel/no-unused-expressions': 'error',
        '@babel/object-curly-spacing': 'error',
        '@babel/semi': 'error'
      },
    },
    {
      files: ['**/*'],
      extends: ['prettier']
    }
  ]
};
