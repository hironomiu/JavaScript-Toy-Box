const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: { app: './src/js/app.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minChunks: 1,
        },
        vendorModules: {
          chunks: 'initial',
          test: /src[\\/]js[\\/]modules/,
          name: 'vendor-modules',
          minSize: 0,
          minChunks: 1,
        },
        defaultVendors: {
          filename: 'js/[name].[contenthash].js',
        },
      },
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
  ],
}
