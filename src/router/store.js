// 调用第三方Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    id: 45,
  },
  getters:{
    UserId(state){
      return state.id;
    }
  }
})

