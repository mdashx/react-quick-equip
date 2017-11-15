const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Quick Equip',
    }),
    new webpack.DefinePlugin({ // we can use `process.env.NODE_ENV` in our code
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // https://webpack.js.org/plugins/commons-chunk-plugin/#passing-the-minchunks-property-a-function
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]},
  
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  }
};
