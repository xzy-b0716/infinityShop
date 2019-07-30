import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import Bottom from './components/Bottom'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Header from './components/Header'
import fastClick from 'fastclick'



fastClick.attach(document.body)
Vue.component("Header",Header)
Vue.config.productionTip = false;
Vue.component("bottom",Bottom);
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);


fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


