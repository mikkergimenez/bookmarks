module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      }, {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/stylus/'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  node: {
     fs: "empty",
     net: "empty"
  }
};
