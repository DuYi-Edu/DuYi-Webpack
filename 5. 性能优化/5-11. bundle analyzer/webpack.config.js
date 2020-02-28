const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [new CleanWebpackPlugin(), new WebpackBundleAnalyzer()]
};
