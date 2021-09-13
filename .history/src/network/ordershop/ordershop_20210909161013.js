import {request} from '../request'

// 导出excel
export function exportexcel(data){
    return request({
        url:'/eshopOrMeetingGoods/upload/export',
        method:'post',
        data:{
            ...data
        }
    })
}