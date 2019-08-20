/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-01 01:55:28
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-13 16:25:59
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
import axios from "axios"
import apiConfig from '../config/api.config.js'
import Vuex from 'vuex'



axios.defaults.baseURL=apiConfig.baseURL
Vue.prototype.$axios=axios
fastClick.attach(document.body)
Vue.component("Header",Header)
Vue.config.productionTip = false
Vue.component("bottom",Bottom)
Vue.component("recommend",Recommend)
Vue.use(Mint)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userId: 1
  },
  mutations: {
    increment (state,n) {
     return state.userId=n
    }
  }
})

Vue.prototype.$messagebox=MessageBox;
Vue.prototype.$toast=Toast;
Vue.prototype.$actionsheet=Actionsheet;
Vue.prototype.$datetimepicker=DatetimePicker;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
  
})




