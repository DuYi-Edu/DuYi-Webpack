const webpack = require("webpack")

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            PI: `Math.PI`, // const PI = Math.PI
            VERSION: `"1.0.0"`, // VERSION = "1.0.0"
            DOMAIN: JSON.stringify("duyi.com")  // DOMAIN = "duyi.com"
        }),
        new webpack.BannerPlugin({
            banner: `
            hash:[hash]
            chunkhash:[chunkhash]
            name:[name]
            author:yuanjin
            corporation:duyi
            `
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
        })
    ]
}