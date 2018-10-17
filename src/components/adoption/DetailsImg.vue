<template>
    <div class="block">
      <el-carousel height="300px">
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img :src="img.url">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "DetailsImg",
      data(){
          return{
            imgList:[
              {url:require("../../assets/adoption/dog1.jpg")} ,
              {url:require("../../assets/adoption/dog2.jpg")} ,
              {url:require("../../assets/adoption/dog3.jpg")} ,
              {url:require("../../assets/adoption/dog4.jpg")} ,
            ],
          }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 220px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
