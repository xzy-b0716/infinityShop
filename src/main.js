import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import Bottom from './components/Bottom'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Header from './components/Header'
import fastClick from 'fastclick'
import Recommend from './components/Recommend'
import {MessageBox,Toast} from 'mint-ui'


fastClick.attach(document.body)
Vue.component("Header",Header)
Vue.config.productionTip = false
Vue.component("bottom",Bottom)
Vue.component("recommend",Recommend)
Vue.use(Mint)

Vue.prototype.$messagebox=MessageBox;
Vue.prototype.$toast=Toast;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
  
})




