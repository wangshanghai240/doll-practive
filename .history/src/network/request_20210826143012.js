import axios from 'axios'
import Store from 'vuex'
import {
    Message,
    MessageBox
} from 'element-ui'
// import Vue from 'vue'
// import store from 'store/index'
// 封装axios
export function request(config) {
    let instance = axios.create({
        baseURL: 'http://192.168.100.72:8769/outsource',
        // baseURL:'/api',
        timeout: 1000 * 6,
        // headers:{
        //     'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
        // }
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
    instance.interceptors.response.use(response => {
        switch (response.data.code) {
            // 401后端表示登录信息过期
            case 401:
                // this.$message.error(config.data.message)
                MessageBox.confirm('用户信息已过期，请重新登录', '提示', {
                    confirmButtonText: '登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // 点击登录跳转到登录页面
                    this.$router.replace('/login')
                    // 同时删除state中的token
                    Store.dispatch('deltoken')
                })

                break
                // token过期，需要重新登录
            case 403:
                if (response.data.message !== null) {
                    Message({
                        message: response.data.message
                    })
                }
                // 移除token
                sessionStorage.removeItem('token')
                // 更新状态
                Store.commit('delToken')
                setTimeout(() => {
                    this.$router.replace('/login')
                }, 1000)
                break
            case 404:
                Message({
                    message: 'Sorry Not Find!'
                })
                break
            default:
                Message({
                    message: '其他错误'
                })
        }
    }, err => {

        return err
    })
    // 发送正真的网络请求
    return instance(config)
}