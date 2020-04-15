// 定义混入的对象
const mixin = {
  data() {
    return {
      msg10: '局部mixins'
      // 局部混入会覆盖全局混入
    }
  },
  created() {
    console.log('这是局部混入的钩子--')
  },
  // 同名的钩子函数会合并成一个数组  并且都将会被调用,
}
export default mixin