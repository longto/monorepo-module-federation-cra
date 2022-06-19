const deps = require('./package.json').dependencies

module.exports = {
  name: 'department',
  exposes: {
    './department': './src/containers/department',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
}
