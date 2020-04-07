// const promise = new Promise(function (resolve,reject) {
//   if ('异步操作成功') {
//     resolve(value)
//   }else{
//     reject(error)
//   }
// })



// promise 
// function timeout(ms) { 
//   return new Promise((resolve, reject) => { //promise新建后就会立即执行
//     setTimeout(resolve, ms, 'done');
//     console.log('1222'); //会立即执行
//   });
// }

// timeout(2000).then((value) => {
//   console.log(value);
// });

new Promise(function () {
  // console.log('---');
  return resolve();
  // console.log('---');

})