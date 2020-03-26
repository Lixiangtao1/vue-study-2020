// Vue.extend创建构造器
const Profile = Vue.extend({
  template: `
    <div>
      <h2>{{firstName}}{{lastName}}---{{alins}}</h2>
    </div>
  `,
  data () {
    return {
      firstName: 'James',
      lastName: 'Hadern',
      alins: 'bighu'
    }
  }
})
// 将实例挂载到dom
let example = new Profile().$mount('#app');

// 将vue的实例对象挂载到dom上   挂载到实例对象上
// $mount() 可以将vue实例挂载到dom上
// 注意在Vue.extend中 data必须是一个函数形式
// document.body.appendChild(example,$el);

