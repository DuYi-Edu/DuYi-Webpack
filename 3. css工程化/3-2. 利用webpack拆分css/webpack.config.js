module.exports = {
    mode: "development",
    devtool: "source-map",
    watch: true,
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.png$/, use: "file-loader"
            }
        ]
    }
}