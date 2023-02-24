# Linting results


`project: './packages/*/tsconfig.json'`

### Without type checking
`eslint:cli-engine Linting complete in: 6058ms +28ms`

### With type checking
`eslint:cli-engine Linting complete in: 7165ms +71ms`

<br/>

---
```
project: [
    './packages/package-*/tsconfig.json',
    './packages/special-package/tsconfig.json',
    './external-folder/tsconfig.json'
]
```

### Without type checking
`eslint:cli-engine Linting complete in: 8560ms +13ms`

### With type checking
`eslint:cli-engine Linting complete in: 18157ms +574ms`
