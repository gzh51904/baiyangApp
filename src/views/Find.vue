<template>
  <div id="faxian">
  <div class="faxian">
    <div class="box">
    <a href="javascript:;">推荐</a>
    <a href="javascript:;">美容</a>
    <a href="javascript:;">母婴</a>
    <a href="javascript:;">健康</a>
    <a href="javascript:;">医药</a>
    <a href="javascript:;">每日科普</a>
    <a href="javascript:;">有偿资讯</a>
    <a href="javascript:;">孕期营养攻略</a>
    <a href="javascript:;">haha</a>
    </div>
  </div>
  <div class="container">
    <div class="c_left">
       <div class="victim1">
         <img src="../assets/img/faxian1.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian4.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian5.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
    </div>
    <div class="c_right">
      <div class="victim1">
         <img src="../assets/img/faxian2.png" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian3.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian6.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.faxian {
  // display: flex;
  // flex: 1;
  overflow: auto;
  // padding-bottom: 0.266667rem;
  border-bottom: 0.013333rem;
  // justify-content: space-between;
  // padding-right: 1.333333rem;
  font-size: 0.48rem;
  .box {
    width: 200%;
    display: flex;
    height: 0.533333rem;
    font-size: 0.48rem;
    height: 1.026667rem;
    border-bottom: 0.013333rem solid #999;
    a {
      margin: 0.2rem 0.4rem 0 0.4rem;
      text-decoration: none;
      // margin-bottom: 0.266667rem;
      height: 0.8rem;
      // line-height: 0.8rem;
      color: #333333;
      // text-decoration: none;
      &:hover {
        color: #ff0066;
        border-bottom: 2px solid #ff0066;
        // a:first-child {
        //   color: #333333;
        //   border-bottom: none;
        // }
      }
      // &:first-child {
      //   color: #ff0066;
      //   border-bottom: 2px solid #ff0066;
      // }
    }
  }
}
#faxian {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.container {
  padding-top: 0.32rem;
  padding-left: 0.213333rem;
  display: flex;
  flex: 1;
  // justify-content: left;
  .c_left {
    width: 4.613333rem;
    margin-right: 0.266667rem;
    .victim1 {
      display: flex;
      // flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 0.32rem;
      img {
        width: 100%;
        border-radius: 8px;
      }
      h3 {
        width: 100%;
        margin: 0.2rem 0;
        padding: 0 3px 0 3px;
      }
      p {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        color: #999;
      }
      h5 {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        font-weight: bold;
      }
    }
  }
  .c_right {
    width: 4.613333rem;
    .victim1 {
      display: flex;
      // flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 0.32rem;
      img {
        width: 100%;
        border-radius: 8px;
      }
      h3 {
        width: 100%;
        margin: 0.2rem 0;
        padding: 0 3px 0 3px;
      }
      p {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        color: #999;
      }
      h5 {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        font-weight: bold;
      }
    }
  }
}
</style>