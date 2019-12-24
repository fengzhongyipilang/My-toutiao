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