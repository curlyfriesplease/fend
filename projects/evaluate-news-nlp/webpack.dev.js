const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: ["regenerator-runtime/runtime.js", "./src/client/index.js"],
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',

    output: {
    //    clean: true, // clean the dist folder 
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
        libraryTarget: 'var',
        library: 'Client',
    },

    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
