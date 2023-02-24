const SRC_DIRS = '**/{src,.storybook,cypress}/**';

const fullLint = process.env.NPM_CONFIG_FULL_LINT;

module.exports = {
  root: true,
  plugins: ['import'],
  extends: ['./.eslint/.eslintrc.base.js', './.eslint/.eslintrc.import.js'],
  overrides: [
    {
      files: ['**/*'],
      excludedFiles: [`${SRC_DIRS}/*`],
      parser: 'espree',
      extends: ['./.eslint/.eslintrc.node-cjs.js']
    },
    {
      files: [`${SRC_DIRS}/*.{ts,tsx}`, '**/tsconfig.d.ts'],
      extends: [
        fullLint
          ? './.eslint/.eslintrc.typescript-full.js'
          : './.eslint/.eslintrc.typescript.js'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ...(fullLint && {
          tsconfigRootDir: __dirname,
          // project: [
          //   './packages/*/tsconfig.json',
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
              //   './packages/*/tsconfig.json',
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
      excludedFiles: ['./.storybook/main.js'],
      extends: ['./.eslint/.eslintrc.babel.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        babelOptions: {
          root: __dirname,
          rootMode: 'upward-optional'
        }
      }
    },
    // {
    //   // PRETTIER (THIS SHOULD BE ALWAYS LAST)
    //   files: ['**/*'],
    //   extends: ['prettier']
    // }
  ]
};
