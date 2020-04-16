<template>
  <div class="container">
    <h2>menu11</h2>
    <button @click="$goPath('123','/menu_create')">新增</button>
    <!-- <button>新增</button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: '12344'
    }
  },
  created() {
    
  },
  methods: {
    // create() {
    //   this.$router.push({
    //     name: 'MENU_CREATE'
    //   })
    // }
  },
  
};
</script>
<style lang="scss" scoped>
  
</style>