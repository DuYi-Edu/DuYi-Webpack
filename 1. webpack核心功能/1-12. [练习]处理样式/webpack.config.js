module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: ["./loaders/style-loader"]
        }]
    }
}