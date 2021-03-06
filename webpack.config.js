const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    publicPath: "/react-shuffle-sort/",
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, './dist'),
    watchContentBase: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({ template: './public/index.html' }), new MiniCssExtractPlugin()],
}