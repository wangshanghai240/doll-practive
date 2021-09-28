import VueRouter from 'vue-router'
import Vue from 'vue'
// import store from '../store'

// 安装插件vue-router
Vue.use(VueRouter)

// 路由懒加载
const Login = () => import('views/login/Login')
const Dashboard = () => import('views/admin/dashboard/Dashboard')
const Admin = () => import('views/admin/Admin')
const Fabric = () => import('views/admin/fabric/Fabric')
const OrderMeeting = () => import('views/admin/ordermeeting/OrderMeeting')
const OrderShop = () => import('views/admin/ordershop/OrderShop')
const User = () => import('views/admin/user/User')
const SysLog = () => import('views/admin/syslog/SysLog')
const ReqList = () => import('views/admin/fabric/childComp/ReqList')
const ShopList = () => import('views/admin/fabric/childComp/ShopList')
const NotFind =() => import('components/common/404')

// 路由列表(路径，组件映射关系)
let routes = [
    {
        // 将更目录下的重定向到/login,可以解决路径不显示问题
        path: '/',
        redirect: '/login',
        hidden:true
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        hidden:true
    },
    {
        path: '/admin',
        component: Admin,
        name:'首页',
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name:'首页',
                meta:{icon:'el-icon-s-home'}
            },
            {
                path: '',
                redirect: 'dashboard',
                name:'首页',
                meta:{
                    hidden:true,
                    icon:'el-icon-s-home'
                }
            },
            {
                path: 'fabric',
                component: Fabric,
                name: '面料',
                meta:{icon:'el-icon-eleme'},
                children: [{
                        path: 'reqlist',
                        component: ReqList,
                        name: '需求列表',
                        meta:{icon:'el-icon-tickets'}
                    },
                    {
                        path: 'shoplist',
                        component: ShopList,
                        name: '采购列表',
                        meta:{icon:'el-icon-printer'}
                    }
                ]
            },
            {
                path: 'ordermeeting',
                component: OrderMeeting,
                name: '订货会',
                meta:{
                    icon:'el-icon-s-goods'
                }
            },
            {
                path: 'ordershop',
                component: OrderShop,
                name: '商品列表',
                meta:{icon:'el-icon-set-up'}
            },
            {
                path: 'user',
                component: User,
                name: '用户列表',
                meta:{icon:'el-icon-discount'}
            },
            {
                path: 'syslog',
                component: SysLog,
                name: '系统日志',
                meta:{icon:'el-icon-school'}
            }
        ],
        meta: {
            requireAuth: true
        },
        // 进入该路径需要验证，登录验证一般都是在全局路由使用导航守卫beforeEach()或者在路由列表中使用路由守卫beforeEnter
    },
    {
        path:'*',
        component:NotFind,
        name:'404',
        meta:{
            title:'404'
        }
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
// router.beforeEach((to, from, next) => {
//     if(to.matched.some((r)=>{r.meta.requireAuth})){
//         if(window.sessionStorage.getItem()){
//             next()
//         }
//         else{
//             next({
//                 path:'/login'
//             })
//         }
//     }
//     else{
//         next()
//     }
// })
// 登录验证
// router.beforeEach((to, from, next) => {
    // to:将要达到的路径
    // from:离开的路径
    // 如果访问/login直接放行
    // console.log(to.matched)
    // if (to.path == '/login') return next()
    // 如果sessionStorage没有token，则重定向到登录页
//     if (!sessionStorage.getItem('token')) return next('/login')
//     next()
// })
// 导出路由对象，暴露接口
export default router