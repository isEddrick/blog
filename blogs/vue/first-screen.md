---
title: Vue - 首屏优化
date: 2020-11-06
categories:
 - Vue
---

1. webpack4的splitChunks 配合externals，意思将第三方库外置，用cdn的形式引入，可以减少打包体积。

```js
externals: {
    'vue': 'Vue', //vue 是包名 Vue是引入的全局变量
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'iview': 'iview' //iview
},
```

2. 路由懒加载、组件懒加载

```js
{
    path: '/test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/test')
}
```

3. 提取css为单独文件并压缩 `webpack4 的 mini-css-extract-plugin`

4. 压缩JS `webpack4 自带了UglifyJsPlugin功能`

5. tree shaking和sideEffects

6. 使用CDN资源,减小服务器带宽压力

7. 将一些静态js css放到其他地方（如OSS），减小服务器压力

8. splitChunks

[splitChunks](https://segmentfault.com/a/1190000016623314)


时间 | 优化前 | 优化后
---|---|---
webpack cach:true |	55 | 54
babel-loader?cacheDirectory=true | 54 | 35
webpack-parallel-uglify-plugin | 36.7 | 27.98
happypack | 36 | 34.33
uglifyjs-webpack-plugin | 39 | 21.20
