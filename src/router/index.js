import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '../components/Search'
import Collect from '../components/collect'
import CardList from '../components/CardList'
import My from '../components/My'
import Describe from '../components/Describe'


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
      name:'CardList',
      component:CardList
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
    }
    

  ]
})
