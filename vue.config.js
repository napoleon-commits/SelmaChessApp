const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "configureWebpack": {
    "devtool": "source-map",
    "plugins": [
      new BundleAnalyzerPlugin(),
    ],
  }
}