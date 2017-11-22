const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '../../src'),

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
    // the entry point of our app
  ],

  output: {
    path: resolve(__dirname, '../../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server
    contentBase: resolve(__dirname, 'dist'),
    // match the output path
    publicPath: '/',
    historyApiFallback: true,
    // Not the safest way
    disableHostCheck: true,
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'], // 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      chunksSortMode: 'dependency',
    }),
    new ExtractTextPlugin('app.scss'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
  ],
};
