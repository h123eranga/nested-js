const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "main.js")
    },
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