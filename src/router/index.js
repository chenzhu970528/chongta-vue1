import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Adoption from '../components/adoption/Adoption.vue'
import homeless from '../components/homeless/homeless.vue'
import Communication from '../components/forum/Communication.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //默认时hash模式（#）
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
      name: 'homeless',
      component: homeless,
    },  {
      path: '/forum',
      name: 'Communication',
      component: Communication,
    },
    // {
    //   path: '/forum', component: Communication, children: [
    //     {path: '', component: Communication},
    //   ]
    // },
    // {path: '*', redirect: '/'}    //重定向，针对任何未匹配的路由

  ]
})
