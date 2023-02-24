module.exports = {
    extends: [
        './.eslintrc.typescript.js',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    rules: {
        '@typescript-eslint/consistent-type-exports': [
            'warn',
            {fixMixedExportsWithInlineTypeSpecifier: false}
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T']
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I']
            }
        ]
    }
};
