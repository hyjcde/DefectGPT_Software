const webpack = require("webpack");
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: process.env.NODE_ENV !== "production",

  configureWebpack: {
    // 生产环境优化
    optimization:
      process.env.NODE_ENV === "production"
        ? {
            splitChunks: {
              chunks: "all",
              cacheGroups: {
                cesium: {
                  name: "cesium",
                  test: /[\\/]node_modules[\\/]cesium[\\/]/,
                  chunks: "all",
                  priority: 20,
                },
                vendor: {
                  name: "chunk-vendors",
                  test: /[\\/]node_modules[\\/]/,
                  chunks: "all",
                  priority: 10,
                },
              },
            },
          }
        : {},

    plugins: [
      // 定义全局变量，Cesium需要
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(
          process.env.VUE_APP_CESIUM_BASE_URL || "/"
        ),
        __VUE_PROD_DEVTOOLS__: false,
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

  // 开发服务器配置
  devServer: {
    port: 8080,
    host: "localhost",
    https: false,
    open: true,
  },

  // CSS配置
  css: {
    extract: process.env.NODE_ENV === "production",
    sourceMap: process.env.NODE_ENV !== "production",
  },
};
