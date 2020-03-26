// 1.构建组件的构造器
const hhh = Vue.extend({
  template:`
  <div>
    <h2>hello world</h2>
    <p>内容</p>
  </div>
  `
})
// 2.注册组件('组件名称', 构造器名称)
Vue.component('ccc', hhh);

// 3.使用组件必须要 在vue实例中 (除了使用el:'#app'将组件映射到body上外
//  还可以使用$mount()这种方法将vue实例挂载到DOM上)
// const vm = new Vue({
//   el: '#app',
//   data: {
//     msg: 'haha'
//   },
  
// })

let ccc = new hhh().$mount('#app');
// document.body.appendChild(ccc,$el);

