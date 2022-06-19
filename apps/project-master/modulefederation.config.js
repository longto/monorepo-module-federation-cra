const deps = require('./package.json').dependencies

module.exports = {
  name: 'project',
  exposes: {
    './project': './src/containers/project',
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
