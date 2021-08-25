import axios from 'axios'
// import Vue from 'vue'
// import store from 'store/index'
// 封装axios
export function request(config) {
    let instance = axios.create({
        baseURL: 'http://192.168.100.72:8769/outsource',
        timeout: 1000*6
    })
    // 拦截请求
    instance.interceptors.request.use(config => {
        // 发送请求前将token加入header中
        config.headers['Authorization'] = sessionStorage.getItem('token')
        // 返回config，否则后端无法接收到请求
        return config
    }, err => {
        this.$message.error('请求超时')
        return instance(err)
    })
    // 拦截响应
    instance.interceptors.response.use(config => {
        switch(config.data.code){
            case 401:
                this.$message.error(config.data.message)
                this.$router.replace('/login')
                break
            case 404:
                if(config.data.message !== null){
                    this.$message.error(config.data.message)
                }
                else{
                    this.$message.error('页面未找到')
                }
                break
                default:
                    return config
        }
        return config
    }, err => {
        return instance(err)
    })
    // 发送正真的网络请求
    return instance(config)
}