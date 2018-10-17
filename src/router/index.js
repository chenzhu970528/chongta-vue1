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

import update from '../components/user/update.vue'
import aplyme from '../components/user/aplyme.vue'
import changepwd from '../components/user/changepwd.vue'
import comme from '../components/user/comme.vue'
import myado from '../components/user/myado.vue'
import myaply from '../components/user/myaply.vue'
import mycom from '../components/user/mycom.vue'
import mylost from '../components/user/mylost.vue'
import mymatch from '../components/user/mymatch.vue'
import sys from '../components/user/sys.vue'
import myhomls from '../components/user/myhomls.vue'

import Homeless from '../components/homeless/Homeless.vue'
import publish from '../components/homeless/publish.vue'

import detail from '../components/homeless/detail.vue'
import wantadopt from '../components/homeless/wantadopt'
import people from '../components/homeless/people'

import Communication from '../components/forum/Communication.vue'
// import Page from '../components/forum/Page.vue'
// import Share from '../components/forum/Share.vue'

import Lists from '../components/forum/Lists.vue'
import Details from '../components/forum/Details.vue'
// import Newest from '../components/forum/Newest.vue'


import Share from '../components/forum/Share.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
// import Matchmaking from '../components/matchmaking/Matchmaking.vue'
Vue.use(Router);


export default new Router({
  mode:'history', //默认时hash模式（#）
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    //领养中心模块
    {
      path: '/adoption',
      name: 'Adoption',
      component: Adoption,
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
      path: '/adoption/details/:adoId',
      name:'AdoDetails',
      component: AdoDetails,
    },
    {
      path: '/adoption/issue/:userId',
      name:'AdoIssue',
      component: AdoIssue,
    },
    {
      path: '/userDetails/:userId',
      name:'UserDetails',
      component: UserDetails,
    },
    {
      path: '/homeless',
      name: 'Homeless',
      component: Homeless,
    },
    {
      path: '/homeless/publish',
      name: 'publish',
      component: publish,
    },
    // 论坛

    {path: '/forum',
      name: 'Communication',
      component: Communication,
    },

    {path: '/forum/lists',
      name: 'Lists',
      component: Lists,
    },
    {path: '/forum/details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/homeless/wantadopt',
      name: 'wantadopt',
      component:wantadopt,
    },
    {
      path: '/homeless/detail',
      name: 'detail',
      component: detail,
    },
    {
      path: '/homeless/people',
      name: 'people',
      component: people,
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

        {path:'aplyme',component:aplyme},
        {path:'update',component:update},
        {path:'mycom',component:mycom},
        {path:'changepwd',component:changepwd},
        {path:'comme',component:comme},
        {path:'myado',component:myado},
        {path:'myaply',component:myaply},
        {path:'mymatch',component:mymatch},
        {path:'mylost',component:mylost},
        {path:'sys',component:sys},
        {path:'myhomls',component:myhomls},
      ]
    },
    {
      path: '/userDetails/:userId',
      name:'UserDetails',
      component: UserDetails,
    },


  ]
})
