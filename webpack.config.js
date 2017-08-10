const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    basic: './basic/src/index.jsx',
    actions: './actions/src/index.jsx',
    thunk: './thunk/src/index.jsx',
    saga: './saga/src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
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
