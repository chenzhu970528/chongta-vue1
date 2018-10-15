<template>
    <div id="content" class="row"> <!--详细内容     -->

      <br>
      <p>你的位置：宠它 > 宠宠交流</p>
      <br>
      <br>
      <div class="co1-sm-9">
      <div class="row">
        <div class="d1 col-sm-2">
          <img src="../../assets/images/a.jpg" alt="">
          <p>{{name}}</p>
          <div class="col-sm-7">
            <h2>{{title}}</h2><span>2018/10/15</span><span>❤20</span>
          </div>
          <div>
      </div>

        <p>asasas</p>
        <img src="../../assets/images/a.jpg" alt="">
      </div>
    </div>
      <comment></comment>
    </div>
      <div  class="co1-sm-3">

      </div>
    </div>
</template>

<script>
  import Comment from './Comment'
    export default {
        name: "Details",
      components:{
        'comment':Comment,
      },
      data(){
          return{
            name:'小肥猪',
            title:['很长']
          }
      }
    }
</script>

<style scoped>
  #content{
    background: #e4e4e4;
    width: 1240px;
    height:3000px;
    margin:auto;
  }
  .d1{
    padding-left:50px;
    padding-right:50px;
  }
img{
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
</style>
