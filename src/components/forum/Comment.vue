<template>
  <div>
    <!--评论-->
    <div>
      <img :src={head} alt="">
      <p>{{name}}</p>
      <div>
        <span>2018/10/15</span>
        <p>说得很好！！！</p>
      </div>
      <button >回复</button>
    </div>
    <!--回复评论-->
    <div>
      <img :src={head} alt="">
      <p>{{name}}</p>
      <div>
        <span>2018/10/16</span>
        <p>赞同赞同ヾ(❀^ω^)ノﾞ</p>
      </div>
      <button >评论回复</button>
    </div>
    <!--评论回复-->
    <div>
      <img :src={head} alt="">
      <p>{{name}}</p>
      <div>
        <span>2018/10/16</span>
        <p>我也是赞同赞同ヾ(❀^ω^)ノﾞ</p>
      </div>
      <button >评论回复</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Comment",
    data() {
      return {
        name: '向萨安',
        head: '../../assets/images/a.jpg'
      }
    }
  }
</script>

<style scoped>

</style>
