module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        { 
          test: /\.css$/, 
          loader: 'style-loader!css-loader' 
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.css']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: './dist'
    }
  };