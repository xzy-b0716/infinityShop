
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Search from '@/search/Search'
import Collect from '@/collect/Collect'
import My from '../my/My'
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
    }
    

  ],
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    }


})

