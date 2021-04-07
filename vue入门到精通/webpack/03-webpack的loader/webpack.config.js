const path = require('path')

module.exports = {
  // 打包源文件路径
  entry:"./src//main.js",
  // 输出路径
  output: {
    // 动态获取路径
    path: path.resolve(__dirname,'dist'),
    // 文件名
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时,是从右往左编译
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时,是从右往左编译
        use: ["style-loader", "css-loader","less-loader"],
      },
    ],
  },
}