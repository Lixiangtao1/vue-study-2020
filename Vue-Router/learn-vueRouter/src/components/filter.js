import Vue from 'vue'
var myFilter = Vue.filter('my-filter', function (value) {
  if(!value) return '';
  value = value.toString()
  return value.chatAt(0).toUpperCase() + value.slice(1)
})
// 
// var myFilter = Vue()
export default myFilter