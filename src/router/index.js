
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Search from '@/search/Search'
import Collect from '@/collect/Collect'
import My from '../my/My'
import Describe from '../components/Describe'
import GoodList from '../GoodList/GoodList'
import Pay from '../GoodList/Pay'
import Orders from '../my/Orders/Orders'
import Payment from '../my/Orders/Payment'
import Deliver from '../my/Orders/Deliver'
import Receive from '../my/Orders/Receive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/cardlist',
      name:'GoodList',
      component:GoodList
    },
    { 
      path:'/search',
      name:'Search',
      component:Search

    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/collect',
      name:'Collect',
      component:Collect
    },
    {
      path:'/describe',
      name:'Describe',
      component:Describe
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/deliver',
      name: 'deliver',
      component: Deliver
    },
    {
      path: '/receive',
      name: 'receive',
      component: Receive
    },

  ]
})

