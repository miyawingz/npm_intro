const path = require('path');

module.exports = {
    entry: [
        "core-js/stable",
        "regenerator-runtime/runtime",
        "./src/index.js"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    mode: 'none',
    devServer: {
        contentBase: './',
        publicPath: '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}