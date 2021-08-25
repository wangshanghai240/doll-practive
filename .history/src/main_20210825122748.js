import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入store
import store from './store'
// 事件总线
Vue.prototype.$bus = new Vue()
// 导入elementui
import './plugins/elementui'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')