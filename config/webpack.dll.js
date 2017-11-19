var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [path.join(__dirname, 'vendors.js')],
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: 'dll.[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
  },
};
