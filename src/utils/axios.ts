/** @format */

import * as axios from 'axios'
// 这里可根据具体使用的UI组件库进行替换
// import { Toast } from 'vant'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

/* baseURL 按实际项目来定义 */
const baseURL = process.env.BASE_URL

/* 创建axios实例 */
const http = axios.default.create({
  baseURL,
  timeout: 0, // 请求超时时间
  maxContentLength: 4000
})

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      // 错误提示
    } else {
      return response.data
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default http
