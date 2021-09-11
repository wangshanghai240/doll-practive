import {
    request
} from '../request'
// 导出excel
export function exportexcel(data) {
    return request({
        url: '/eshopOrMeetingGoods/upload/export',
        method: 'post',
        // 服务器响应类型为arraybuffer，否则导出的excel会乱码
        responseType: 'arraybuffer',
        data: {
            ...data
        }
    })
}
// 导入(upload)商品数据
export function uploaddata(source, source1) {
    return request({
        url: '/eshopOrMeetingGoods/upload/import',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data;charset=UTF-8',
        },
        // 请求体参数
        data: source,
        // url后面的参数
        params: {
            ...source1
        }
    })
}