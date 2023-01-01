const path = require('path');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const webpack = require('webpack');
const config = require('./webpack.config');

const env = dotenv.config().parsed;
process.env.NODE_ENV = 'development';

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    })
  ]
});
