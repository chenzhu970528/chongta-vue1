<template>
  <div class="cont container">
    <ol class="breadcrumb">
      您当前位置为：
      <li><a href="/adoption">领养中心</a></li>
      <!--<li><a href="#">详情</a></li>-->
      <li class="active">领养详情</li>
    </ol>
    <div class="title">
      <img src="../../assets/adoption/take.png" width="50" alt="">
      <span class="text-primary">领养详情</span>
    </div>
    <div class="adoTitle">
      <h3 class="text-primary">可爱小猫求领养</h3>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-5" style="margin-top: 25px">
          <img-album></img-album>
        </div>
        <div class="col-xs-7">
          <ado-info></ado-info>
        </div>
      </div>
      <div class="descript">
        <div class="container text-muted">
          闺蜜明年出国，在家里养了半年的加菲，想物色一个好人家。要求对方是女生，喜欢小动物有爱心，有能抚养小动物的能力。猫咪已驱虫，并打疫苗。有意加V：17317717958，备注“猫咪”，谢谢。

          联系我时，请说明来自：宠它

          <p class="text-danger" style="margin-top: 10px"><span class="glyphicon glyphicon-alert" aria-hidden="true"> </span> 安全提示：请不要相信任何需要金钱交易的无偿领养！例如宠物免费，骗取运费等常见骗术！</p>
        </div>
      </div>

      <div class="recommend">
        <h4 class="text-primary">你可能对以下内容感兴趣</h4>
        <ado-recommend></ado-recommend>
      </div>
    </div>

    <!--<ul class="adoptive nav navbar-nav">-->
      <!--<router-link tag="li" active-class="active"  role="presentation" to="/userDetails/1"><a>有意领养者1</a></router-link>-->
      <!--<router-link tag="li" active-class="active"  role="presentation" to="/userDetails/2"><a>有意领养者2</a></router-link>-->
      <!--<router-link tag="li" active-class="active"  role="presentation" to="/userDetails/3"><a>有意领养者3</a></router-link>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import Recommend from '../adoption/DetailsRecommend'
  import Album from '../adoption/DetailsImg.vue'
  import Info from '../adoption/DetailsInfo.vue'
    export default {
        name: "AdoptDetails",
      components:{
          'img-album':Album,
          'ado-info':Info,
        'ado-recommend':Recommend
      },
      data(){
        return {
          adoId:this.$route.params.adoId
        }
      }
    }
</script>

<style scoped>
  .cont{
    background:rgba(255,255,255,0.9);
    margin-top:50px ;
    box-shadow:-2px 2px 10px 2px #bcbcbc;
    min-height: 500px;
    width: 1240px;
  }
  .adoTitle{
    width: 1136px;
    margin: 0  auto;
    border-bottom: 2px dashed #5bacfd;
    margin-bottom: 20px;
  }
  .adoTitle h3{
    margin-left: 20px;
  }
  .title{
    margin-top: 20px;
    height: 50px;
    position: relative;
  }
  .title span{
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    left: 65px;
    top: 12px;
  }
  .descript{
    margin-top: 20px;
  }
  .descript .container{
    padding: 20px 20px 10px;
    width: 1136px;
    margin: 0px auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 18px;
  }
  .recommend {
      width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .recommend h4{
    width: 200px;
    margin: 0 auto;
  }
</style>
