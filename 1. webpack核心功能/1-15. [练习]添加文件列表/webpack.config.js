var FileListPlugin = require("./plugins/FileListPlugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        new FileListPlugin("文件列表.md")
    ]
}