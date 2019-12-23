import Vue from 'vue'
import App from './App.vue'

//导入路由模块
import router from './router/index'

//导入element组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)



//这是日志的详细
Vue.config.productionTip = false


new Vue({
  router,//挂载路由
  render: h => h(App)
}).$mount('#app')
