<template>
  <div>
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
import {INCREMENT, UPDATE} from './../../store/mutation-types.js'
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
      this.$store.commit('INCREMENT')
    },
    dectation() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // payload 还可以传个对象(参数不唯一时)
      this.$store.commit('incrementCount',count)

      // mutation 提交参数的风格
      // this.$store.commit({
      //   type:'incrementCount',
      //   count
      //   // 此时提交的参数将会是一个对象
      // })
    },
    // 响应式
    edit () {
      this.$store.commit('UPDATE')
    }
  },
}
</script>
<style lang="scss" scoped>

</style>