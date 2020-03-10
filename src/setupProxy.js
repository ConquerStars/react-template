// const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app)=> {
  app.use(
    createProxyMiddleware(
      '/api/v1', {
        // target: 'http://t.jc.daheng.co', // 测试环境
        target: 'https://szjc.ysjc.dh-data.com', // 生产环境
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    )
  )
}
