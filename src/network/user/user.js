import { request } from '../request'
// 获取用户列表
export function getuserinfo(){
    return request({
        url:'/user/info',
        method:'get'
    })
}