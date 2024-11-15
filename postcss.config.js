export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 10, // 换算基数，设计稿宽度375/10
      propList: ['*'], // 需要转换的属性，'*' 表示全部
      selectorBlackList: ['.ignore', '.hairlines'], // 忽略某些选择器，不进行rem转换
      minPixelValue: 1, // 设置要替换的最小像素值
      unitPrecision: 5, // 允许REM单位增长到的十进制数字
      mediaQuery: false, // 允许在媒体查询中转换px
      exclude: /node_modules/i, // 排除文件或目录，匹配到的文件将不会进行转换
    },
    autoprefixer: {}, // 可以同时添加autoprefixer等其他PostCSS插件
  },
}
