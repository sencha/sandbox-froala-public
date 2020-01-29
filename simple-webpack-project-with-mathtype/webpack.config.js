const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',

  // Build output lands in the ./dist folder
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      // This is used to load the Froala css from the library.
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },

  plugins: [
    // Shimming: Provide FroalaEditor as a global for wiris mathtype
    new webpack.ProvidePlugin({
      // Required for Wiris Mathtype
      FroalaEditor: 'froala-editor',
      // required by Wiris Mathtype
      $: 'jquery'
    }),
    // Clean the ./dist directory.
    new CleanWebpackPlugin(),
    // Copy the index.html file to the ./dist directory and put the bundle.js in the index.html. 
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};