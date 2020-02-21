module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // {
          //   loader: "cache-loader",
          //   options:{
          //     cacheDirectory: "./cache"
          //   }
          // },
          "thread-loader",
          "babel-loader"
        ]
      }
    ]
  }
};
