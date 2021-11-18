const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    port: 9002,
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true,
    },
  },
})
