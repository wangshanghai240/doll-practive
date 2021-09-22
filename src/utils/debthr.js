// 函数防抖和节流
// 函数防抖
export function debounce(func,wait,immediaite){
    var time = null
    return function(){
        var _self = this,
            arg = arguments
        if(t){
            clearTimeout(t)
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