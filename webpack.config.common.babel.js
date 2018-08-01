import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = new WebpackConfig().merge({  
  context:  path.join(__dirname,'/app'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader: 'style!css!'
    }, { 
      test: /\.(eot|woff|woff2|svg|ttf|png|gif|jpg)([\?]?.*)$/, 
      loader: 'file-loader?name=[hash].[ext]',      
    },{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.html$/,
      loader: 'ng-cache?prefix=[dir]/[dir]'
    }, {
      test: /\.js$/,
      loader: 'babel?presets[]=es2015&plugins[]=angularjs-annotate',
      exclude: /node_modules/
    }]
  },
  plugins: [
   
    //new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // Specify the common bundle's name.
    //}),
   
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'moment': 'moment'
    })
  ]
})
