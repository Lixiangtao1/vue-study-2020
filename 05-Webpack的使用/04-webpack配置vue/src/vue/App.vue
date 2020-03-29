<template>
    <div>
        <CMP/>
        <h2 class="title">{{msg}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>
<script>
// 导入cmp组件
import CMP from './Cmp.vue'
export default {
    data () {
        return {
            msg: 'Hello world!'
        }
    },
    components:{
        CMP
    },
    methods: {
        btnClick () {
            this.msg = 'hahahah';
        } 
    }
}
</script>
<style scoped>
    .title {
        color:green;
    }
</style>