// 1. 基本数据类型 (name value都会存储在栈中 栈的特点(先进后出))
let a = 1;
let b = a;
b = 2;
console.log(a,'--', b) //1  2   深拷贝，被拷贝的元素不会随着拷贝的元素改变而改变

// 2.引用数据类型 (深拷贝针对引用数据类型) 
// (name存在栈中, 地址存在堆中)
let obj = {
  aa : 1,
  bb: 2,
  cc: 3
};
// let obj2 = obj;
// obj2.aa = 3;
// console.log(obj, '++', obj2) //{aa: 3}  {aa: 3}  浅拷贝: 被拷贝元素会随着拷贝元素的改变而改变
// 原因: 引用数据类型的存储方式是name存在栈中,value存在堆中,栈内存会提供一个引用的指针指向堆内存中的地址
// 当obj2 进行拷贝时,拷贝的是中的地址, 改变的也是堆中的地址

// Object.assign() 是浅拷贝的方式

console.log(Object.keys(obj))
console.log(Object.values(obj))