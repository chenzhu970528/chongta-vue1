<template>
    <div>
        <ul>
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">...</a></li>
          <li><a href="#">尾页</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Com_paging"
    }
</script>

<style scoped>
  div  {
    margin-top:30px;
    margin-bottom:27px;
  }
li{
  background: white;
 display: inline-block;
  width: 40px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin:3px;
  border:1px solid transparent;
}
li:hover{
  border:1px solid #999;
}
  a{
    color: #676767;
    text-decoration: none;
  }
</style>
