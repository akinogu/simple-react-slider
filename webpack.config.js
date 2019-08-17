const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'main.js'
  },
  entry: './demo/app.js',
  resolve: {
    extensions: ['.js'],
    modules: [path.join(__dirname, 'node_modules')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    })
  ],
  devServer: {
    port: 3000,
    contentBase: './demo',
    historyApiFallback: true,
    hot: false
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
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  }
};