const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    hot: true,//自动保存
  },
  proxyTable: {
    '/chatgpt/': {
      target: 'http://localhost:9051/',
      changeOrigin: true,
      pathRewrire: {
        '^/chatgpt': ''
      }
    }
  }
})
