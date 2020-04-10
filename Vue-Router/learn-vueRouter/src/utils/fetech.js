// 网络请求的方式 --axios框架的使用
// 功能特点：
//  1.在浏览器发送XMLHttpRequest请求
//  2.在node环境发送Http请求
//  3.支持Promise API
//  4.拦截请求和响应
//  5.转换请求和响应
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 5000  //请求超时时间
})

// 请求的拦截
service.interceptors.request.use(config => {
  // 请求拦截的作用
  // 1.比如config 中的一些信息不符合服务器的要求
  // 2.比如每次发送网络请求时有个请求的图标, 可以在此处设置show的状态
  // 3.某些网络请求必须要携带一些特殊的信息(比如登录token)

  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  // 设置请求体的格式
  // console.log(config); //config 配置参数
  return config //必须要返回出去,否则无法请求
},err => {
  console.log(err)
})

// 响应的拦截
service.interceptors.response.use(response => {
  // console.log(response) //请求到的数据
  return response
},err => {
  console.log(err)
})

export default service