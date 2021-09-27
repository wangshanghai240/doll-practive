// 将时间戳转化为年月日
export function formatTime(){
    // 获取时间戳
    let timedata = Date.now(),
        date = new Date(timedata)
        // Y = date.getFullYear(),
        // month是0开始，故+1
        // M = date.getMonth() + 1,
        // D = date.getDate()
        // 转化为字符串
        return date.toJSON().slice(0,10)
}