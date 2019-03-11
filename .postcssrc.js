// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-plugin-px2rem": {
      rootValue: 37.5 * (750 / 375), //换算基数， 默认100
      exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
      propWhiteList: [], //可以从px更改为rem的属性
      propBlackList: [], //不可以从px更改为rem的属性
      selectorBlackList: [], //要忽略并保留为px的选择器
      minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
    }
  }
}
