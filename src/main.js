import Vue from 'vue'
import "./vendor/mint-ui-config.js"
import App from './App.vue'
import store from './store/'
import router from './router'
import './permission' //判断是不是有token

console.log(store)
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
