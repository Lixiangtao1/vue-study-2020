<template>
  <div>
    <h2>{{$store.state.msg1}}---vuex中的msg1</h2>
    <h2>This is Menu5 (Vuex--learn)</h2>
    <h2>{{counter}}</h2>
    <button @click="addtation">+</button>
    <button @click="dectation">-</button>
    <h2>{{$store.getters.powerCount}}</h2>
    <!-- <h2>{{more}}</h2> -->
    <h2>{{$store.getters.more}}</h2>
    <h2>{{$store.getters.moreAgestu2(30)}}</h2>

    <h2>{{'------------'}}</h2>
    <button @click="addCount(5)" >+5</button>

    <h2>-------------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="edit">修改信息</button>
  </div>
</template>
<script>
import {INCREMENT, UPDATE, DECREMENT, INCREMENTCOUNT} from './../../store/mutation-types.js'
export default {
  data(){
    return {
    }
  },
  computed: {
    counter: function () {
      return this.$store.state.count;
    },
    // more: function () {
    //   return this.$store.state.todos.filter( res => {
    //     return res.age >= 20;
    //   })
    // }
  },
  methods: {
    addtation() {
      this.$store.commit(INCREMENT)
    },
    dectation() {
      this.$store.commit(DECREMENT)
    },
    addCount(count) {
      // payload 还可以传个对象(参数不唯一时)
      this.$store.commit(INCREMENTCOUNT, count)

      // mutation 提交参数的风格
      // this.$store.commit({
      //   type:'incrementCount',
      //   count
      //   // 此时提交的参数将会是一个对象
      // })
    },
    // 响应式
    edit () {
      // this.$store.commit('UPDATE')
      // this.$store.dispatch('updateInfo','我是payload') //可以传参数

      // 当存在异步操作时,将异步操作写在actions中,(此时不在是使用commit提交,而是使用dispatch)

      // this.$store.dispatch('updateInfo', () => {
      //   // 还可以传一个回调函数
      //   console.log('执行成功，开始回调')
      // })

      // this.$store.dispatch('updateInfo',{
      //   message: '这是参数',
      //   success: () => {
      //     console.log('执行成功的回调函数')
      //   }
      // })

      // Promise().then
      this.$store
      .dispatch('updateInfo','参数')
      .then((res) => {
        console.log(res)
      })
    }
  },
}
</script>
<style lang="scss" scoped>

</style>