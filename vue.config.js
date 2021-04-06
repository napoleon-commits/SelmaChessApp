const plugins = [];
if(process.env.NODE_ENV === 'development'){
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(
    new BundleAnalyzerPlugin(),
  );
}
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "configureWebpack": {
    "devtool": "source-map",
    "plugins": plugins,
  }
}