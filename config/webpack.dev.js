const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const baseConfig = require('./webpack.base.js');
const dllManifest = require(path.join(
  __dirname,
  'dll',
  'vendorDLL-manifest.json'
));

module.exports = baseConfig({
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: dllManifest,
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dll/dll.vendorDLL.js'),
    }),
  ],
  devtool: 'eval-source-map',
});
