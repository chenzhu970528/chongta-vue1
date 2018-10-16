// 调用第三方Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
function isLogin() {
  var login = {};
  login.userId = localStorage.getItem("userId");
  if (login.userId) {
    login.isLogin = true;
  } else {
    login.isLogin = false;
  }
  return login;
}

export default new Vuex.Store({
  state:{
    userName:'小锤锤',
    // userId: isLogin().userId,
    // isLogin: isLogin().isLogin,
    isLogin:true,
    userId:15

  },
  getters:{
    UserName(state){
      return state.userName;
    },
    isLogin(state) {
      return state.isLogin;
    },
    UserId(state) {
      return state.userId;
    },
  }
})

