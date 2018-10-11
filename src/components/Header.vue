<template>
  <ul class="nav nav-pills">
    <!--exact可以避免根路由使用始终激活的样式-->
    <router-link tag="li" active-class="active" role="presentation" to="/" exact><a>首页</a></router-link>
    <router-link tag="li" active-class="active"  role="presentation" to="/adoption"><a>领养中心</a></router-link>
    <router-link tag="li" active-class="active"  role="presentation" to="/homeless"><a>流浪精灵</a></router-link>
    <router-link tag="li" active-class="active"  role="presentation" to="/matchmaking"><a>宠物婚介</a></router-link>
    <router-link tag="li" active-class="active"  role="presentation" to="/communication"><a>宠宠交流</a></router-link>
  </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
