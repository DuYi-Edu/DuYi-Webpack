//该对象提供了大量路径处理的函数

var path = require("path") //导出了一个对象

// var result = path.resolve("./", "child", "abc", "123");

var result = path.resolve(__dirname, "src");
console.log(result);