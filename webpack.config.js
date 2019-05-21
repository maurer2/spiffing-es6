const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const spiffing = require('postcss-spiffing');

module.exports = {
  entry: './main-wp.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                spiffing,
              ]
            }
          }
        ]
      }
    ]
  }
};
