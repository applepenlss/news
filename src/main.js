import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 将路由和实例连接在一起
  router,
  render: h => h(App)
}).$mount('#app')
