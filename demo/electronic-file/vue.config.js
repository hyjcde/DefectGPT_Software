const webpack = require("webpack");
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  configureWebpack: {
    plugins: [
      // 定义全局变量，Cesium需要
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/"),
      }),
    ],
    resolve: {
      alias: {
        // 确保Cesium能正确解析
        cesium: path.resolve(__dirname, "node_modules/cesium/Source"),
      },
    },
    module: {
      rules: [
        {
          // 处理Cesium的静态资源
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          include: path.resolve(__dirname, "node_modules/cesium/Source"),
        },
      ],
    },
  },
};
