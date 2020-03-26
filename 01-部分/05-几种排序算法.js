//1. 冒泡排序
function bubleSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = 0; j < array.length-i-1; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
// console.log(bubleSort([2,4,1,5,3,8,444,43,2,323,23,3]))

// 2 选择排序
function selectSort (array) {
  let min,temp; 
  for (let i=0; i<array.length;i++) {
    min = i;
    for (let j = i+1; j< array.length; j++) {
      if (array[j]<array[min]) {
        min = j;
      }
    }
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
// console.log(selectSort([2,4,1,5,3,8,444,43,2,323,23,3]))

// 3.
 
