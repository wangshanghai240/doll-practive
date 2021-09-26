// 函数防抖和节流
// 函数防抖
export function debounce(func,wait,immediaite){
    var time = null
    return function(){
        var _self = this,
            arg = arguments
        if(time){
            clearTimeout(time)
        }
        if(immediaite){
            var exec = !time
            if(exec){
                func.apply(_self,arg)
            }
            time = setTimeout(()=>{
                time = null
            },wait)
        }
        else{
            time = setTimeout(function(){
                func.apply(this,arg)
            },wait)
        }
    }
}
// 函数节流
export function throttle(func,delay){
    let t = null,
        _self = this,
        argu = arguments
    return function(){
        if(!t){
            let exec = !t
            if(exec){
                t = setTimeout(function(){
                    func.apply(_self,argu)
                    t = null
                },delay)
            }
        }
    }
}