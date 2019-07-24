module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'  // $代表精确匹配
        }
      }
    },
    // 选项...
    devServer: {
      
      open:true,
      proxy: {
        '/api': { // 匹配所有以 '/api'开头的请求路径
          target: 'http://m.you.163.com', // 代理目标的基础路径
          changeOrigin: true, // 支持跨域
          pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
            '^/api': ''
          }
        },
        '/local': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
            '^/local': ''
          }
        }
    }
  }
}