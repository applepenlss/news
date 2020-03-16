// 所以的路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
// 告诉vue使用vue-router插件
Vue.use(VueRouter)

// 创建路由实例
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})

// 导出路由
export default router
