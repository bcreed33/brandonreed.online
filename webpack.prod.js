const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = merge(common,{
    mode: "production",
    optimization: {
        minimize: false,
        chunkIds: 'named'
    },
    output:{
        filename: "main-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [new CleanWebpackPlugin()],


}); 