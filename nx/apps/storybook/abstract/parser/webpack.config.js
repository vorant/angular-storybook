var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['whatwg-fetch', __dirname + '/src/index.js'],
  devtool: 'cheap-module-eval-source-map',
  target: 'node' ,
  // output: {
  //   path: __dirname,
  //   filename: "abstract-parser.js"
  // },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      }
    ]
  }
};
