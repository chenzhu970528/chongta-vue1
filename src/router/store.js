// 调用第三方Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    id: 11,
    name:'小锤锤'
  },
  getters:{
    UserId(state){
      return state.id;
    },
    UserName(state){
      return state.name;
    }
  }
})

