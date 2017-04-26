const webpack = require('webpack');
const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.base.config.js');

const devConfig = {
  devtool: 'source-map',
  cache: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new BundleTracker({filename: './webpack-stats.json'}),
    new ExtractTextPlugin('css/[name].css'),
  ],
};

const config = Object.assign({}, baseConfig.config, devConfig);

module.exports = config;