<template>
  <div class="row">
    <ul>
    <li class="d1 col-sm-1" @click="diary"><a>领养日记</a></li>
    <li class="d1 d col-sm-1" @click="share"><a>交流分享</a></li>
 </ul>
    <div class="row">
      <div class="c1">
        <com_a></com_a>
        <com_a></com_a>
        <com_a></com_a>
        <com_a></com_a>
      </div>
      <p>{{message}}</p>
      <div class="">
        <com_a></com_a>
        <com_a></com_a>
        <com_a></com_a>
        <com_a></com_a>
      </div>
      <com_paging class="col-sm-7 col-sm-offset-4">翻页</com_paging>
    </div>

 </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'
  export default {
    name: "Page" ,
    components:{
      'com_a':Com_a,
      'com_paging': Com_paging,
    },
    data(){
      return{
        message:'宠物日记',
      }
    },
    methods:{
      diary(){
        this.message='宠物日记'
      },
      share(){
        this.message='日常交流'

      }
    }
  }
</script>

<style scoped>

  .d1{
    margin-top: 40px;
    margin-right: 15px;
    display: table-row;
    background: #adadad;
    width: 50px;
    height: 200px;
    padding-top:30px;
    font-size:28px;
    font-weight: bold;
  }
  .d{
   margin-top:230px;
   margin-left:-65px;
    height: 490px;
  }
  a{
    text-decoration: none;
    color:white;
  }
</style>
