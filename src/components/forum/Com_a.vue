<template><!--图片 内容，小版块-->
  <div id="d1">
    <img src="../../assets/images/a.jpg" alt="" class="img">
    <h4><span v-for="plate in plates" class="s1">#{{plate}}</span>
      <span v-for="sum in sums" class="s2"> ❤{{sum}}</span></h4>
      <p v-for="title in titles" class="s3">{{title}}</p>

    <p v-for="content in contents">{{content}}...</p>
  </div>
</template>

<script>
  export default {
    name: "Com_a",
    data() {
      return {
        plates:['交流分享'],
        titles:['啦啦啦啦啦啦 '],
        sums:[1],
        contents:['阿达撒睡得晚若多所所所所所所所所']
      }
      //   plates:['交流分享','领养日记','交流分享'],
      //   titles:['啦啦啦啦啦啦啦 ','其实瓦尔多撒地方','撒范德萨三个分工会让他'],
      //   sums:[1,2,4],
      //   contents:['阿达撒睡得晚若多所所所所所所所所','色弱付过错错错错错错错错错错错错','的人若若若若若若若擦擦擦']
      // }
    }
  }
</script>

<style scoped>
  .s1{
    font-size:18px;
    color: rgba(220, 128, 24, 0.87);
  }
  .s2{
    text-align:right;
  }
  .s3{
    font-size:20px;
  }
  p{

  }
  div {
    background: white;
  }

  #d1 {
    width: 235px;
    height: 300px;
    display: inline-block;
    margin:40px 18px;

  }

  h4 {
    width: 235px;
    height: 35px;
    line-height: 35px
  }

  .img {
    width: 235px;
    height: 150px;
  }
</style>
