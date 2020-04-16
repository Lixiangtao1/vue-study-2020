<template>
  <div class="container">
    <h2>Menu 10</h2>
    <h2>{{msg}}</h2>
    <h2>{{msg10}}</h2>
    <h2>-----------</h2>
    <!-- <menusub :sonMsg="msg"></menusub> -->
    <!-- 可以使用对象的形式进行传值 -->
    <!-- <menusub :sonMsg="{msg, obj, array}"></menusub> -->
    <button @click="btnClick">按钮</button>
    <input type="text" v-model="dataFilter">
    <h3>{{dataFilter | captlize}}</h3>
    <h3>{{dataFilter | myfilter}}</h3>
    <h2>{{yourName}}</h2>
  </div>
</template>
<script>
import menusub from './menu10_sub.vue'
// 引入混入的对象
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  data() {
    // 因为组件可能会被创建多个实例
    // 使用对象 会影响组件的复用
    // 如果data还是一个对象,所有的实例将共享引用同一个数据对象
    // 但是通过提供data函数,能够调用data函数,从而返回初始数据的全新副本数据对象
    // (这是JS特性)
    return {
      dataFilter:'',
      msg: 'hello',
      obj: {
        name: 'haha',
        age: 40
      },
      array: [
        {name: 'Ace',id:'001'},
        {name: 'haha',id:'002'},
        {name: 'sibada',id:'003'}
      ],
      firstName: '张',
      lastName: '三',
      fullName: ''
    }
  },
  watch: {
    // 不能使用箭头函数来定义 因为箭头函数的this指向的是上下文作用域,
    // 并不会指向该组件的实例对象
    dataFilter(newVal, oldVal) {
      // 第一个参数: 当前值newVal
      // 第二个参数：旧值oldVal
      console.log(newVal)
      console.log(oldVal)
    }
  },
  computed: {
    // 计算属性是基于响应式依赖系统的,只有在响应式系统发生改变时才会重新求值
    yourName() {
      console.log(this) // this指向的是该组件的vue实例对象
      return this.fullName = this.firstName + '' + this.lastName;
    },
    // yourName:() => {
    //   console.log(this)
    //   return this.fullName = this.firstName + '' + this.lastName
    // }
  },
  // 过滤器
  filters: {
    captlize:function (value) {
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  components:{
    menusub
  },
  created() {
    console.log(this.$myplugin)
    console.log('这是组件自身的钩子++')
  },
  methods: {
    // 渲染state中todos
    btnClick() {
      this.$toast('哈哈')
    }
  },
};



</script>
<style lang="scss" scoped>
  
</style> 