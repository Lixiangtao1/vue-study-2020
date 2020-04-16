import Vue from 'vue'
import menu10 from './../views/Menu10/menu10.vue'
const Profile = Vue.extend(menu10)

function showToast(text){
    const toastDom = new Profile({
        el : document.createElement('div'),
        data(){
            return {
                text:text,
                show:true
            }
        }
    })

　　//在body中动态创建一个div元素，后面自动会把它替换成整个vue文件内的内容
    document.body.appendChild(toastDom.$el)
    setTimeout(() => {toastDom.show=false},2000) //显示后2秒就消失
}

function registryToast (){
    //把showToast这个方法添加到uve的原型中，可以直接调用，当调用的时候就是执行函数内的内容
    Vue.prototype.$toast = showToast
}

export default registryToast

