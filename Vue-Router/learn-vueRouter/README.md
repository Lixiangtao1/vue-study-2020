# learn-router

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


// 什么是前端渲染,什么是后端渲染   单页面副应用阶段(SPA)
// history.pushState (可返回,相当于进栈出栈)   history.pushState({},'','haha');
// history.back  = history.go(-1)   (go可以使用正负值，相当于入栈出栈)
// history.replaceState(不能返回)
// history.forward() == history.go(1)