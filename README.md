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

定义相对路径别名，可以用`@`指代src目录
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

引入Vux
``` javascript

```

Reset 默认测试时样式
从http://cssreset.com 下载reset.css，引入项目
``` html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0>
    <link rel="stylesheet" type="text/css" href="assets/css/reset.css" />
    <title>vux-learning</title>
</head>
```

定义Mobile Viewport
作为移动端App，不允许用户随意缩放。在index.html中加入viewport配置
``` html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,
      max-scale=1.0,min-scale=1.0,user-scaleable=no">
    <title>vux-learning</title>
</head>
```


#### 项目结构
```
Project
|   .babelrc                                          # babel 预处理配置
|   .editorconfig                                 # 编辑器配置
|   .eslintignore                                  # eslint语法检查忽略路径
|   .eslintrc.js                                      # eslint 配置，规则 （如果要禁用规则，在这里改）
|   .gitignore                                      # git ignore，怎么解释... 就是git ignore
|   .postcssrc.js                                  # postcss 插件的配置文件，用于自动生成符合各个浏览器标准的css文件
|   index.html                                     # 首页
|   package.json                                # webpack 项目配置，js库依赖
|   README.md                                 # 本文
|
+---dist                                              # 打完包的文件会生成在这里   
|
+---build                                            # webpack相关打包配置文件
|       build.js                                        # webpack 打包
|       check-versions.js                      # webpack 检查版本
|       utils.js                                         # webpack loader相关工具类
|       vue-loader.conf.js                    # vue-loader配置
|       webpack.base.conf.js              # webpack 基础公用配置
|       webpack.dev.conf.js                # webpack 开发配置
|       webpack.prod.conf.js              # webpack 生产配置
|       webpack.test.conf.js                # webpack 测试配置
|       
+---config
|       dev.env.js                                    # 定义开发NODE_ENV
|       index.js                                        # 另一些webpack打包配置
|       prod.env.js                                 # 定义生产NODE_ENV
|       test.env.js                                   # 定义测试NODE_ENV
|       
+---node_modules                           # 依赖的JS库
+---src
|   |   App.vue                                      # 根组件
|   |   main.js                                         # 项目一切的入口
|   |   
|   +---assets                                       # 资源文件夹，公共资源
|   |       
|   +---components                           # Vue组件，照理说应该一个组件一个文件夹所有资源就近管理
|   |       
|    +---page                                        # 页面
|    |
|   \---router
|           index.js                                    # vue-router 配置
|           
+---static
|       .gitkeep
|       
\---test                                                # 单元测试
    \---unit
        |   .eslintrc
        |   index.js                                   # 单元测试要运行的文件夹
        |   karma.conf.js                         # karma测试框架配置
        |   
        \---specs                                     # 单元测试 test case
                HelloWorld.spec.js
```


### Vue.js
### Css 样式
       