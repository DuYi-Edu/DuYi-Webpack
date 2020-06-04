// 导出当前目录中所有的模块

const context = require.context("./", true, /\.js$/);
for (const key of context.keys()) {
  if (key !== "./index.js") {
    let filename = key.substr(2);
    filename = filename.substr(0, filename.length - 3);
    exports[filename] = context(key);
  }
}
