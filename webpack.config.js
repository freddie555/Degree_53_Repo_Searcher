const path = require('path');
var webpack = require('webpack');
const bundleFolder = path.join(__dirname, 'public', 'js');

const config = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: bundleFolder,
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only'
  }
};

// if (process.env.HOT) {
//   config.devtool = 'eval'; // Speed up incremental builds
//   config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
//   config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
//   config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8082');
//   config.output.publicPath = 'http://localhost:8082/';
//   config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
//   config.module.loaders[0].query.plugins.push('react-transform');
//   config.module.loaders[0].query.extra = {
//     'react-transform': [{
//       target: 'react-transform-hmr',
//       imports: ['react-native'],
//       locals: ['module']
//     }]
//   };
// }
//
// // Production config
// if (process.env.NODE_ENV === 'production') {
//   config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
//   config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// }

module.exports = config;
