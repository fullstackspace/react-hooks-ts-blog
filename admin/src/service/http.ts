import axios from 'axios';

// 实例创建
const service = axios.create({
  baseURL: '', // 请求地址
  timeout: 3000, // 请求超时时长
  headers: {
    token: ''
  }, // 请求头
})

// 请求拦截(配置请求头相关)
service.interceptors.request.use(config => {
  // 配置请求头相关内容。请求头如何配置需要和后台约定好
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  // 配置响应错误的全局拦截
  // 登录失效
  // 接口请求成功状态码
  return response
}, error => {
  // 失败后的状态码区分
  return Promise.reject(error)
})

/**
 * get方法，对应get请求
 * @param url [请求的url地址]
 * @param params [请求时携带的参数]
 */
export function get(url: string, params: object) {
  return new Promise((resolve, reject) => {
    service.get(url, { params })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

/**
 * post 请求 对应post方法
 * @param url [请求的url地址]
 * @param params [请求时携带的参数]
 * @param responseType [预留参数]
 */
export function post(url: string, params: object, responseType?: any) {
  return new Promise((resolve, reject) => {
    service.post(url, params, responseType)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

/**
 * 文件下载
 * @param url [请求的url地址]
 * @param params [请求时携带的参数]
 */
export function downfile(url: string, params: object) {
  return axios({
    headers: {
      "Content-Type": "application/json"
    },
    responseType: "blob", // 数据转换成blob流
    method: "post",
    url: url,
    params: params
  }).then(res => {
    if (!res || !res.data) {
      return;
    }
    // Message.closeAll();
    const blob = new Blob([res.data]); // 处理文档流
    const elink = document.createElement("a");
    // elink.download = params.fileName;
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  });
}

export default service