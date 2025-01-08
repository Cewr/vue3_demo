export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 10,
      propList: ['*'],
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      unitPrecision: 5,
      mediaQuery: false,
      exclude: /node_modules/i,
    },
    autoprefixer: {},
  },
}
