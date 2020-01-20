//公共配置
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    entry: {
        list: "./src/list/index.js",
        detail: "./src/detail/index.js"
    },
    output: {
        filename: "scripts/[name].[chunkhash:5].js"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    stats: {
        modules: false,
        colors: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/list.html",
            filename: "list.html",
            chunks: ["list"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.html",
            filename: "detail.html",
            chunks: ["detail"]
        }),
        new CopyWebpackPlugin([
            { from: './public', to: './' }
        ])
    ]
}