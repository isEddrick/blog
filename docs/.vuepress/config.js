// .vuepress/config.js
module.exports = {
  base: "/blog/", // 仓库名字是blog

  title: "张福浩",
  description: "随手笔记",

  themeConfig: {
    sidebarDepth: 1,

    lastUpdated: "上次更新", // 文档更新时间

    // displayAllHeaders: true, // 显示所有标题链接

    sidebar: {
      "/note/": [
        {
          title: 'HTML && CSS',
          children: [
            'css/垂直居中布局'
          ]
        },
        {
          title: 'JavaScript',
          children: [
            'js/let和const命令',
            'js/构造函数',
            'js/深浅拷贝',
            'js/防抖',
            'js/节流',
            'js/定时器',
          ]
        },
        {
          title: 'Vue',
          children: [
            'vue/双向绑定/双向绑定',
          ]
        },
        {
          title: 'Webpack',
          children: [
            'webpack/使用姿势',
          ]
        },
      ]
    },

    nav: [
      { text: "Home", link: "/" }, // 根路径
      { text: "Github", link: "https://github.com/isEddrick" }
    ]
  }
};
