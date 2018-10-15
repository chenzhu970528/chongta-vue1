import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Adoption from '../components/adoption/Adoption.vue'
import  matchmain from '../components/matchmaking/matchmain'
import matchDel from '../components/matchmaking/matchDel.vue'

import AdoDetails from '../components/adoption/AdoptDetails.vue'
import UserDetails from '../components/user/UserDetails.vue'

import Homeless from '../components/homeless/Homeless.vue'
import Communication from '../components/forum/Communication.vue'
import Matchmaking from '../components/matchmaking/Matchmaking.vue'
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
    {
      path: '/adoption',
      name: 'Adoption',
      component: Adoption,
    },
    {
      path : '/matchmaking',
      name : 'matchmain',
      component : matchmain,
      // children:[{
      //   path:'/matchmaking/matchDel',
      //   name:'matchDel',
      //   component : matchDel,
      // }]
    },{
      path:'/matchmaking/matchDel',
      name:'matchDel',
      component : matchDel,
    },
    {
      path: '/adoption/details/:adoId',
      name:'AdoDetails',
      component: AdoDetails,
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
      path: '/matchmaking',
      name: 'Matchmaking',
      component: Matchmaking,
    },
    {
      path: '/forum',
      name: 'Communication',
      component: Communication,
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
    }

  ]
})
