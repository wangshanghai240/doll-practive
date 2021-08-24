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
<<<<<<< HEAD
const OrderMeeting = () =>import('views/admin/ordermeeting/OrderMeeting')
const OrderShop = () =>import('views/admin/ordershop/OrderShop')
const User = () =>import('views/admin/user/User')
const SysLog = () =>import('views/admin/syslog/SysLog')
=======
const OrderMeeting = () => import('views/admin/ordermeeting/OrderMeeting')
const OrderShop = () => import('views/admin/ordershop/OrderShop')
const User = () => import('views/admin/user/User')
const SysLog = () => import('views/admin/syslog/SysLog')
const ReqList = () =>import('views/admin/fabric/childComp/ReqList')
const ShopList = () =>import('views/admin/fabric/childComp/ShopList')
>>>>>>> f336db43572d57b468d242cd5634e7de41a5e10e

// 路由列表(路径，组件映射关系)
let routes = [{
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
        children: [{
                path: 'dashboard',
                component: Dashboard,
                // meta:{
                //     breadcrumb:[
                //         {
                //             path:'/dahsboard',
                //             name:'首页'
                //         }
                //     ]
                // }
            },
            {
                path: '',
                redirect: 'dashboard'
            },
            {
<<<<<<< HEAD
                path:'fabric',
                component:Fabric,
                meta:{
                    breadcrumb:[
                        {
                            path:'/fabric',
                            name:'面料'
                        }
                    ]
                }
            },
            {
                path:'ordermeeting',
                component:OrderMeeting,
                meta:{
                    breadcrumb:[
                        {
                            path:'/ordermeeting',
                            name:'订货会'
                        }
                    ]
                }
            },
            {
                path:'ordershop',
                component:OrderShop,
                meta:{
                    breadcrumb:[
                        {
                            path:'/ordershop',
                            name:'商品列表'
                        }
                    ]
                }
            },
            {
                path:'user',
                component:User,
                meta:{
                    breadcrumb:[
                        {
                            path:'/user',
                            name:'用户列表'
                        }
                    ]
                }
            },
            {
                path:'syslog',
                component:SysLog,
                meta:{
                    breadcrumb:[
                        {
                            path:'/syslog',
                            name:'系统日志'
                        }
                    ]
=======
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
>>>>>>> f336db43572d57b468d242cd5634e7de41a5e10e
                }
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
router.beforeEach((to, from, next) => {
<<<<<<< HEAD
    // 如何要跳转到登陆页面
=======
    // 如果要跳转到登陆页面
>>>>>>> f336db43572d57b468d242cd5634e7de41a5e10e
    if (to.path == '/login') {
        // 则直接放行
        next()
    } else {
        // 如果要进入其他页面，则需要验证是否有token，有说明登陆了
<<<<<<< HEAD
        if (to.path == '/admin') {
            if (window.sessionStorage.getItem('token')) {
                next()
                // 没有token
            } else {
                // 则重定向到登陆页面
                next('/login')
            }
        }
        else{
            next()
        }

=======
        if (sessionStorage.getItem('token') !== '') {
            next()
            // 没有token
        } else {
            // 则重定向到登陆页面
            this.$message.error('请先登录')
            next('/login')
        }
>>>>>>> f336db43572d57b468d242cd5634e7de41a5e10e
    }
})
// 导出路由对象，暴露接口
export default router