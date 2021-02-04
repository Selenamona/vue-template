import Vue from "vue";
import axios from "axios";

axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8"; // 配置请求头

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data) {
      if (response.data.code !== 0 && response.data.msg) {
        Vue.prototype.$toast(response.data.msg);
      }
      return Promise.resolve(response.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
