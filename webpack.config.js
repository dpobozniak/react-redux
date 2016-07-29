var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      }
    ]
  }
};
