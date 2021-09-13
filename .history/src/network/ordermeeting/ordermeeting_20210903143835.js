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
export function getordermeeting(datas,body){
    return request({
        // 参数拼接到url
        url:'/orderMeeting/' + datas.page + '/' + datas.limit,
        method:'post',
        data:{
            ...body
        }
    })
}
// 新增订货
export function addordermeeting(name,start,end){
    return request({
        url:'/orderMeeting',
        method:'post',
        data:{
            name,
            start,
            end
        }
    })
}
// 修改订单
export function updateOrder(data){
    return request({
        url:'/orderMeeting/update',
        method:'put',
        data:{
            ...data
        }
    })
}