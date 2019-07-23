// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GoodList from './GoodList/GoodList'
import Header from './components/Header'
import './assets/icon/iconfont.css'
import './assets/css/common.css'


Vue.config.productionTip = false
Vue.component("goodlist",GoodList)
Vue.component("Header",Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
