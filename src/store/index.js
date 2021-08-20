import Vuex from 'vuex'
import Vue from 'vue'

// 安装该插件
Vue.use(Vuex)

// 创建vuex对象
let store = new Vuex.Store({
    // 判断是否有token
    state: {
        token:''
    },
    mutations: {
        // 设置传递过来的token
        setToken(state, payload) {
            state.token = payload.token
        },
        // 删除token
        // delToken(state) {
        //     state.token = ''
        //     sessionStorage.removeItem('logintoken')
        // }
    }
})
// 导出vuex对象，暴露接口
export default store