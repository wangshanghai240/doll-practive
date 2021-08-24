import VueRouter from 'vue-router'
import Vue from 'vue'
import store from '../store'

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
const ReqList = () =>import('views/admin/fabric/childComp/ReqList')
const ShopList = () =>import('views/admin/fabric/childComp/ShopList')

// 路由列表(路径，组件映射关系)
let routes = [{
        // 将更目录下的重定向到/login,可以解决路径不显示问题
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name:'login',
        component: Login
    },
    {
        path: '/admin',
        component: Admin,
        children: [{
                path: 'dashboard',
                component: Dashboard,
                meta:{
                    requireAuth:true
                }
            },
            {
                path: '',
                redirect: 'dashboard'
            },
            {
                path: 'fabric',
                component: Fabric,
                name:'面料',
                children:[
                    {
                        path:'reqlist',
                        component:ReqList,
                        name:'需求列表',
                        meta:{
                            breadcrumb:[
                                {
                                    path:'/reqlist',
                                    name:'需求列表'
                                }
                            ]
                        }
                    },
                    {
                        path:'shoplist',
                        component:ShopList,
                        name:'采购列表',
                        meta:{
                            breadcrumb:[
                                {
                                    path:'/shoplist',
                                    name:'采购列表'
                                }
                            ]
                        }
                    }
                ],
                meta: {
                    breadcrumb: [{
                        path: '/fabric',
                        name: '面料'
                    }]
                }
            },
            {
                path: 'ordermeeting',
                component: OrderMeeting,
                name:'订货会',
                meta: {
                    breadcrumb: [{
                        path: '/ordermeeting',
                        name: '订货会'
                    }]
                }
            },
            {
                path: 'ordershop',
                component: OrderShop,
                name:'商品列表',
                meta: {
                    breadcrumb: [{
                        path: '/ordershop',
                        name: '商品列表'
                    }]
                }
            },
            {
                path: 'user',
                component: User,
                name:'用户列表',
                meta: {
                    breadcrumb: [{
                        path: '/user',
                        name: '用户列表'
                    }]
                }
            },
            {
                path: 'syslog',
                component: SysLog,
                name:'系统日志',
                meta: {
                    breadcrumb: [{
                        path: '/syslog',
                        name: '系统日志'
                    }]
                }
            }
        ],
        meta:{
            requireAuth:true
        },
        beforeEnter:(to,from,next) =>{
            if(to.matched.some((r)=>{r.meta.requireAuth})){
                if(window.sessionStorage.getItem('token')){
                    next()
                }
                else{
                    next({
                        name:'login',
                        redirect:to.fullPath
                    })
                }
            }
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
router.beforeEach((to, from, next) => {
    console.log(to.matched)
    if(to.matched.some((route) =>{route.meta.requireAuth})){
        if(store.state.token){
            next()
        }
        else{
            next(
                {
                    name:'login',
                    redirect:to.fullPath
                }
            )
        }
    }
    else{
        next()
    }
})
// 导出路由对象，暴露接口
export default router