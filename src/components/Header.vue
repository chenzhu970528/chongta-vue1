<template>
  <nav class="navbar navbar-default ">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <img class="logodog" width="60" src="../assets/logoDog.png" alt="">
        <img class="logo" src="../assets/logo.png" alt="">
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <ul class="nav navbar-nav">
        <!--exact可以避免根路由使用始终激活的样式-->
        <router-link tag="li" active-class="active" role="presentation" to="/" exact><a>首页</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/adoption"><a>领养中心</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/homeless"><a>流浪精灵</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/matchmaking"><a>宠物婚介</a></router-link>
        <router-link tag="li" active-class="active" role="presentation" to="/forum"><a>宠宠交流</a></router-link>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><router-link tag="li" active-class="active" role="presentation" to="/register"><a>登录</a></router-link></li>
        <li v-if="!isLogin">
          <user-login></user-login>
        </li>
        <!--登录成功-->
        <li class="dropdown" v-if="isLogin">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
             aria-expanded="false">{{UserName}}<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <router-link tag="li" active-class="active" role="presentation" :to="'/user/'+UserId+'/personal'"><a>个人中心</a></router-link>
            <li role="separator" class="divider"></li>
            <li><a href="/">退出登录</a></li>
          </ul>
        </li>
        <li><a href="#">定位</a></li>
      </ul>
    </div><!-- /.container-fluid -->
  </nav>

</template>

<script>
  import {mapGetters} from 'vuex';
  import Login from '../components/user/Login.vue'
  export default {
    name: "Header",
    components:{
      'user-login':Login
    },
    computed: mapGetters([
      'UserId',
      'UserName',
      'isLogin'
    ])

  }
</script>

<style scoped>
  .logo {
    width: 150px;
    height: 70px;
  }

  .navbar li a {
    height: 70px;
    line-height: 40px;
    font-size: 18px;
  }

  .navbar .dropdown li a {
    height: 30px;
    line-height: 30px;
  }

  .navbar-header li a {
    height: 30px;
    line-height: 30px;
  }

</style>
