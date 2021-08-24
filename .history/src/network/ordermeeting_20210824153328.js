import { request } from './request'
export function getOrderMeeting(){
    return request({
        url:'/orderMeeting/list',
        method:'get'
    })
}