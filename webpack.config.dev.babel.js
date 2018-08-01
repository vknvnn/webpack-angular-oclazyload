import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true,
    filename: '[name].entry.js',
    chunkFilename: '[name].module.js',
  },
  debug: true,
  //devtool: '#source-map',
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname,'/app/app.module.js'),
    vendor: ['angular','angular-ui-router', 'oclazyload'],
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Dev BCT',
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
});

