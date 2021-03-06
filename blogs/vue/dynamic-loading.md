---
title: Vue - 动态加载并注册组件、且通过 render 动态创建该组件
date: 2020-11-06
categories:
 - Vue
---

# vue 动态加载并注册组件、 且通过 render动态创建该组件

基于 iview Tabs 组件实现

功能：为每个 tab 动态创建不同的、特定的组件内容，而不需要大量的 import 组件并进行 component 注册

Index.vue

```html
<template>
    <div class="content-left-menu">
        <div class="item-contain layout-content">
            <Tabs class="cmcc-ivu-tab2" type="card" closable>
                <TabPane v-for="k in zj" :label="k.label" >
                    <loader :vueName="k.vueName"></loader>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    import loader from './EntryLoader.vue'

    export default {
        components: {loader},
        data() {
            return {
                zj:[
                    {label:'tab1',vueName:'workflow/Index'},
                    {label:'tab2',vueName:'workflow/Index2'},
                    {label:'tab3',vueName:'workflow/Index3'}
                ]
            }
        }
    }
</script>
```

EntryLoader.vue

```html
<script>
    export default {
        props: ['vueName'],
        data() {
            return {}
        },
        created() {
            this.$options.components[this.vueName] = require('@/components/' + this.vueName + '.vue')
        },
        render: function (createElement) {
            return createElement(this.vueName)
        }
    }
</script>
```

## 引用

[vue 动态加载并注册组件、 且通过 render动态创建该组件](https://www.jianshu.com/p/fd89a2074943)
