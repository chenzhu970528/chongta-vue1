<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <ul class="ul">
            <li class="li" v-for="val in values">
              <router-link tag="a" active-class="active" role="presentation" to="/forum/details">
                <img class=img :src=val.img>
                <p class="p"><span class="left0">荐</span><a class="a title">{{val.title}}</a></p>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="item">
          <ul class="ul">
            <li class="li" v-for="val in values">
              <router-link tag="a" active-class="active" role="presentation" to="/forum/details">
                <img class=img :src=val.img>
                <p class="p"><span class="left0">荐</span><a class="a title">{{val.title}}</a></p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="item">
          <ul class="ul">
            <li class="li" v-for="val in values">
              <router-link tag="a" active-class="active" role="presentation" to="/forum/details">
                <img class=img :src=val.img>
                <p class="p"><span class="left0">荐</span><a class="a title">{{val.title}}</a></p>
              </router-link>
            </li>
          </ul>
        </div>
        &nbsp
      </div>
      <!-- Controls -->
      <a class=" carousel-control" data-slide="prev">
      </a>
      <a class=" carousel-control" data-slide="next">
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        values: [
          {img: require("../../assets/images/a.jpg"), title: '标题'},
          {img: require("../../assets/images/a.jpg"), title: '标题'},
          {img: require("../../assets/images/a.jpg"), title: '标题'},

        ]
      }
    },
  }
</script>

<style scoped>

  .ul {
    margin-left: -15px;
  }

  .li {
    display: inline-block;
    color: white;
    position: relative;
    list-style: none;
    width: 380px;
    margin-bottom: 40px;
    margin-right: 25px;
  }

  .img {
    width: 380px;
    height: 285px;
  }

  .p {
    background: #000000;
    opacity: 0.4;
    position: absolute;
    bottom: -10px;
    height: 40px;
    width: 100%;
    text-align: center;

  }

  .left0 {
    position: absolute;
    left: 0px;
    color: #f1a234;
    font-weight: bold;
    line-height: 40px;
  }

  .a {
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 100%;
    text-decoration: none;
  }

  .title {
    font-size: 17px;
    color: white;
  }
</style>
