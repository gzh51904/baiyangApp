<template>
    <section class="home_limit_time_purchase">
        <div class="limit_time_purchase_inner">
            <div class="time_box">
                <div class="limit_time">
                    <p class="title">限时购</p>
                    <div class="time">
                        <span>00</span>:
                        <span>44</span>:
                        <span>33</span>
                    </div>
                </div>
                <div class="show_all_goods">
                    <a href="javascript:;">查看全部&gt;</a>
                </div>
            </div>
            <div class="goods">
                <ul class="goods_list">
                    <li class="list_item">
                        <div class="goods_img">
                            <img src="../../assets/img/limit1.jpg" alt="">
                        </div>
                        <div class="goods_price">
                            <p class="current_price">￥355</p>
                            <del class="origin_price">￥455</del>
                        </div>
                    </li>
                    <li class="list_item">
                        <div class="goods_img">
                            <img src="../../assets/img/limit2.jpg" alt="">
                        </div>
                        <div class="goods_price">
                            <p class="current_price">￥355</p>
                            <del class="origin_price">￥455</del>
                        </div>
                    </li>
                    <li class="list_item">
                        <div class="goods_img">
                            <img src="../../assets/img/limit3.jpg" alt="">
                        </div>
                        <div class="goods_price">
                            <p class="current_price">￥35</p>
                            <del class="origin_price">￥45</del>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.home_limit_time_purchase {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0.666667rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  margin-bottom: 0.333333rem;
  width: 100%;
  height: 4.306667rem;
  // background: red;
  .limit_time_purchase_inner {
    width: 100%;
    height: 100%;
    border: 0.026667rem solid gray;
    border-radius: 0.16rem;
    .time_box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 1.066667rem;
      width: 100%;
      .limit_time {
        padding-left: 0.346667rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        .title {
          margin-right: 0.133333rem;
          font-size: 0.4rem;
          color: #000;
          line-height: 0.453333rem;
        }
        .time {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 0.2rem;
          line-height: 0.453333rem;
          color: #000;
          span {
            display: block;
            margin: 0 0.066667rem;
            width: 0.453333rem;
            height: 0.453333rem;
            background: #000;
            border-radius: 50%;
            font-size: 0.2rem;
            color: #fff;
            line-height: 0.453333rem;
            text-align: center;
          }
        }
      }
      .show_all_goods {
        padding-right: 0.266667rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        a {
          font-size: 0.32rem;
          color: gray;
        }
      }
    }
    .goods {
      .goods_list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        .list_item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          .goods_img {
            //   margin-bottom:
            width: 1.866667rem;
            height: 1.866667rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .goods_price {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 0.426667rem;
            width: 1.866667rem;
            .current_price {
              font-size: 0.253333rem;
              color: #ff0066;
            }
            .origin_price {
              font-size: 0.2rem;
              color: #999999;
            }
          }
        }
      }
    }
  }
}
</style>

