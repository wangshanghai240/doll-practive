import VueRouter from 'vue-router'
import Vue from 'vue'
// import store from '../store'

// 安装插件vue-router
Vue.use(VueRouter)

// 路由懒加载
const Login = () => import('views/login/Login')
const Dashboard = () => import('views/admin/dashboard/Dashboard')
const Admin = () => import('views/admin/Admin')
// 路由列表(路径，组件映射关系)
let routes = [
    {
        // 将更目录下的重定向到/login,可以解决路径不显示问题
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/admin',
        component: Admin,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: '',
                redirect: 'dashboard'
            }   
        ]
    }

]

// 创建路由对象
const router = new VueRouter({
    routes,
    mode: 'history'
})
// 重复点击触发promise错误解决方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 全局导航守卫(登陆验证)
// router.beforeEach((to, from, next) =>{
    // 如果要请求的路径是admin
    // if(to.path == '/admin'){
        // 判断用户是否登录，有token说明登录了
        // if(sessionStorage.getItem('token')){
            // 就可以直接放行
        //     next()
        // }
        // 如果没有登录就重定向到登录页面
//         else{
//             next('/login')
//         }
//     }
//     else{
//         next()
//     }
// })
// router.beforeEach((to, from, next) =>{
    // 如何要跳转到登陆页面
    // if(to.path == '/login'){
        // 则直接放行
        // next()
    // }else{
        // 如果要进入其他页面，则需要验证是否有token，有说明登陆了
        // if(window.sessionStorage.getItem('token')){
            // next('/admin')
            // 没有token
        // }else{
            // 则重定向到登陆页面
//             next('/login')
//         }
//     }
// })
// 导出路由对象，暴露接口
export default router