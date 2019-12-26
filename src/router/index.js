import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import home from '../views/home'
import welcome from '../views/welcome/index'
import notFound from '../views/404'
import store from '../store'
// 第一步：安装： npm i vue-router
// 第二步：引入：src/router/index.js 和 import VueRouter from 'vue-router'
// 第三步：使用：import Vue from 'vue' 和  Vue.use(VueRouter )
Vue.use(VueRouter)
// 第四步：实例化
const router = new VueRouter({
  routes: [
    // 路由规则 写一个功能追加一个
    // 登录

    { path: '/login', component: Login },
    { path: '/',
      component: home,
      children: [
        { path: '/', component: welcome }
      ]
    },
    { path: '*', component: notFound }// 路由规则应该写在所有规则的下面。
  ]
})
// 前置导航守卫
router.beforeEach((to, from, next) => {
  // to 去哪里
  // from 来自哪里
  // next 放行|指定跳转路由
  // - 判断如果是除去登录页面外其他的路由且当前没有登录，拦截到登录。
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  // - 其他情况都是放行。
  next()
})
// 第五步：导出实例
export default router
// 第六步：在main.js挂载导出的实例
// 导入路由模块
