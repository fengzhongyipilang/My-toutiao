import Vue from 'vue'
import App from './App.vue'
// 导入elementui库
import elementui from 'element-ui'// 包前面不需要加./

// 导入router路由模块 默认加载文件下的index.js文件（index.js索引文件，默认会访问 ）
import router from './router'

// 这是日志的详细

// 导入element组件
import 'element-ui/lib/theme-chalk/index.css'// 目录加./
//  vue-cli提供的一个绝对路径别名  src绝对路径
// import router from '@/router'

// 简单配置axios
import axios from '@/api'
Vue.prototype.$http = axios

// 使用element-ui库
Vue.use(elementui)

// 这是日志的详细

Vue.config.productionTip = false

new Vue({

  // 【index.js】第六步：在main.js挂载导出router实例
  router, // 挂载router

  render: h => h(App)
}).$mount('#app')
