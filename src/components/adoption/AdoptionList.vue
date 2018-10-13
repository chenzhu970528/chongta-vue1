<template>
    <div class="container">
      <h2>宠物列表</h2>
      <ul class="petList nav navbar-nav">
        <router-link tag="li" active-class="active"  role="presentation" to="/adoption/details/7"><a>宠物详情</a></router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "AdoptionList"
    }
</script>

<style scoped>
  .petList li{
    text-align:center;
    border: 1px solid #45afcc;
    box-shadow:-2px 2px 10px 2px #9cbcbb;
  }
  .petList li a{
    width: 250px;
    height: 350px;
    line-height: 300px;
  }
</style>
