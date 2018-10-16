import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '../components/Home.vue'

import Adoption from '../components/adoption/Adoption.vue'
import AdoDetails from '../components/adoption/AdoptDetails.vue'
import AdoIssue from '../components/adoption/AdoptIssue.vue'

import matchmain from '../components/matchmaking/matchmain'
import matchDel from '../components/matchmaking/matchDel.vue'
import  mpublish from '../components/matchmaking/mpublish.vue'
// import Matchmaking from '../components/matchmaking/Matchmaking.vue'

import User from '../components/user/User.vue'
import UserDetails from '../components/user/UserDetails.vue'
import personal from '../components/user/personal.vue'
import forum from '../components/user/forum.vue'
import message from '../components/user/message.vue'
import mypublish from '../components/user/mypublish.vue'

import Homeless from '../components/homeless/Homeless.vue'
import publish from '../components/homeless/publish.vue'

import Communication from '../components/forum/Communication.vue'
import Page from '../components/forum/Page.vue'
import Share from '../components/forum/Share.vue'

Vue.use(Router)


export default new Router({
  mode:'history', //默认时hash模式（#）
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    //领养中心模块
    {
      path: '/adoption',
      name: 'Adoption',
      component: Adoption
    },
    {
      path: '/adoption/details/:adoId',
      name:'AdoDetails',
      component: AdoDetails,
    },
    {
      path: '/adoption/issue/:userId',
      name:'AdoIssue',
      component: AdoIssue,
    },
    // 婚介
    {
      path : '/matchmaking',
      name : 'matchmain',
      component : matchmain,
    },
    {
      path:'/matchmaking/matchDel',
      name:'matchDel',
      component : matchDel,
    },
    {
      path:'/matchmaking/mpublish',
      name:'mpublish',
      component:mpublish
    },

    //流浪精灵模块
    {
      path: '/homeless',
      name: 'Homeless',
      component: Homeless,
      // children:[{ path: '',
      //   name: 'publish',
      //   component: publish,
      // }]
    },
    {
      path: '/homeless/publish',
      name: 'publish',
      component: publish,
    },
    // 论坛
    {
      path: '/forum',
      name: 'Communication',
      component: Communication,
      children:[
        {path:'/diary',component:Share},
        {path:'/share',component:Share}
      ]
    },
    // 个人中心
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
      children:[
        {path:'personal',component:personal},
        {path:'forum',component:forum},
        {path:'message',component:message},
        {path:'mypublish',component:mypublish},
      ]
    },
    {
      path: '/userDetails/:userId',
      name:'UserDetails',
      component: UserDetails,
    },

  ]
})
