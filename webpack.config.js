const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'stage-3', 'latest'],
      },
    }],
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src'),
    ],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: 'build',
  },
};
