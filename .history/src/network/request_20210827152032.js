import axios from 'axios'
import Store from 'vuex'
import {
    MessageBox
} from 'element-ui'
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
        console.log(err)
    })
    // 拦截响应
    instance.interceptors.response.use(response => {
        switch (response.data.code) {
            // 401后端表示登录信息过期
            case 401:
                // confirm返回的是一个promise，便于后续处理
                this.$confirm('用户信息已过期，请重新登录', '提示', {
                    // 点击confirmButtonText,执行成功的回调
                    confirmButtonText: '确定',
                    // 点击cancelButtonText,执行失败的回调
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        // 信息提示类型
                        type: 'success',
                        // 信息内容
                        message: '推出登录成功',
                        // 是否居中
                        center: true
                    })
                // }).catch(() => {
                //     // 失败的回调：提示信息
                //     this.$message({
                //         type: 'info',
                //         message: '已取消',
                //         center: true
                //     })
                })
                Store.dispatch('deltoken')
                this.$router.replace('/login')
                break
            case 500:
                
        }
        // 拦截之后需要return 响应
        return response
    }, err => {
        return err
    })
    // 发送正真的网络请求
    return instance(config)
}