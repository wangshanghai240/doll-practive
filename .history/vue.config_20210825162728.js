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
            .set('assets',resolve('src/assets'))
    },
    devServer:{
        // 配置跨域
        proxy:{
            '/api':{
            // 目标地址即后端接口
            target:'http://192.168.100.72:8769/outsource',
            // 允许跨域
            changeOrigin:true,
            // 重写路径
            pathRewrite:{
                // 用/api代替target
                '^/api':'/'
            }
        }
        }
        
    }
}