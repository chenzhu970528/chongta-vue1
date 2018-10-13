import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Adoption from '../components/adoption/Adoption.vue'
import Homeless from '../components/homeless/Homeless.vue'
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
      path: '/homeless',
      name: 'Homeless',
      component: Homeless,
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
      path: '/user',
      name: 'User',
      component: User,
    }

  ]
})
