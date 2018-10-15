import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'

import Adoption from '../components/adoption/Adoption.vue'
import AdoDetails from '../components/adoption/AdoptDetails.vue'
import UserDetails from '../components/user/UserDetails.vue'

import Homeless from '../components/homeless/Homeless.vue'
import publish from '../components/homeless/publish.vue'
import Communication from '../components/forum/Communication.vue'
import Page from '../components/forum/Page.vue'
import Share from '../components/forum/Share.vue'
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
    {
      path: '/matchmaking',
      name: 'Matchmaking',
      component: Matchmaking,
    },
    {path: '/forum',
      component: Communication,
      children:[
        {path:'/diary',component:Share},
        {path:'/share',component:Share}
      ]


    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User,
    }

  ]
})
