const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  // plugins: [
  //   // new HtmlWebpackPlugin({
  //   //   template: './client/index.html'
  //   // })
  //   new HtmlWebpackPlugin()
  // ],
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/topic': 'http://localhost:3000',  
      '/input': 'http://localhost:3000',        // secure: false,
      },
      // '/assets/**': {
      //   target: 'http://localhost:3000/',
      //   secure: false,
      // },
    },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  }
}