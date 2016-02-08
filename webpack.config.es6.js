export default {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',  // initialize babel/es6 environment first
    './lib/index.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }  // run through babel with stage 0 (experimental es7) features
    ]
  }
}
