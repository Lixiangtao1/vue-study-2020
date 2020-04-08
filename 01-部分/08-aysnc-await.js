function test1(){
  return new Promise((resolve, reject)=>{
      let sino = parseInt(Math.random() * 6 +1)
      setTimeout(()=>{
          resolve(sino)
      },0)
  })
}
async function test(){
  console.log('+++')  //第一个打印
  let n = await test1() //等待test1()先执行完成后再往下执行
  console.log('----') 
  console.log(n)  
  // 使用async / await 会使异步操作变的更像是同步操作
} 
test()