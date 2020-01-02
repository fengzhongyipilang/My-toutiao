// main.js入口文件职责：1 做全局范围内的依赖和配置
//                     2 创建一个vue根实例

// 做依赖-----------------------------------------------------------------
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

// 注册全局组件
import MyBread from '@/components/my-bread'

import myPlugin from '@/plugin'
// 做依赖-----------------------------------------------------------------

Vue.component('my-bread', MyBread)
Vue.use(myPlugin)

Vue.prototype.$http = axios

// 使用element-ui库
Vue.use(elementui)

// 这是日志的详细与否 生产环境（上线） 开发环境（写代码环节）
Vue.config.productionTip = false//是否开启生产环境提示

// 根实例配置插件-----------------------------------------------------------------

new Vue({

  // 【index.js】第六步：在main.js挂载导出router实例
  router, // 挂载router

  render: h => h(App)
}).$mount('#app')
