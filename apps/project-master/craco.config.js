const CracoLess = require('craco-less')
const CracoSwc = require('craco-swc')
const CracoModuleFederation = require('craco-module-federation')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isAnalyze = !!process.env.ANALYZE

module.exports = {
  plugins: [
    { plugin: CracoModuleFederation },
    { plugin: CracoSwc },
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
      return webpackConfig
    },
  },
}
