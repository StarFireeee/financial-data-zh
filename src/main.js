import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, FormModel } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button, FormModel)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
