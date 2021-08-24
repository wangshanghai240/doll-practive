import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入store
import store from './store'
// 事件总线
Vue.prototype.$bus = new Vue()

// 导入element-ui及其样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
