import axiosInstance from './axiosConfig'

const ajaxFunc = (url, method = 'post') => {
  const params = method === 'post' ? 'params' : 'data'
  return (data = {}) => axiosInstance({ url, method, [params]: data })
}

export default ajaxFunc

// 请求的可能情况
//  1. 请求成功： 
//      code = 0 通过成功后返回的数据进行页面展示
//      处理一些其他的错误码
//  3. 请求失败：进行提示    