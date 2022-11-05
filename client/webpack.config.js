const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const webpack = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new InjectManifest({
        swSrc: './src-sw.js'
      }),
      new HtmlWebpackPlugin({
        title: 'HTMLWebpackPlugin',
        template: './index.html',
      }),
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: 'JATE',
        icons: [{
          src: path.resolve('src/images/logo.png'),
          destination: path.join('icons', 'icons'),
          sizes: [96, 128, 256, 512]
        }]
      }),
    ],
    resolve: {
      fallback: {
        "fs": false,
      },
    },
    module: {
      rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }],
    },
  };
};

