import { request } from '../request'
// 获取所有订单列表
export function getOrderMeeting(){
    return request({
        url:'/orderMeeting/list',
        method:'get'
    })
}
// 新增，查询，删除订货
export function ordermeeting(){
    return request({
        url:'/orderMeeting'
    })
}
// 修改订单
export function updateOrder(){
    request({
        url:'/orderMeeting/update'
    })
}