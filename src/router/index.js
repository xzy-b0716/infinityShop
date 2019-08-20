/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-02 15:20:31
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-14 01:57:58
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/home/Home'
import Search from '@/Pages/search/Search'
import Collect from '@/Pages/collect/Collect'
import Similar from '@/Pages/collect/Similar'
import My from '../Pages/my/My'
import Details from '../Pages/my/Details'
import Changepwd from '../Pages/my/changepwd'

import Address from '../Pages/my/Address'
import Help from '@/Pages/my/Help'
import Settings from '@/Pages/my/Settings'
import AddAddress from '@/Pages/my/AddAddress'
import ChangeAddress from '@/Pages/my/ChangeAddress'
import Reg from '@/Pages/my/Log/Reg'
import TelLogin from '@/Pages/my/Log/TelLogIn'
import EmailLogin from '@/Pages/my/Log/EmailLogIn'
import Describe from '../components/Describe'
import GoodList from '@/Pages/GoodList/GoodList'
import Pay from '@/Pages/GoodList/Pay'
import Orders from '@/Pages/my/Orders/Orders'
import SecKill from '@/Pages/home/SecKill'
import SecDescribe from '../components/SecDescribe'
import Comment from '@/Pages/home/Comment'
import Classify from '../components/Classify'
import searchResult from '@/Pages/search/searchResult'
import Assortment from '@/Pages/search/Assortment'

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
      component:Search,
      children:[
        {
          path:'/',
          component:Assortment,
          name:"assortment"
        },
        {
          path:'/searchresult',
          component:searchResult,
      
        }
      ]

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
      path:'/changepwd',
      name:'Changepwd',
      component:Changepwd
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
      path:'/similar',
      name:'Similar',
      component:Similar
    },
    {
      path:'/describe/:productId',
      name:'Describe',
      component:Describe,

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
      path:'/secdescribe/:productId',
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
    },
    {
      path:'/tellogin',
      name:'TelLogin',
      component:TelLogin
    },
    {
      path:'/emaillogin',
      name:'EmailLogin',
      component:EmailLogin
    },
    // {
    //   path:'/logout',
    //   name:'LogOut',
    //   component:LogOut
    // }

      {
        path:'/comment',
        name:'comment',
        component:Comment
      },
      {
        path:'/classify',
        name:'Classify',
        component:Classify
      }

    

  ],
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    },
    mode:'history'
})

