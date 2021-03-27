const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common,{
    mode: "production",
    output:{
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "style.[contenthash].css"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [ {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '.',
                    },
                  },
                "css-loader",
                "sass-loader",
            ],
        }]
    }
}); 