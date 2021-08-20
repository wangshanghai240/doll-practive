let path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    // 配置路径别名
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('src'))
            .set('components',resolve('src/components'))
            .set('router',resolve('src/router'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))
            .set('store',resolve('src/store'))
    }
}