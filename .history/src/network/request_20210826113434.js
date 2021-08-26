import axios from 'axios'
import  Store  from 'vuex'
import Vue from 'vue'
// import Vue from 'vue'
// import store from 'store/index'
// 封装axios
export function request(config) {
    let instance = axios.create({
        baseURL: 'http://192.168.100.72:8769/outsource',
        // baseURL:'/api',
        timeout: 1000*6,
        headers:{
            'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
    // 拦截请求
    instance.interceptors.request.use(config => {
        // 发送请求前将token加入header中
        config.headers.Authorization = sessionStorage.getItem('token')
        // 返回config，否则后端无法接收到请求
        return config
    }, err => {
        this.$message.error('请求超时')
        return instance(err)
    })
    // 拦截响应
    instance.interceptors.response.use(config => {
        if(config.status === 200){
            return instance(config)
        }
        return config
    },err =>{
        switch(err.data.status){
            // 401未登录,要求身份验证
            case 401:
                // this.$message.error(config.data.message)
                this.$router.replace('/login')
                break
                // token过期，需要重新登录
            case 403:
                if(err.data.message !== null){
                    Vue.prototype.$message.error(err.data.message)
                }
                sessionStorage.removeItem('token')
                Store.commit('delToken')
                setTimeout(() =>{
                    this.$router.replace('/login')
                },1000)
                break
                case 404:
                    Vue.prototype.$message.error('Sorry Not Find')
                    break
                default:
                    Vue.prototype.$message.error('其他错误')
        }
        return err
    })
    // 发送正真的网络请求
    return instance(config)
}