// 导入路由模块
import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '../views/login/index'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则配置
  routes: [
    // 登录
    { path: '/login', component: Login }
  ]
})
export default router
