// vm.mag = 'hello world';
Vue.nextTick(function () {
  vm.mag = 'hello world';
})
// nextTick 在下次DOM更新循环结束之后执行延迟回调
const vm = new Vue({
  el: '#app',
  data: {
    mag: 'haha'
  }
})
// $nextTick()返回的是一个promise对象,可以使用async/await 来使用