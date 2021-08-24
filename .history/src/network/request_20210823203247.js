import axios from 'axios'
import store from 'store'
// 封装axios
export function request(config) {
    let instance = axios.create({
        baseURL: 'http://192.168.100.72:8769/outsource',
        timeout: 5000
    })
    // 拦截请求
    instance.interceptors.request.use(config => {
        // 发送请求前将token加入header中
        config.headers['Authorization'] = store.state.token
        // 返回config，否则后端无法接收到请求
        return config
    }, err => {
        return instance(err)
    })
    // 拦截响应
    instance.interceptors.response.use(config => {
        
        return config
    }, err => {
        return instance(err)
    })
    // 发送正真的网络请求
    return instance(config)
}