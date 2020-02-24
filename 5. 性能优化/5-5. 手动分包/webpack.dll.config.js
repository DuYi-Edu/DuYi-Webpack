const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery"],
    lodash: ["lodash"]
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]" // 每个bundle暴露的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dll", "[name].manifest.json"),
      name: "[name]"
    })
  ]
};
