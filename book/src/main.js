import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./App.scss"
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false


Vue.use(VueLazyload, {

  loading: 'http://hbimg.b0.upaiyun.com/a39bac47afb919b7b92f21f80218bae9e128650fb396-o1BXWL_fw658',
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
