const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  entry: './src/index.tsx',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.join(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
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
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDom',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
};