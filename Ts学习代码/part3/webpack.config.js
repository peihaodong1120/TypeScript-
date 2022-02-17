// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入路径包
const path = require('path')
// 引入清理dist目录插件，该插件在每次编译的时候，会清理dist目录下的内容
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // 指定入口文件
  entry:'./src/index.ts',
  // 指定打包文件所在的目录
  output:{
    // 指定目录
    path:path.resolve(__dirname, 'dist'),
    // 指定文件名
    filename: 'bundle.js'
  },
  // 指定webpack要打包时要使用的模块
  module:{
    // 指定要加载的规则
    rules:[
      {
        // 指定生效的文件，以ts结尾的。
        test: /\.ts$/,
        // 要使用的loader
        use: 'ts-loader',
        // 打包忽略的文件
        exclude:/node_modules/
      }
    ]
  },
  // 配置webpack插件
  plugins:[
    new CleanWebpackPlugin(),
    // 自动生成一个html文件,并且以index.html为模板生成
    new HtmlWebpackPlugin({ 
      template:'./src/index.html'
    }),
  ],
  resolve:{
    // 用来设置引用模块,哪些文件需要引用
    extensions: ['.js', '.json', '.ts'],
  }
}