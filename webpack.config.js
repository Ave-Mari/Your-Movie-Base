const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>"Your Movie Database"</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    },
    historyApiFallback: true,
  }
};

module.exports = config;