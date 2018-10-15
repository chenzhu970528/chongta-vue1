import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Adoption from '../components/adoption/Adoption.vue'
import AdoDetails from '../components/adoption/AdoptDetails.vue'
import AdoIssue from '../components/adoption/AdoptIssue.vue'
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
    {
      path: '/userDetails/:userId',
      name:'UserDetails',
      component: UserDetails,
    },

    //流浪精灵模块
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
