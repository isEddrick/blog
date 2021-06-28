(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{581:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[t._v("webpack4的splitChunks 配合externals，意思将第三方库外置，用cdn的形式引入，可以减少打包体积。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("externals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vue 是包名 Vue是引入的全局变量")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VueRouter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vuex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iview'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iview'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//iview")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("路由懒加载、组件懒加载")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "test" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("提取css为单独文件并压缩 "),a("code",[t._v("webpack4 的 mini-css-extract-plugin")])])]),t._v(" "),a("li",[a("p",[t._v("压缩JS "),a("code",[t._v("webpack4 自带了UglifyJsPlugin功能")])])]),t._v(" "),a("li",[a("p",[t._v("tree shaking和sideEffects")])]),t._v(" "),a("li",[a("p",[t._v("使用CDN资源,减小服务器带宽压力")])]),t._v(" "),a("li",[a("p",[t._v("将一些静态js css放到其他地方（如OSS），减小服务器压力")])]),t._v(" "),a("li",[a("p",[t._v("splitChunks")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000016623314",target:"_blank",rel:"noopener noreferrer"}},[t._v("splitChunks"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("时间")]),t._v(" "),a("th",[t._v("优化前")]),t._v(" "),a("th",[t._v("优化后")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("webpack cach:true")]),t._v(" "),a("td",[t._v("55")]),t._v(" "),a("td",[t._v("54")])]),t._v(" "),a("tr",[a("td",[t._v("babel-loader?cacheDirectory=true")]),t._v(" "),a("td",[t._v("54")]),t._v(" "),a("td",[t._v("35")])]),t._v(" "),a("tr",[a("td",[t._v("webpack-parallel-uglify-plugin")]),t._v(" "),a("td",[t._v("36.7")]),t._v(" "),a("td",[t._v("27.98")])]),t._v(" "),a("tr",[a("td",[t._v("happypack")]),t._v(" "),a("td",[t._v("36")]),t._v(" "),a("td",[t._v("34.33")])]),t._v(" "),a("tr",[a("td",[t._v("uglifyjs-webpack-plugin")]),t._v(" "),a("td",[t._v("39")]),t._v(" "),a("td",[t._v("21.20")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);