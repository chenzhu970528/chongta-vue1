import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Adoption from '../components/adoption/Adoption.vue'
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
    }

  ]
})
