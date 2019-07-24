import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import Bottom from './components/Bottom'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'



Vue.config.productionTip = false;
Vue.component("bottom",Bottom);
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




