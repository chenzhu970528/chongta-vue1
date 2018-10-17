<template>
    <div>
      <div class="d1">
        <div class="top"><span class="left">热门文章</span></div>
        <div class="bot" v-for="(list,index) in lists">
          <router-link tag="p" active-class="active"  role="presentation" to="/forum/details"><span>{{index+1}}</span>&nbsp<a href="">{{list}}</a></router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Com_c",
      data(){
          return{
            lists:['今天是晴天','阴天转多云','五十六个民族五十六朵花','五十六个兄弟姐妹是一家',
              '今天是晴天','阴天转多云','五十六个民族五十六朵花','五十六个兄弟姐妹是一家',
              '今天是晴天','阴天转多云'
            ]
          }
      }
    }
</script>

<style scoped>
.d1{
  width: 360px;
  background: white;
  position: relative;
  padding: 20px;
  display: inline-block;
  margin-top:1px;
  margin-bottom:20px;
}
.top {
  width: 317px;
  height: 35px;
  border-bottom: 1px solid #a8a8a8;
  color: #a8a8a8;
  margin-bottom:20px;
}
p{
  font-size:18px;
}
.left {
  display: inline-block;
  height: 35px;
  border-bottom: 3px solid rgba(129, 198, 218, 0.64);
  font-size: 20px;
}
  p>span{
    font-size:14px;
    margin-bottom:10px;
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    background: #81c6da;
    color: #efefef;
    margin-right: 15px;
  }
  a{
    text-decoration: none;
    color: #323232;
  }
  p>a:hover{
    color: #81c6da;
  }
</style>
