import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, FormModel, Input, Checkbox, Layout } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button).use(FormModel).use(Input).use(Checkbox).use(Layout)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
