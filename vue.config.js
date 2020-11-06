module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/'
    : '/',
  assetsDir: 'assets',
  indexPath: 'index.html',
  outputDir: 'app',
  productionSourceMap: false,
  filenameHashing: true,
};