(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{563:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("h2",{attrs:{id:"函数式编程-fp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程-fp"}},[t._v("#")]),t._v(" 函数式编程（FP）")]),t._v(" "),a("p",[t._v("掌握 React 原理之前，不得不先了解下函数式编程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e314b125aa6451b978bbf4fdc1dd58b~tplv-k3u1fbpfcp-zoom-1.image",alt:"函数式编程"}})]),t._v(" "),a("h3",{attrs:{id:"什么是函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数式编程"}},[t._v("#")]),t._v(" 什么是函数式编程？")]),t._v(" "),a("h4",{attrs:{id:"举个🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个🌰"}},[t._v("#")]),t._v(" 举个🌰")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命令式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fruitsName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" fruits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fruitsName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fruits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fruits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fruit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" fruit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"为什么叫函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么叫函数式编程"}},[t._v("#")]),t._v(" 为什么叫函数式编程？")]),t._v(" "),a("p",[t._v("数据可以不断的从一个函数的输出可以流入另一个函数输入，它其实就是强调在编程过程中把更多的关注点放在如何去构建关系。通过构建一条高效的建流水线，一次解决所有问题。而不是把精力分散在不同的加工厂中来回奔波传递数据。")]),t._v(" "),a("h4",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("h5",{attrs:{id:"一等公民"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一等公民"}},[t._v("#")]),t._v(" 一等公民")]),t._v(" "),a("p",[t._v("这是函数式编程得以实现的前提：函数与其他数据类型一样，处于平等地位。")]),t._v(" "),a("h5",{attrs:{id:"声明式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明式编程"}},[t._v("#")]),t._v(" 声明式编程")]),t._v(" "),a("p",[t._v("声明我需要做什么，而非怎么去做")]),t._v(" "),a("h5",{attrs:{id:"惰性执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#惰性执行"}},[t._v("#")]),t._v(" 惰性执行")]),t._v(" "),a("p",[t._v("函数只在需要的时候执行，即不产生无意义的中间变量")]),t._v(" "),a("h5",{attrs:{id:"无状态和数据不可变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无状态和数据不可变"}},[t._v("#")]),t._v(" 无状态和数据不可变")]),t._v(" "),a("p",[t._v("这是函数式编程的核心概念")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据不可变")]),t._v("： 它要求你所有的数据都是不可变的，这意味着如果你想修改一个对象，那你应该创建一个新的对象用来修改，而不是修改已有的对象。")]),t._v(" "),a("li",[a("strong",[t._v("无状态")]),t._v("： 主要是强调对于一个函数，不管你何时运行，它都应该像第一次运行一样，给定相同的输入，给出相同的输出，完全不依赖外部状态的变化。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/5/16d00f438daa6474?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"函数式编程应具备的特性"}})]),t._v(" "),a("h5",{attrs:{id:"没有副作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有副作用"}},[t._v("#")]),t._v(" 没有副作用")]),t._v(" "),a("p",[t._v("我们函数中最主要的功能当然是根据输入"),a("strong",[t._v("返回结果")]),t._v("，而在函数中我们最常见的副作用就是"),a("strong",[t._v("随意操纵外部变量")])]),t._v(" "),a("p",[t._v("这里可以举个🌰（亲眼见过...）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvalues"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这样函数最主要的输出功能没有了，变成了直接修改了外部变量，这就是它的副作用。而没有副作用的写法应该是：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("传递引用一时爽，代码重构火葬场")]),t._v(" "),a("p",[t._v("保证函数没有副作用，一来能保证数据的不可变性，二来能避免很多因为共享状态带来的问题。当你一个人维护代码时候可能还不明显，但随着项目的迭代，项目参与人数增加，大家对同一变量的依赖和引用越来越多，这种问题会越来越严重。最终可能连维护者自己都不清楚变量到底是在哪里被改变而产生 Bug。")])]),t._v(" "),a("h5",{attrs:{id:"纯函数-pure-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯函数-pure-functions"}},[t._v("#")]),t._v(" 纯函数（pure functions）")]),t._v(" "),a("p",[t._v("纯函数的概念：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("不依赖外部状态（无状态）")]),t._v("： 函数的的运行结果不依赖全局变量，"),a("code",[t._v("this")]),t._v(" 指针，"),a("code",[t._v("IO")]),t._v(" 操作等。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("没有副作用（数据不变）")]),t._v("： 不修改全局变量，不修改入参。")])])]),t._v(" "),a("p",[t._v("纯函数的意义：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("便于测试和优化：保证健壮性")])]),t._v(" "),a("li",[a("p",[t._v("可缓存性：相同的输入总是可以返回相同的输出。类似于 "),a("code",[t._v("memoize")]),t._v(" 函数")])]),t._v(" "),a("li",[a("p",[t._v("自文档化：依赖很明确，更易于观察和理解")])]),t._v(" "),a("li",[a("p",[t._v("更少的 Bug：不存在指向不明的 this，不存在对全局变量的引用，不存在对参数的修改")])])]),t._v(" "),a("h3",{attrs:{id:"柯里化-currying-和函数组合-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化-currying-和函数组合-compose"}},[t._v("#")]),t._v(" 柯里化（Currying）和函数组合（Compose）")]),t._v(" "),a("h4",{attrs:{id:"柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化"}},[t._v("#")]),t._v(" 柯里化")]),t._v(" "),a("p",[t._v("👇")]),t._v(" "),a("p",[a("code",[t._v("f(a,b,c) → f(a)(b)(c)")])]),t._v(" "),a("p",[t._v("容易跟 "),a("strong",[t._v("部分函数应用")]),t._v(" 混淆")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 柯里化\nf(a,b,c) → f(a)(b)(c)\n// 部分函数调用\nf(a,b,c) → f(a)(b,c) / f(a,b)(c)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("lodash")]),t._v(" "),a("code",[t._v("Ramda")]),t._v(" 这些库里的curry是"),a("strong",[t._v("高级柯里化")])]),t._v(" "),a("h4",{attrs:{id:"函数组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组合"}},[t._v("#")]),t._v(" 函数组合")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("compose")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("g")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("模拟一个简化版 "),a("code",[t._v("compose")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("compose")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("fns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" fns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduceRight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("优点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("代码简洁，开发快速\n"),a("code",[t._v("函数式编程大量使用函数的组合，函数的复用率很高，减少了代码的重复，因此程序比较短，开发速度较快。")])])]),t._v(" "),a("li",[a("p",[t._v("接近自然语言，易于理解\n"),a("code",[t._v("函数式编程大量使用声明式代码，基本都是接近自然语言的，加上它没有乱七八糟的循环，判断的嵌套。")])])]),t._v(" "),a("li",[a("p",[t._v('易于"并发编程"\n'),a("code",[t._v("函数式编程没有副作用")])])]),t._v(" "),a("li",[a("p",[t._v("更少的出错概率\n"),a("code",[t._v("因为每个函数都很小，而且相同输入永远可以得到相同的输出，因此测试很简单，同时函数式编程强调使用纯函数，没有副作用，因此也很少出现奇怪的 Bug。")])])])]),t._v(" "),a("p",[t._v("缺点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("性能\n"),a("code",[t._v("函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销。同时，在 JS 这种非函数式语言中，函数式的方式必然会比直接写语句指令慢（引擎会针对很多指令做特别优化）。就拿原生方法 map 来说，它就要比纯循环语句实现迭代慢 8 倍。")])])]),t._v(" "),a("li",[a("p",[t._v("资源占用\n"),a("code",[t._v("在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式。这在某些场合会产生十分严重的问题。")])])]),t._v(" "),a("li",[a("p",[t._v("递归陷阱\n"),a("code",[t._v("在函数式编程中，为了实现迭代，通常会采用递归操作，为了减少递归的性能开销，我们往往会把递归写成尾递归形式，以便让解析器进行优化。但是众所周知，JS 是不支持尾递归优化的（虽然 ES6 中将尾递归优化作为了一个规范，但是真正实现的少之又少）")])])])]),t._v(" "),a("h3",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844903936378273799#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("简明 JavaScript 函数式编程——入门篇"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);