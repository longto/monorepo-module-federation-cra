const CracoLess = require('craco-less')
const CracoModuleFederation = require('craco-module-federation')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isAnalyze = !!process.env.ANALYZE

const settings = {
  plugins: [
    { plugin: CracoModuleFederation },
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: webpackConfig => {
      if (isAnalyze) {
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({ analyzerMode: 'server' })
        )
      }
      webpackConfig.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules\/(?![ui])/,
        use: {
          loader: 'swc-loader',
          options: {
            parseMap: true,
          },
        },
      })
      return webpackConfig
    },
  },
}

module.exports = settings
