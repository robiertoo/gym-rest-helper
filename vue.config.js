const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
  transpileDependencies: true
})
