const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  context: path.join(__dirname, 'src'), // entryオプションを解決するためのベースとなるディレクトリ (絶対パス)
  devtool: 'source-map',
  entry: [
    'index.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, 
        loader: 'babel'
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'], 
    modulesDirectories: ['src', 'node_modules']
  },

  devServer: {
    contentBase: './',
    inline: true,
    hot: true,
    color: true
  },
}
