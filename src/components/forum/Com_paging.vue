<template>
  <!--分页-->
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
</template>

<script>
    export default {
      name: "Com_paging",
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
      data() {
        return {
          num:10,
         Page: 5,
          size:4,
        };
      }
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
