const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '../../src'),

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
    // the entry point of our app
  ],

  output: {
    path: resolve(__dirname, '../../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  devtool: 'inline-source-map',

  devServer: {hot: true,
    // enable HMR on the server
    contentBase: resolve(__dirname, 'dist'),
    // match the output path
    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [ 'babel-loader', 'eslint-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader',  ]
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
