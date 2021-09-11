import axios from 'axios'
import Store from 'store'
import { MessageBox } from 'element-ui'
// 封装axios
export function request(config) {
    let instance = axios.create({
        baseURL: 'http://192.168.100.72:8769/outsource',
        // baseURL:'/api',
        timeout: 1000 * 6
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
                MessageBox.confirm('用户信息已过期，请重新登录', '提示', {
                    // 点击confirmButtonText,执行成功的回调
                    confirmButtonText: '确定',
                    // 点击cancelButtonText,执行失败的回调
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() =>{
                    // token过期要删除vuex中的token
                    Store.dispatch('deltoken')
                    // 然后跳转到登录页面
                    window.location.href='/login'
                })
            break
        }
        if(response.data.status === 500){
            this.$message.error(response.data.error)
        }
        // 拦截之后需要return 响应
        return response
    }, err => {
        this.$message({
            type:'info',
            message:err
        })
    })
    // 发送正真的网络请求
    return instance(config)
}