const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'inferno-material.js',
    publicPath: '/dist/',
  },
  rules: [
    {
      test: /.jsx?/,
      loader: 'babel-loader'
    }
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  devtool: 'source-map',
  plugins: [

  ]
}
