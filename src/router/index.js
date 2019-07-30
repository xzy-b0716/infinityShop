
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Search from '@/search/Search'
import Collect from '@/collect/Collect'

import My from '../my/My'
import Details from '../my/Details'
import Address from '../my/Address'
import Help from '../my/Help'
import Settings from '../my/Settings'
import AddAddress from '../my/AddAddress'
import ChangeAddress from '../my/ChangeAddress'

import Describe from '../components/Describe'
import GoodList from '../GoodList/GoodList'
import Pay from '../GoodList/Pay'
import Orders from '../my/Orders/Orders'
import Payments from '../my/Orders/Payments'
import Deliver from '../my/Orders/Deliver'
import Receive from '../my/Orders/Receive'
import SecKill from '../home/SecKill'
import SecDescribe from '../components/SecDescribe'

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
      component:My,
    },   
    {
      path:'/orders',
      name:'Orders',
      component:Orders
    },
    
    {
      path:'/details',
      name:'Details',
      component:Details
    },
    {
      path:'/payments',
      name:'Payments',
      component: Payments
    },
    {
      path:'/address',
      name:'Address',
      component:Address
    },
    {
      path:'/help',
      name:'Help',
      component:Help
    },
    {
      path:'/settings',
      name:'Settings',
      component:Settings
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
      path: '/deliver',
      name: 'deliver',
      component: Deliver
    },
    {
      path: '/receive',
      name: 'receive',
      component: Receive
    },{
      path:'/seckill',
      name:'seckill',
      component: SecKill
    },
    {
      path:'/secdescribe',
      name:'secdescribe',
      component:SecDescribe
    },
    {
      path:'/addaddress',
      name:'AddAddress',
      component:AddAddress
    },
    {
      path:'/changeaddress',
      name:'ChangeAddress',
      component:ChangeAddress
    }

  ],
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    },mode:'history'
})

