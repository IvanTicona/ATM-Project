// babel.config.mjs
export default {
  presets: [
    // Transpila el código moderno de JavaScript
    ['@babel/preset-env', { targets: { node: 'current' } }],
    // Transpila JSX y otras sintaxis propias de React
    '@babel/preset-react'
  ]
};
