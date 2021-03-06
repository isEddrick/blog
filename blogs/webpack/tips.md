## 外部扩展

### externals

> 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。

例如，从 CDN 引入 jQuery，而不是把它打包

index.html

```html
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous">
</script>
```

webpack.mpa.js

```js
module.exports = {
  //...
  externals: {
    jquery: 'jQuery'
  }
};
```

## 打包问题

### 把每个组件打成一个包

> 全部组件放到入口文件

例子

```js
const components = reduce(
    glob.sync('**/index.next.javascript', { cwd: COMPONENT_LIST_CWD }),
    (acc, pathname) => {
        const name = path.dirname(pathname);
        const key = name === 'style' ? 'style/index' : name;

        acc[key] = path.join(COMPONENT_LIST_CWD, pathname);

        return acc;
    },
    {}
);

module.exports = { 
    entry: {
        ...components,
        index: './src/index.next'
    }
}
```
