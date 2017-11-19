var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendorDLL: [path.join(__dirname, 'vendors.js')],
  },
  devtool: '#source-map',
  output: {
    path: path.join(__dirname, 'dll'),
    filename: 'dll.[name].js',
    library: 'vendorDLL',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: 'vendorDLL',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
  },
};
