var loaderUtil = require("loader-utils")

function loader(buffer) { //给的是buffer
    console.log("文件数据大小：(字节)", buffer.byteLength);
    var { limit = 1000, filename = "[contenthash].[ext]" } = loaderUtil.getOptions(this);
    if (buffer.byteLength >= limit) {
        var content = getFilePath.call(this, buffer, filename);
    }
    else{
        var content = getBase64(buffer)
    }
    return `module.exports = \`${content}\``;
}

loader.raw = true; //该loader要处理的是原始数据

module.exports = loader;

function getBase64(buffer) {
    return "data:image/png;base64," + buffer.toString("base64");
}

function getFilePath(buffer, name) {
    var filename = loaderUtil.interpolateName(this, name, {
        content: buffer
    });
    this.emitFile(filename, buffer);
    return filename;
}