<template>
    <div class="evaluation">
        <div class="title">
            <h3>商品评价(2)</h3>
            <a href="javascript:;">好评率100% &gt;</a>
        </div>
        <div class="content">
            <ul class="pingjia_list">
                <li class="list_item">
                    <div class="user_name">
                        <div class="pic">
                            <img src="../../assets/img/logo.jpg" alt="#">
                        </div>
                        <p class="name">用户名112</p>
                    </div>
                    <p class="liuyan">好评好评好评价好评好评好评好评好评好评好评好评好评好评好评好评</p>
                </li>
                <li class="list_item">
                    <div class="user_name">
                        <div class="pic">
                            <img src="../../assets/img/logo.jpg" alt="#">
                        </div>
                        <p class="name">用户名112</p>
                    </div>
                    <p class="liuyan">好评好评好评价好评好评好评好评好评好评好评好评好评好评好评好评</p>
                </li>
                <li class="list_item">
                    <div class="user_name">
                        <div class="pic">
                            <img src="../../assets/img/logo.jpg" alt="#">
                        </div>
                        <p class="name">用户名112</p>
                    </div>
                    <p class="liuyan">好评好评好评价好评好评好评好评好评好评好评好评好评好评好评好评</p>
                </li>
                <li class="list_item">
                    <div class="user_name">
                        <div class="pic">
                            <img src="../../assets/img/logo.jpg" alt="#">
                        </div>
                        <p class="name">用户名112</p>
                    </div>
                    <p class="liuyan">好评好评好评价好评好评好评好评好评好评好评好评好评好评好评好评</p>
                </li>
                <li class="list_item">
                    <div class="user_name">
                        <div class="pic">
                            <img src="../../assets/img/logo.jpg" alt="#">
                        </div>
                        <p class="name">用户名112</p>
                    </div>
                    <p class="liuyan">好评好评好评价好评好评好评好评好评好评好评好评好评好评好评好评</p>
                </li>
                <li class="list_item">
                    <div class="user_name">
                        <div class="pic">
                            <img src="../../assets/img/logo.jpg" alt="#">
                        </div>
                        <p class="name">用户名112</p>
                    </div>
                    <p class="liuyan">好评好评好评价好评好评好评好评好评好评好评好评好评好评好评好评</p>
                </li>
                <li class="chakangengduo">
                    查看更多
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.evaluation {
  padding: 0 0.266667rem;
  width: 100%;
  margin-bottom: 0.28rem;
  background: #fff;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.173333rem;
    h3 {
      font-size: 0.333333rem;
      color: #000;
      line-height: 0.466667rem;
      font-weight: 600;
    }
    a {
      font-size: 0.306667rem;
      color: #ff0066;
    }
  }
  .content {
    width: 100%;
    height: 3.733333rem;
    overflow-x: scroll;
    position: relative;
    .pingjia_list {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .list_item {
        padding: 0.226667rem;
        width: 3.36rem;
        height: 3.36rem;
        border: 0.013333rem solid #b2b2b2;
        .user_name {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 0.2rem;
          height: 0.626667rem;
          .pic {
            margin-right: 0.066667rem;
            width: 0.626667rem;
            height: 0.626667rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .name {
            font-size: 0.173333rem;
            color: #000;
            line-height: 0.266667rem;
          }
        }
        .liuyan {
          font-size: 0.306667rem;
          color: #000;
          line-height: 0.52rem;
        }
      }
      .chakangengduo {
        padding: 0.226667rem;
        width: 3.36rem;
        height: 3.36rem;
        border: 0.013333rem solid #b2b2b2;
        font-size: 0.306667rem;
        text-align: center;
        line-height: 3.36rem;
      }
    }
  }
}
</style>


