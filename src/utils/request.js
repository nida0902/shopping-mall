import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 30 * 1000
})

service.interceptors.request.use(config => {
  // todo token
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  // todo 服务器返回错误类型
  Message({
    message: error.msg,
    type: 'warning',
    duration: 5 * 1000
  })

  return Promise.reject(error)
})

export default service
