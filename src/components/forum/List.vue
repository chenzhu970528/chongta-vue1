<template>
  <div>
    <div class="con">
      <ul>
        <li v-for="(value,index) in values">
          <div class="left" >
            <router-link tag="h3" active-class="active"  role="presentation" to="/forum/newest/details">  <h3 class="title"><a>{{value.title}}</a></h3></router-link>
            <p class="name"><span class="glyphicon glyphicon-user"></span>{{value.name}}</p>
            <p class="val">{{value.val}}</p>
            <p class="foot"><span>{{value.time}}</span><span>&nbsp{{value.num}}回复</span></p>
          </div>
          <div class="photo">
            <router-link tag="a" active-class="active"  role="presentation" to="/forum/newest/details"><img :src='value.src' alt="图片"></router-link>

            <a></a>
          </div>
        </li>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        values: [
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '明明',
            time: '2018/10/16/13:04',
            num: 61,
            src: require("../../assets/images/a.jpg")

          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '白白',
            time: '2018/10/16/13:04',
            num: 62,
            src: require("../../assets/images/a.jpg")

          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '妥妥',

            time: '2018/10/16/13:04',
            num: 63
            ,
            src: require("../../assets/images/a.jpg")

          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '明明',

            time: '2018/10/16/13:04',
            num: 64
            ,
            src: require("../../assets/images/a.jpg")

          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '当当',

            time: '2018/10/16/13:04',
            num: 65
            ,
            src: require("../../assets/images/a.jpg")

          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '明明',

            time: '2018/10/16/13:04',
            num: 66
            ,
            src: require("../../assets/images/a.jpg")

          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '丽丽',

            time: '2018/10/16/13:04',
            num: 67
            ,
           src: require("../../assets/images/a.jpg")
          },
          {
            title: '这是第一个标题',
            val: '1少时诵诗书所所所所所所所发过火过付付付付付付付付付付付付付付撒所所哇少时诵诗书所所所所所所所撒所所哇句号之前',
            name: '对对',

            time: '2018/10/16/13:04',
            num: 68
            ,
            src: require("../../assets/images/a.jpg")

          },
        ]

      }
    }

  }
</script>

<style scoped>
  .con {
    margin: 25px;
    width: 800px;
    height: 1650px;
    padding: 0px 20px 20px 20px;
    border: 1px solid #989898;
  }

  ul {
    position: relative;
    left: -40px;
  }

  li {
    width: 758px;
    height: 180px;
    list-style: none;
    /*background: white;*/
    border-bottom: 1px dashed #969696;
  }

  .val {
    width: 600px;
    height: 55px;
    font-size: 16px;
  }

  .left {
    width: 600px;
    height: 150px;
    float: left;
  }

  .name {
    color: #989898;
    font-size: 13px;
  }

  .foot {
    color: #989898;
    font-size: 13px;
  }

  .photo {
    margin-top:15px;
    width: 150px;
    height: 150px;
    float: right;
    /*margin-right:15px;*/
  }

  img {
    width: 150px;
    height: 150px;
  }
  .page{
    margin-top:70px;
    width: 800px;
    height: 150px;
    line-height: 150px;
    text-align:center;
  }
a{
  text-decoration: none;
  color: #323232;
}
  a:hover{
    color: #80c5d9;
  }
</style>
