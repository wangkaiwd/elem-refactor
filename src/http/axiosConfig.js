import axios from 'axios'
import qs from 'qs'
const DATA_OK = 0
const axiosInstance = axios.create({
  baseURL: 'https://easy-mock.com/mock/5b838e2a445175634e4dbe20/element',
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    let { method, data } = config
    // post请求进行设置
    if (method.toLowerCase() === 'post') {
      data = qs.stringify(data)
      config.headers = { 'content-type': 'application/x-www-form-urlencoded' }
    }
    return config
  },
  (error) => {
    console.log('请求出错', error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // if (errno === DATA_OK) {
      return response.data
      // }
    } else {
      console.log('响应状态码不是200')
    }
  },
  (error) => {
    console.log('响应出错')
    return Promise.reject(error)
  }
)

export default axiosInstance