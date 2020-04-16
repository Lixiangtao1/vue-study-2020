const obj = {
  name: '张三',
  age: 30
}
Object.defineProperty(obj, "sex", {
  value: '哈哈',
  writable: true,   // 当为false时,此属性的值不可更改(不能被重新赋值)
  enumerable: true, // \可枚举 (for...in 循环和 Object.keys() 中被枚举。)
  configurable: false // 可更改，可删除 (当为false时不支持删除此属性)
});
console.log(obj)
// Object.defineProperty(obj, "sex", {
// })
delete obj.sex;
console.log(obj)
