

# Ant Design of Vue 按需导入使用

创建vue2.0项目

```
vue create ant-vue-demo
cd ant-vue-demo
```

安装Ant Design of Vue 

```
// npm 安装
npm install ant-design-vue --save
// yarn 安装
yarn add ant-design-vue
```

安裝babel-plugin-import

```
npm i babel-plugin-import 
```

 然后在babel.config.js添加

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}
```

最后直接在文件中引入就ok

```
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { DatePicker } from 'ant-design-vue';
```

