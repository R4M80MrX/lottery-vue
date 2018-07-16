# lottery-vue

> A Vue.js project of lottery

## 项目环境准备

### 1.项目目录结构

- build：构建相关目录
- config：开发相关配置
- src：要编写的代码
  - pages : 所有的页面组件放在这里
    - common: 页面所有的公用组件
  - utils : 放置工具类
  - store : 放置vuex数据仓库
- static：不需要webpack处理的静态文件，比如压缩后的资源,可以直接访问

### 2.安装JQuery和Bootstrap

> 安装JQuery

由于bootstrap依赖Jquery,所以需要先安装jquery,这里版本使用1.11.3

```shell
npm install jquery@1.11.3 --save
```

找到build/webpack.base.conf.js文件,在文件头部添加引用

```shell
const webpack = require('webpack');
```

在文件所有配置对象的末尾增加如下配置

```shell
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
    })
]
```

> 安装Bootstrap

```shell
 npm install bootstrap@3.3.7 --save
```

引入bootstrap,在**src/main.js**文件的顶部加入bootstrap的主要文件引用

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```

### 3.vue-devtool准备

vue-devtool是Vue官方提供的开发调试工具，能帮助我们查看Vue组件的数据，状态等属性。

链接地址:https://github.com/vuejs/vue-devtools



