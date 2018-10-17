<template>
    <div class="changehead">
      <div class="cir">
        <div class="heard"></div>
        <div class="came">
          <img src="../../assets/user/cam.png" alt="">
        </div>
      </div>
      <form action="">
        <input type="file">
      </form>
    </div>
</template>

<script>
    export default {
        name: "changehead",
        mounted(){
          (function($){
            $('.heard').mouseover(function(){
              $('.came').css('display','block');
            });
            $('.heard').mouseout(function(){
              $('.came').css('display','none');
            });
            $('.heard').click(function(){
              $('[type="file"]').trigger("click");
            });
            $('[type="file"]').change(function(){
              var filed=new FileReader();
              filed.onload=function(event){
                var content=event.target.result;
                $('.heard').css('background','url("'+ content +'")');
                console.log(content);
              };
              filed.readAsDataURL($('[type="file"]')[0].files[0]);
            });
          })(jQuery)
      }
    }
</script>

<style scoped>
  .changehead{
    /*display: inline-block;*/
    width: 110px;
    height: 110px;
    /*margin-left: 35%;*/
    border-radius: 110px;
    background-color: rgba(255, 255, 255, 0.4);
    position: relative;
    top:10px;
    margin: 0px auto;
    /*left: 50%;*/
  }
  .cir{
    position: absolute;
    top: 5px;
    left: 5px;
    /*bottom: 1px;*/
  }
  .heard{
    width: 100px;
    height: 100px;
    border: 1px solid transparent;
    border-radius: 100px;
    /*background-color: #dbb8b7;*/
    position: absolute;
    background: 322px 400px url("../../assets/user/headpic.jpg");
  }
  .came{
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 0.2;
    border: 1px solid transparent;
    border-radius: 100px;
    text-align: center;
    line-height: 130px;
    display: none;
    position: absolute;
    pointer-events:none;
  }
  input{
    display: none;
  }
  .came img{
    margin-top: -40%;
  }
  /*.heard:hover .came{*/
  /*display: block;*/
  /*}*/

</style>
