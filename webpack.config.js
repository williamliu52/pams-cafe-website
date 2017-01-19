var path = require('path');
var webpack = require('webpack');

var config = {
   entry: [
      './src/main.js',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
   ],

   output: {
      path:'./dist',
      filename: 'bundle.js',
      publicPath: '/'
   },

   devServer: {
      inline: true,
      hot: true,
      contentBase: './dist'
   },

   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
   ],

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
         }
      ]
   }
}

module.exports = config;
