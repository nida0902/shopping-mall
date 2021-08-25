import Vue from 'vue'
import App from './App.vue'
// normalize.css
import 'normalize.css'
// router
import router from '@/router'
// element ui
import element from './element'
import 'element-ui/lib/theme-chalk/index.css'
// mock
if (process.env.NODE_ENV === 'development') {
  require('./mock/mock')
}

Vue.config.productionTip = false
Vue.use(element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
