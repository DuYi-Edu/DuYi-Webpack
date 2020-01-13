module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(png)|(jpg)|(gif)$/, use: [{
                    loader: "./loaders/img-loader.js",
                    options: {
                        limit: 3000, //3000字节以上使用图片，3000字节以内使用base64
                        filename: "img-[contenthash:5].[ext]"
                    }
                }]
            }
        ]
    }
}