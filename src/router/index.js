import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/home/Home'
import Search from '@/Pages/search/Search'
import Collect from '@/Pages/collect/Collect'
import My from '../Pages/my/My'
import Details from '../Pages/my/Details'
import Address from '../Pages/my/Address'
import Help from '@/Pages/my/Help'
import Settings from '@/Pages/my/Settings'
import AddAddress from '@/Pages/my/AddAddress'
import ChangeAddress from '@/Pages/my/ChangeAddress'
import Reg from '@/Pages/my/Log/Reg'
import Describe from '../components/Describe'
import GoodList from '@/Pages/GoodList/GoodList'
import Pay from '@/Pages/GoodList/Pay'
import Orders from '@/Pages/my/Orders/Orders'
import SecKill from '@/Pages/home/SecKill'
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
    },
    {
      path:'/reg',
      name:'Reg',
      component:Reg
    }
    // {
    //   path:'/login',
    //   name:'LogIn',
    //   component:LogIn
    // },
    // {
    //   path:'/logout',
    //   name:'LogOut',
    //   component:LogOut
    // }


  ],
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    },mode:'history'
})

