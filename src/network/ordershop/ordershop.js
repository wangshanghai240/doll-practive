import {request} from '../request'

// 导出excel
export function exportexcel(data){
    return request({
        url:'/eshopOrMeetingGoods/upload/export',
        method:'post',
        // 服务器响应类型为arraybuffer，否则导出的excel会乱码
        responseType:'arraybuffer',
        data:{
            ...data
        }
    })
}