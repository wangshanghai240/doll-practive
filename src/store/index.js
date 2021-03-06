import Vuex from 'vuex'
import Vue from 'vue'

// 安装该插件
Vue.use(Vuex)

// 创建vuex对象
let store = new Vuex.Store({
    // 判断是否有token
    state: {
        token: '',
        iscollapse:false
    },
    mutations: {
        // 设置传递过来的token放入state的token变量中
        setToken(state, payload) {
            state.token = payload.token
        },
        // 删除token
        delToken(state) {
            state.token = ''
            sessionStorage.removeItem('token')
        },
        changecoll(state,payload){
            state.iscollapse = payload.isco
            console.log(state.iscollapse)
        }
    },
    actions: {
        // 异步操作
        deltoken(content) {
            setTimeout(() => {
                content.commit('delToken')
            }, 100);
        },
        changecollapse(context,payload){
            setTimeout(()=>{
                context.commit('changecoll',payload)
            },100)
        }
    },
    getters:{
        
    }
})
// 导出vuex对象，暴露接口
export default store