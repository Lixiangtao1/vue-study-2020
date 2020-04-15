let Vue;

// 创建一个MyPlugin类
class MyPlugin {
  // 添加方法
  myFunction () {
    console.log('只是自定义的一个方法')
  }
}

MyPlugin.install = function (_vue, option) {
  Vue = _vue;
  console.log('hah')
}
export default MyPlugin