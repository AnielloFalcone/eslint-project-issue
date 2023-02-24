module.exports = function (api) {
    api.cache.forever();

    return {
        sourceMaps: true,
        sourceType: 'module',
        presets: [
          [
            '@babel/preset-env',
            {
              spec: true,
              modules: false,
            }
          ]
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-optional-chaining'
        ],
        overrides: [
            {
                test: ['**/*.jsx', '**/*.tsx'],
                presets: [
                    [
                        '@babel/preset-react',
                        {
                            development: false,
                            runtime: 'automatic'
                        }
                    ]
                ],
                plugins: ['babel-plugin-jsx-remove-data-test-id']
            },
            {
                test: ['**/*.ts', '**/*.tsx'],
                presets: ['@babel/preset-typescript']
            },
            {
                test: ['**/.yarn/**/*', '**/node_modules/**/*'],
                sourceType: 'unambiguous'
            },

        ]
    };
};
