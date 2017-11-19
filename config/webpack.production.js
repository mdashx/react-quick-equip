const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.js');

module.exports = baseConfig({
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    // https://webpack.js.org/plugins/commons-chunk-plugin/#passing-the-minchunks-property-a-function
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new UglifyJSPlugin({ sourceMap: false }),
  ],
});
