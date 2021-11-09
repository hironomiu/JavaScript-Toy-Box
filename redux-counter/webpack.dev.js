const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
})
