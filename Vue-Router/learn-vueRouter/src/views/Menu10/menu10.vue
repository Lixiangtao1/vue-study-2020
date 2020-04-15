<template>
  <div class="container">
    <h2>Menu 10</h2>
    <h2>{{msg}}</h2>
    <h2>{{msg10}}</h2>
    <h2>-----------</h2>
    <!-- <menusub :sonMsg="msg"></menusub> -->
    <!-- 可以使用对象的形式进行传值 -->
    <menusub :sonMsg="{msg, obj, array}"></menusub>
  </div>
</template>
<script>
import menusub from './menu10_sub.vue'
// 引入混入的对象
import mixin from './mixin.js'
export default {
  mixins: [mixin],
  data() {
    return {
      msg: 'hello',
      obj: {
        name: 'haha',
        age: 40
      },
      array: [
        {name: 'Ace',id:'001'},
        {name: 'haha',id:'002'},
        {name: 'sibada',id:'003'}
      ]
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
  },
};



</script>
<style lang="scss" scoped>
  
</style>