var loaderUtils = require("loader-utils")

module.exports = function(sourceCode){
    //sourceCode : 变量 a = 1;
    console.log("test-loader运行了")
    var options = loaderUtils.getOptions(this)
    console.log(options)
    var reg = new RegExp(options.changeVar, "g");
    return sourceCode.replace(reg, "var");
}