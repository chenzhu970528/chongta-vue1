<template>
  <div>
    <ul>
      <li v-for="val in values">
        <img :src=val.img>
        <p ><span class="left" >荐</span><a class="title">{{val.title}}</a></p>
      </li>
    </ul>
    <ol class="flex-control-nav flex-control-paging">
      <li><a class="flex-active">1</a></li>
      <li><a class="">2</a></li>
      <li><a class="">3</a></li></ol>
  </div>
</template>

<script>
  import Com_a from './Com_a.vue'
  import Com_paging from './Com_paging.vue'

  export default {
    name: "Recommend",
    data() {
      return {
        values: [
          {img: require("../../assets/images/a.jpg"),title: '标题'},
          {img: require("../../assets/images/a.jpg"),title: '标题'},
          {img: require("../../assets/images/a.jpg"),title: '标题'},

        ]
      }
    },


        methods: {
          d(index) {
            return 'id' + index;
          }
        },
        components: {
          'com_a': Com_a,
          'com_paging': Com_paging,
        }
  }
</script>

<style scoped>
ul{
  margin-left:-15px;
}
  ul>li {
    display: inline-block;
    color:white;
    position:relative;
    list-style: none;
    width: 380px;
    margin-bottom:40px ;
    margin-right:25px ;
  }

  img {
    width: 380px;
    height: 285px;
  }
  p{
    background: #000000;
    opacity: 0.3;
    position:absolute;
    bottom:-10px;
    height: 40px;
    width: 100%;
    text-align:center;
  }
.left{
  position:absolute;
  left:0px;
  color: #c4cc26;
  font-weight:bold;
  line-height: 40px;
}
  a {
    text-align:center;
    height: 40px;
    line-height: 40px;
    width: 100%;
    text-decoration: none;
  }
  .title:hover{
    color: #68abbd;
  }
  ol{
    text-align: center;
  }
  .flex-control-nav li {
    display: inline-block;
  }
.flex-control-nav a {
  width: 9px;
  height: 9px;
  margin: 0 3px;
  overflow: hidden;
  display: block;
  text-indent: 100%;
  white-space: nowrap;
  background-color: #ccc;
  border-radius: 100%;
  cursor: pointer;
}
</style>

