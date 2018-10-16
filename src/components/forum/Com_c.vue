<template>
    <div>
      <div class="d1">
        <div class="top"><span class="left">热门文章</span></div>
        <ul class="bot">
          <li><span>1</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>2</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>3</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>4</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>5</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>6</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>7</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>8</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>9</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
          <li><span>10</span>&nbsp<a href="">少时诵诗书所所所所所所所撒所所哇</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Com_c"
    }
</script>

<style scoped>
.d1{
  width: 360px;
  height: 389px;
  border:1px solid #a8a8a8;
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

.left {
  height: 35px;
  position: absolute;
  border-bottom: 3px solid rgba(129, 198, 218, 0.64);
  left: 20px;
  font-size: 20px;
}
.bot{
  position: relative;
  left:-40px;
}
li{
  list-style:none;
  font-size:15px;
}
  li>span{
    font-size:14px;
    margin-bottom:10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    background: #81c6da;
    color: #efefef;
    margin-right: 15px;
  }
  a{
    text-decoration: none;
    color: #323232;
  }
  li>a:hover{
    color: #81c6da;
  }
</style>
