import { request } from '../request'
// 获取所有订单列表
export function getAllOrderMeeting(){
    return request({
        url:'/orderMeeting/list',
        method:'get'
    })
}
// 删除订货
export function deletordermeeting(){
    return request({
        url:'/orderMeeting',
        method:'delet'
    })
}
// 查询订单
export function getordermeeting(){
    return request({
        url:'/orderMeeting',
        method:'post'
    })
}
// 新增订货
export function addordermeeting(){
    return request({
        url:'/orderMeeting',
        method:'post'
    })
}
// 修改订单
export function updateOrder(){
    request({
        url:'/orderMeeting/update',
        method:'post'
    })
}