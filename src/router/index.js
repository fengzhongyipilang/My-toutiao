<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
// 第一步：安装： npm i vue-router
// 第二步：引入：src/router/index.js 和 import VueRouter from 'vue-router'
// 第三步：使用：import Vue from 'vue' 和  Vue.use(VueRouter )
Vue.use(VueRouter)
// 第四步：实例化
const router = new VueRouter({
  routes: [
    // 路由规则 写一个功能追加一个
  ]
})
// 第五步：导出实例
export default router
// 第六步：在main.js挂载导出的实例
=======
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
>>>>>>> da7a2ece9351dac8c818cf5b6d31e02a6818ac03
