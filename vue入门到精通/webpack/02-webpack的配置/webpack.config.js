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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}