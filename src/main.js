import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, FormModel, Input, Checkbox, Layout, Menu, Icon } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button).use(FormModel).use(Input).use(Checkbox).use(Layout).use(Menu).use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
