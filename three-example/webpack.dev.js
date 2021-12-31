const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 'auto',
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true,
    },
  },
})
