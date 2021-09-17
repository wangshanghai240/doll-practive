// 深克隆
export function deepClone(origin,target){
    let tar = target || {},
        arrType = Object.prototype.toString
    // 遍历源对象属性，用Object.keys()也可以
    for(let key in origin){
        // 判断是不是实例上的属性而不是prototype上的属性
        if(origin.hasOwnProperty(key)){
            // 进一步判断是什么数据类型，下面是引用数据类型
            if(typeof origin[key] === 'object' && origin[key] !== null){
                // 若是对象就给一个空对象，是数组就给一个空数组即可
                tar[key] = arrType.call(origin[key]) === '[object Array]' ? [] : {}
                // 然后递归一遍
                arguments.callee(orgin[key],target[key])
            }
            // 说明是基本数据类型可直接赋值
            else{
                tar[key] = origin[key]
            }
        }
    }
    // 最后返回目标对象
    return tar
}