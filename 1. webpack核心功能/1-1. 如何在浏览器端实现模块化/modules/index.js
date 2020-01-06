// import a from "./a.js"

// console.log("index")
var fs = require("fs"); //内置模块fs，文件处理var path = require("path");
var abPath = path.resolve(__dirname, "./test.txt");

var content = fs.readFileSync(abPath, {
    encoding: "utf-8"
})

console.log(content);