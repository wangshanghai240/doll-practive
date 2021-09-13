// 将时间戳转化为YYYY-MM-DD
export function time(){
    let datetime = Date.now(),
        date = new Date(datetime),
        Y = date.getFullYear(),
        M = date.getMonth(),
        D = date.getTime()
        return Y + M + D
}