const NPM_CONFIG_FULL_LINT = process.env.NPM_CONFIG_FULL_LINT;

module.exports = {
    plugins: ['import'],
    extends: ['plugin:import/warnings'],
    rules: {
        // We recommend you do not use the following rules,
        // as TypeScript provides the same checks as part of standard type checking:
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        // The following rules do not have equivalent checks in TypeScript,
        // so we recommend that you only run them at CI/push time, to lessen the local performance burden.
        'import/no-named-as-default': NPM_CONFIG_FULL_LINT ? 'error' : 'off',
        'import/no-cycle': NPM_CONFIG_FULL_LINT ? 'error' : 'off',
        'import/no-unused-modules': NPM_CONFIG_FULL_LINT ? 'error' : 'off',
        'import/no-deprecated': NPM_CONFIG_FULL_LINT ? 'error' : 'off',
        // Rules with no particular issues
        'import/no-unresolved': 'warn',
        'import/no-absolute-path': 'warn',
        'import/no-self-import': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/export': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/extensions': [
            'warn',
            'always',
            {
                ignorePackages: true,
                pattern: {
                    ts: 'never',
                    tsx: 'never'
                }
            }
        ],
        'import/no-default-export': 'warn',
        'import/group-exports': 'warn',
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin',
                    ['external', 'unknown'],
                    'internal',
                    'parent',
                    'sibling',
                    'index'
                ],
                alphabetize: {
                    order: 'asc'
                }
            }
        ],
        'import/newline-after-import': 'warn',
        'import/no-namespace': 'off',
        'import/no-duplicates': 'warn',
        'import/exports-last': 'warn',
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': 'warn',
        'import/no-webpack-loader-syntax': 'error'
    }
};
