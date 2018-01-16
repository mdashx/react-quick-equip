const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPlugins = [
  new HtmlWebpackPlugin({
    title: 'React Quick Equip',
  }),
  new webpack.DefinePlugin({
    // we can use `process.env.NODE_ENV` in our code
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

module.exports = options => ({
  entry: {
    index: path.resolve(__dirname, '../src/app.js'),
  },
  devtool: options.devtool,
  plugins: options.plugins.concat(commonPlugins),
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        include: [path.resolve(__dirname, '../src/styles/global.css')],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, '../src/styles/global.css')],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, './'),
      path.resolve(__dirname, './dll'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
});
