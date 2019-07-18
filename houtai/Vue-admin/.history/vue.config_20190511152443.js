const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const webpack = require('webpack');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // outputDir: 'dist',
    // pages:{ type:Object,Default:undfind } 
    devServer: {
        port: 8888, // 端口号
        host:'0.0.0.0',// 通过网址可以直接访问
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api/*':{
                "target": "http://10.3.140.35:19011", //目标服务器
                "changeOrigin": true,
                "pathRewrite": {
                    "^/api" : "/"
                },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
},
chainWebpack: (config)=>{
    //修改文件引入自定义路径
    config.resolve.alias
        .set('@', resolve('http://10.3.140.35'))
        // .set('style', resolve('src/assets/style'))
}


}
