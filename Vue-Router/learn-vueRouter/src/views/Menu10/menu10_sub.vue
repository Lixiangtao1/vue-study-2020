<template>
  <div class="container">
    <h2>menu_sub----</h2>
    <h3>{{sonMsg.array}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    sonMsg:{
      type:Object
    }
  },
  created() {
    mixins: [myHunru]
  },
  methods: {
    
  },
};

// 定义一个混入对象
const myHunru = {
  created() {
    this.hello()
  },
  methods:{
    hello() {
      console.lgo('this is hunru')
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>