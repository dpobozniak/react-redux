var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json');
var banner = `
  ${pkg.name} - ${pkg.description}
  Author: ${pkg.author}
  Version: v${pkg.version}
  Url: ${pkg.homepage}
  License(s): ${pkg.license}
`;

const getPlugins = () => {
  const GLOBALS = {
    'process.env': {
      NODE_ENV: JSON.stringify(env),
    },
    __DEV__: env === 'development',
  };

  const plugins = [
    new ExtractTextPlugin('dist/main.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  ];

  switch (env) {
    case 'production':
      plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            warnings: false,
          },
        }),
        new webpack.BannerPlugin(banner)
      );
      break;
    default:
      // do nothing
  }

  return plugins;
};

const getLoaders = () => [
  {
    test: /\.js$/,
    include: path.resolve(__dirname, 'src'),
    loader: 'babel',
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!sass'),
  },
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/[name].js',
  },
  module: {
    loaders: getLoaders(),
  },
  plugins: getPlugins(),
  debug: true,
  devtool: env === 'production' ? 'source-map' : 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
};
