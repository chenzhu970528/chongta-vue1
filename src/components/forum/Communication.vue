<template>
    <div>
     <div class="backImg"></div>
      <p id="sub">
        <p>你的位置：宠它 > 宠宠交流</p>
        <div class="d1">精品推荐</div>
        <div class="d2">
          <com_a></com_a>
          <com_a></com_a>
          <com_a></com_a>
        </div>

        <button>发帖</button>
        <com_b></com_b>
      </div>

</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_b from './Com_b.vue'

    export default {
        name: "Communication",
      components: {
        'com_a':Com_a,
        'com_b': Com_b,

      }
    }
</script>

<style scoped>
  body{margin: 0;padding:0}
.backImg{
  width:100%;
  height: 395px;
  background: url("../../assets/images/dog.jpg") no-repeat;
  margin-bottom:30px;
}
#sub{
  margin-left:45px;
  margin-right:45px;
}
  .d1{
    background: white;
    width: 50px;
    text-align: center;
    height: 298px;
    line-height: 298px;
    font-size:28px;
    font-weight: bold;
  }
  .d2{
    margin-top: 200px;
    text-align: center;
  }
</style>
