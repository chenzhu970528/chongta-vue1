<template>
  <div class="container">
    <h2>用户详情</h2>
    <div><h4>详情用户id：{{userId}}</h4></div>
  </div>
</template>

<script>
    export default {
        name: "UserDetails",
      data(){
        return {
          userId:this.$route.params.userId
        }
      }
    }
</script>

<style scoped>
  .container{
    background:rgba(255,255,255,0.9);
    margin-top:50px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    min-height: 500px;
  }
</style>
