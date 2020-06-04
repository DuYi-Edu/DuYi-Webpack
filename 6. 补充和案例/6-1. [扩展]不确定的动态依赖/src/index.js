// // const module = document.getElementById("txt").value;

// // if (Math.random() < 0.5) {
// //   // const a = require("./utils/" + module); // 动态依赖
// //   // console.log(a);
// // }

// // 仅在webpack运行过程中有效
// // 参数1：目录，哪个目录中的模块需要添加到打包结果
// // 参数2：是否递归寻找子目录，如果为true，表示需要寻找子目录
// // 参数3：正则表达式，凡是匹配的才会加入到打包结果
// const context = require.context("./utils", true, /\.js$/);

// console.log(context.keys());

const util = require("./utils");
console.log(util)
