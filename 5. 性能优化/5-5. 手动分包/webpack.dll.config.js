module.exports = {
  mode: "production",
  entry: {
    jquery: "jquery",
    lodash: "lodash"
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]"
  }
};
