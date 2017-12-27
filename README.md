# vux-learning
作为一个前端新手，趁着休假，做一个会员系统移动端页面练练手
这个项目，同时作为vue js学习的学习笔记使用

## 使用DEMO， 查看效果

## 学习笔记

### 新建项目
#### npm 命令行
安装vue-cli
``` shell
npm install -g vue-cli
```

使用Vue-cli创建webpack项目
``` shell
vue init webpack vux-learning
npm install
```

#### 定义相对路径别名，可以用`@`指代src目录
``` javascript
module.exports = {
  context: path.resolve(__dirname, '../'),
...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
...
}

```

#### 引入Vux (Vux需要Vuex)
``` shell
npm install vuex
npm install vuex-i18n
npm install vux
npm install vux-loader --save-dev
npm install less less-loader --save-dev
npm install yaml-loader --save-dev
```
Vux2必须配合vux-loader使用, 请在build/webpack.base.conf.js里参照如下代码进行配置：
```javascript
const vuxLoader = require('vux-loader')
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
```

#### Reset 默认测试时样式
从http://cssreset.com 下载reset.css，引入项目，在App.vue引入樣式
``` javascript
<style>
@import './assets/css/reset.css';
#app {
    ...
}
</style>
```

#### 定义Mobile Viewport
作为移动端App，不允许用户随意缩放。在index.html中加入viewport配置
``` html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,
      maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <title>vux-learning</title>
</head>
```

#### Mock Data
为了做到前后端分离，一般开发前端的时候会需要使用Mock数据，
只要Mock数据的数据结构与真是借口保持一致，就能做到无缝集成（应该吧）
这一段大概讲一下怎么用axios读取本地的json文件作为http请求的返回
参考：https://www.cnblogs.com/momozjm/p/6271249.html 

1. 创建data.json
``` json
{
    "point_detail_top10": {
        "current_points": 2550,
        "point_records": [{
                "title": "注册有礼",
                "time": "2017-12-19 09:48:56",
                "value": "+100.00"
            }
        ]
    },
    "point_detail_month": {
        "current_points": 2550,
        "point_records": []
    },
    "point_detail_all": {
        "current_points": 2550,
        "point_records": []
    }
}
```
1. 配置webpack.dev.conf.js
``` jacascript
// Configurations for mock data
const express = require('express')
const app = express()
var appData = require('../data.json')
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

const devWebpackConfig = merge(baseWebpackConfig, {
...
    devServer: {
...
        // Mock REST api in project
        before(app) {
            app.get('/api/pointdetail/top10', (req, res) => {
                res.json({
                    errno: 0,
                    data: appData.point_detail_top10
                })
            })
            app.get('/api/pointdetail/month', (req, res) => {
                res.json({
                    errno: 0,
                    data: appData.point_detail_month
                })
            })
            app.get('/api/pointdetail/all', (req, res) => {
                res.json({
                    errno: 0,
                    data: appData.point_detail_all
                })
            })
        }
    },
...
}
```

1. 上述配置完成之后，应该就可以直接用router访问数据了，比如。`http://localhost:8080/api/pointdetail/all`
1. 然后，可以在组件里用axios或者Vux AjaxPlugin调用，这里用Vux AjaxPlugin举例
引入Vux AjaxPlugin （手工引入）
```javascript
<script>
// import { AjaxPlugin } from 'vux'
import AjaxPlugin from 'vux/src/plugins/ajax/index'
import Vue from 'vue'
Vue.use(AjaxPlugin)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  },
  created () {
    this.$http.get('/api/pointdetail/all').then(
      response => {
        console.log(response)
      },
      response => {
        console.log('数据加载失败')
      }
    )
  }
}
</script>
```

#### 项目结构
```
Project
|   .babelrc                                  # babel 预处理配置
|   .editorconfig                             # 编辑器配置
|   .eslintignore                             # eslint语法检查忽略路径
|   .eslintrc.js                              # eslint 配置，规则 （如果要禁用规则，在这里改）
|   .gitignore                                # git ignore，怎么解释... 就是git ignore
|   .postcssrc.js                             # postcss 插件的配置文件，用于自动生成符合各个浏览器标准的css文件
|   data.json                                 # Mock数据
|   index.html                                # 首页
|   package.json                              # webpack 项目配置，js库依赖
|   README.md                                 # 本文
|
+---dist                                      # 打完包的文件会生成在这里   
|
+---build                                     # webpack相关打包配置文件
|       build.js                              # webpack 打包
|       check-versions.js                     # webpack 检查版本
|       utils.js                              # webpack loader相关工具类
|       vue-loader.conf.js                    # vue-loader配置
|       webpack.base.conf.js                  # webpack 基础公用配置
|       webpack.dev.conf.js                   # webpack 开发配置
|       webpack.prod.conf.js                  # webpack 生产配置
|       webpack.test.conf.js                  # webpack 测试配置
|       
+---config
|       dev.env.js                            # 定义开发NODE_ENV
|       index.js                              # 另一些webpack打包配置
|       prod.env.js                           # 定义生产NODE_ENV
|       test.env.js                           # 定义测试NODE_ENV
|       
+---node_modules                              # 依赖的JS库
+---src
|   |   App.vue                               # 根组件
|   |   main.js                               # 项目一切的入口
|   |   
|   +---assets                                # 资源文件夹，公共资源
|   |       
|   +---components                            # Vue组件，照理说应该一个组件一个文件夹所有资源就近管理
|   |       
|    +---page                                 # 页面
|    |
|   \---router
|           index.js                          # vue-router 配置
|           
+---static
|       .gitkeep
|       
\---test                                      # 单元测试
    \---unit
        |   .eslintrc
        |   index.js                          # 单元测试要运行的文件夹
        |   karma.conf.js                     # karma测试框架配置
        |   
        \---specs                             # 单元测试 test case
                HelloWorld.spec.js
```


### Vue.js
### Css 样式
       