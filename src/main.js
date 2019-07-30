import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import Bottom from './components/Bottom'
import 'mint-ui/lib/style.css'
import Header from './components/Header'
import fastClick from 'fastclick'
import { Script } from 'vm';
// import touch from  './assets/js/touch.js'
import Recommend from './components/Recommend'


// Vue.use(touch)
fastClick.attach(document.body)
Vue.component("Header",Header)
Vue.config.productionTip = false;
Vue.component("bottom",Bottom);
Vue.component("recommend",Recommend)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
  
})




