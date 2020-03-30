const data = {
  a: 1
}
// Object.freeze(data)
const vm = new Vue({
  el:'#app',
  data: data
})
console.log(vm.a == data.a)
let hhh = document.getElementById('app');
console.log(hhh);
console.log(vm.$el);
// vm.$watch() 是一个实例方法
vm.$watch('a', function (newValue,oldValue) {
  // 这个回调函数将在a的值变化时 执行
  alert(1);
})