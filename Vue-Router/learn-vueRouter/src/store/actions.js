export default {
  // actions类似于mutations (用来代替mutations进行异步操作)
  updateInfo(context, payload) { //context 上下文()   
    // console.log(context) // getters, state,
    // setTimeout(() => {
    //   // 执行异步操作 context(上下文环境 state)
    //   context.commit('update') //提交一个mutation
    //   console.log(payload.message)
    //   payload.success()
    // },3000)
    
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        // 在异步操作中进行提交
        context.commit('update')
        console.log(payload)
        resolve('1111')
      })
    })
  }
}