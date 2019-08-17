const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  entry: './src/index.js',

  resolve: {
    extensions: ['.js'],
    modules: [path.join(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()]
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  }
};