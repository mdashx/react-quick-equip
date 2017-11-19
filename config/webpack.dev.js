const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.js');

module.exports = baseConfig({
  plugins: [],
  devtool: 'eval-source-map'
});
