const webpack = require('webpack'); 
const path = require('path');
//const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        //test: /\.ts(x)?$/,
        test: /\.(js|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },

  plugins: [
//    new CopyPlugin({
  //    patterns: [{ from: 'src/index.html' }],
    //}),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html', 
      
    }),

    new MiniCssExtractPlugin({
      filename:'styles/[name].[contenthash].css'
    }),
    ],

  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3006,
    //open:true,
    watchFiles: path.join(__dirname, "./**"),
    historyApiFallback: true,
    
  },
  
};

module.exports = config;