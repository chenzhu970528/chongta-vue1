<template>
  <div class="container">
    <h2>宠物详情</h2>
    <h4>宠物id:{{adoId}}</h4>
    <ul class="adoptive nav navbar-nav">
      <router-link tag="li" active-class="active"  role="presentation" to="/userDetails/1"><a>有意领养者1</a></router-link>
      <router-link tag="li" active-class="active"  role="presentation" to="/userDetails/2"><a>有意领养者2</a></router-link>
      <router-link tag="li" active-class="active"  role="presentation" to="/userDetails/3"><a>有意领养者3</a></router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "AdoptDetails",
      data(){
        return {
          adoId:this.$route.params.adoId
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
  .adoptive li{
    text-align:center;
    border: 1px solid #45afcc;
    box-shadow:-2px 2px 10px 2px #9cbcbb;
  }
</style>
