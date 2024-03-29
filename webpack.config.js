const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/test", "main.js")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/test", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
};