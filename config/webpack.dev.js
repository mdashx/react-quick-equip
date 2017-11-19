const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.js');
const dllManifest = require(path.join(
  __dirname,
  'dll',
  'vendor-manifest.json'
));

module.exports = baseConfig({
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: dllManifest,
    }),
  ],
  devtool: 'eval-source-map',
});
