import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI样式
import './style/index.less' // 引入初始化样式
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册
createApp(App).use(router).mount('#app')
