/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// import webpack from 'webpack';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    `${__dirname}/src/index`,
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'react-rx.js',
    library: 'ReactRx',
    publicPath: '/assets/',
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //   },
    // }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', include: `${__dirname}/src` },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'rxjs/Rx': 'Rx',
  },
};
