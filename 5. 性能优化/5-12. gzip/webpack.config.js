const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CmpressionWebpackPlugin = require("compression-webpack-plugin")
module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CmpressionWebpackPlugin({
      test: /\.js/,
      minRatio: 0.5
    })
  ]
};
