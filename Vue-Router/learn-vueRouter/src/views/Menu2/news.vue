<template>
  <div>
    <!-- <ul>
      <li>新闻1</li>
      <li>新闻2</li>
      <li>新闻3</li>
      <li>新闻4</li>
    </ul> -->
    <h2>this is news</h2>
    <button @click="btnClick">{{count}}</button>
    <ul>
      <li v-for="(item,index) in list" @click="listClick(item)">{{item.name}}</li>
    </ul>
  </div> 
</template> 
<script>
export default {
  data() {
    return {
      count: 0,
      list: [
        {name:'张三',id:'001'},
        {name:'李四',id:'002'},
        {name:'王五',id:'003'},
      ]
    }
  },
  methods: {
    btnClick() {
      this.count++;
    },
    listClick(item) {
      this.list[0].name = '哈哈'
      this.$emit('itemClick',item)
    }
  },
}
</script>
<style lang="scss" scoped>
  
</style>