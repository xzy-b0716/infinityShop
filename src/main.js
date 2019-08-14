/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-01 01:55:28
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-14 20:16:49
 */
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
import {MessageBox,Toast,Actionsheet, DatetimePicker} from 'mint-ui'

Vue.prototype.$axios=axios
fastClick.attach(document.body)
Vue.component("Header",Header)
Vue.config.productionTip = false
Vue.component("bottom",Bottom)
Vue.component("recommend",Recommend)
Vue.use(Mint)
Vue.prototype.axios = axios

Vue.prototype.$messagebox=MessageBox;
Vue.prototype.$toast=Toast;
Vue.prototype.$actionsheet=Actionsheet;
Vue.prototype.$datetimepicker=DatetimePicker;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
  
})




