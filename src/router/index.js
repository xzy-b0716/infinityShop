
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Search from '@/search/Search'
import Collect from '@/collect/Collect'

import My from '../my/My'
import Orders from '../my/Orders'
import Details from '../my/Details'
import Payment from '../my/Payment'
import Address from '../my/Address'
import Help from '../my/Help'
import Settings from '../my/Settings'
import AddAddress from '../my/AddAddress'
import ChangeAddress from '../my/ChangeAddress'

import Describe from '../components/Describe'
import GoodList from '../GoodList/GoodList'
import Pay from '../GoodList/Pay'

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
      path:'/payment',
      name:'Payment',
      component:Payment
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
  mode:'history'
})

