const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const tailwindcss = require('tailwindcss');

module.exports = {
    entry: "./src/app/index.js",
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: "./src/index.html",
        minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'links.html',
      template: "./src/links.html",
      minify: false
  })
  
  ],
    module: {
      rules: [ 
      
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          sources: false,
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]'
            },
      }
      
    ]
    }
};