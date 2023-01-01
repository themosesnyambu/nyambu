/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = require('./webpack.config');

const env = dotenv.config().parsed;

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      }),
      new CssMinimizerPlugin(),
      ,
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      DEBUG: false
    }),
    new MiniCssExtractPlugin()
  ]
});
