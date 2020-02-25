const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "production",
  entry: {
    page1: "./src/page1",
    page2: "./src/page2"
  },
  output: {
    filename: "[name].[hash:5].js"
  },
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",
      // maxSize: 60000
      // automaticNameDelimiter: ".",
      // minChunks: 1,
      // minSize: 0
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:5].css",
      chunkFilename: "common.[hash:5].css"
    }),
    new HtmlWebpackPlugin({
      template:"./public/index.html",
      chunks: ["page1"]
    })
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false
  }
};
