<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"> 宠物类型：</span>猫咪
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-glass" aria-hidden="true"> 宠物性别：</span> 母
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-time" aria-hidden="true"> 发布时间：</span> 2018-08-21 11:10:28
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"> 地址：</span> 江苏省苏州市
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-user" aria-hidden="true"> 联系人：</span> 王女士
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-earphone" aria-hidden="true"> 联系电话：</span> 18980809696
      </li>
      <li class="list-group-item list-group-item-info">
        <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"> 有意领养者：</span>
        <router-link tag="a" to="/userDetails/1">有意领养者1</router-link>
        <router-link tag="a" to="/userDetails/2">有意领养者2</router-link>
        <router-link tag="a" to="/userDetails/3">有意领养者3</router-link>
      </li>
    </ul>
    <button type="button" class="btn btn-lg btn-primary">我想领养</button>
  </div>
</template>

<script>
    export default {
        name: "DetailsInfo"
    }

</script>

<style scoped>
  .list-group-item{
    margin: 5px 5px;
    border-radius:10px ;
  }
  button{
    margin-left: 50px;
  }
</style>
