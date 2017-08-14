const path = require('path')

const env = process.env.NODE_ENV

module.exports = {
  context: path.resolve(__dirname),
  entry: `./${env}/src/index.jsx`,
  output: {
    path: path.resolve(__dirname, 'build'),
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
}
