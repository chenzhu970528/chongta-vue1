import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '../components/Home.vue'

import Adoption from '../components/adoption/Adoption.vue'
import matchmain from '../components/matchmaking/matchmain'
import matchDel from '../components/matchmaking/matchDel.vue'
import  mpublish from '../components/matchmaking/mpublish.vue'

import AdoDetails from '../components/adoption/AdoptDetails.vue'
import AdoIssue from '../components/adoption/AdoptIssue.vue'
import UserDetails from '../components/user/UserDetails.vue'

import Homeless from '../components/homeless/Homeless.vue'
import publish from '../components/homeless/publish.vue'
import detail from '../components/homeless/detail.vue'
import wantadopt from '../components/homeless/wantadopt'
import people from '../components/homeless/people'

import Communication from '../components/forum/Communication.vue'
import Lists from '../components/forum/Lists.vue'
import Details from '../components/forum/Details.vue'
import Newest from '../components/forum/Newest.vue'

import Matchmaking from '../components/matchmaking/Matchmaking.vue'

// import Matchmaking from '../components/matchmaking/Matchmaking.vue'
import User from '../components/user/User.vue'
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
      component: Adoption,
    },
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
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
    }

  ]
})
