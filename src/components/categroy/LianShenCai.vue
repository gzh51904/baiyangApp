<template>
    <section class="lianshencai">
        <div class="goods">
            <!-- 维生素 -->
            <div class="type_represent">
                <a href="javascript:;" v-for="item in goods.type_represent" :key="item.type">
                    <img :src="item.img_url" alt="#">
                </a>
            </div>
            <!-- 类型列表 -->
            <div class="goods_represent">
                <a href="javascript:;" v-for="item in goods.goods_represent" :key="item.id">
                    <img :src="item.img_url" alt="#">
                    <h3 v-text="item.name"></h3>
                </a>
            </div>
            <!-- 精选分类 -->
            <div class="jingxuanfenlei">
                <div class="title">
                    <p class="line"></p>
                    <h2 v-text="goods.jingxuanfenlei.title"></h2>
                    <p class="line"></p>
                </div>
                <div class="pics">
                    <a href="javascript:;" v-for="item in goods.jingxuanfenlei.types" :key="item.type" :class="item.type">
                        <img :src="item.img_url" alt="#">
                    </a>
                </div>
            </div>
            <!-- 畅销单品 -->
            <div class="changxiaodanpin">
                <div class="title">
                    <p class="line"></p>
                    <h2 v-text="goods.changxiaodanpin.title"></h2>
                    <p class="line"></p>
                </div>
                <div class="pics">
                    <a href="javascript:;" v-for="item in goods.changxiaodanpin.goods" :key="item.id">
                        <img :src="item.img_url" alt="#">
                        <h3 v-text="item.name"></h3>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      goods: {
        type_represent: [
          {
            type: "weishengsu",
            img_url: require("../../assets/img/categroy/s22_05848070343173292.jpg")
          }
        ],
        goods_represent: [
          {
            id: 1,
            name: "Now诺奥",
            img_url: require("../../assets/img/categroy/05786787579386968_sm.jpg")
          },
          {
            id: 2,
            name: "Now诺奥",
            img_url: require("../../assets/img/categroy/05786787579386968_sm.jpg")
          },
          {
            id: 3,
            name: "Now诺奥",
            img_url: require("../../assets/img/categroy/05786787579386968_sm.jpg")
          }
        ],
        jingxuanfenlei: {
          title: "精选分类",
          types: [
            {
              type: "daobaizhi",
              img_url: require("../../assets/img/categroy/s22_05847973810582378.png")
            },
            {
              type: "shanshidaicang",
              img_url: require("../../assets/img/categroy/s22_05847975714305746.png")
            },
            {
              type: "zengji",
              img_url: require("../../assets/img/categroy/s22_05847976134219246.png")
            },
            {
              type: "kuangwuzhi",
              img_url: require("../../assets/img/categroy/s22_05847976763079796.png")
            },
            {
              type: "weishengsu",
              img_url: require("../../assets/img/categroy/s22_05847977254511843.png")
            },
            {
              type: "jianzhi",
              img_url: require("../../assets/img/categroy/s22_05847974302165241.png")
            }
          ]
        },
        changxiaodanpin: {
          title: "热销单品",
          goods: [
            {
              id: 4,
              name: "Now诺奥",
              img_url: require("../../assets/img/categroy/2_05935394510418991.jpg")
            },
            {
              id: 5,
              name: "Now诺奥",
              img_url: require("../../assets/img/categroy/2_05935394510418991.jpg")
            },
            {
              id: 6,
              name: "Now诺奥",
              img_url: require("../../assets/img/categroy/2_05935394510418991.jpg")
            }
          ]
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.lianshencai {
  padding-left: 0.373333rem;
  padding-top: 0.306667rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .goods {
    width: 6.72rem;
    .type_represent {
      width: 100%;
      margin-bottom: 0.066667rem;
      img {
        width: 100%;
      }
    }
    .goods_represent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      a {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        // width: 30%;
        width: 2.04rem;
        height: 2.826667rem;
        img {
          //   width: 100%;
          width: 2.04rem;
          height: 2.04rem;
        }
        h3 {
          font-size: 0.293333rem;
          color: #a1a1a1;
          text-align: center;
          line-height: 0.4rem;
        }
      }
    }
    .jingxuanfenlei {
      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 1.186667rem;
        p {
          margin: 0 0.333333rem;
          width: 0.706667rem;
          height: 0.026667rem;
          border: 0.013333rem solid #999999;
        }
        h2 {
          font-size: 0.333333rem;
          color: #000;
          line-height: 0.333333rem;
        }
      }
      .pics {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        a {
          margin-bottom: 0.066667rem;
          display: block;
          width: 3.333333rem;
          height: 1.506667rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        a:nth-child(1) {
          width: 100%;
          height: 2.04rem;
        }
        a:nth-last-child(1) {
          width: 100%;
          height: 2.04rem;
        }
      }
    }
    .changxiaodanpin {
      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 1.186667rem;
        p {
          margin: 0 0.333333rem;
          width: 0.706667rem;
          height: 0.026667rem;
          border: 0.013333rem solid #999999;
        }
        h2 {
          font-size: 0.333333rem;
          color: #000;
          line-height: 0.333333rem;
        }
      }
      .pics {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        a {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          // width: 30%;
          width: 2.04rem;
          height: 2.826667rem;
          img {
            //   width: 100%;
            width: 2.04rem;
            height: 2.04rem;
          }
          h3 {
            font-size: 0.293333rem;
            color: #a1a1a1;
            text-align: center;
            line-height: 0.4rem;
          }
        }
      }
    }
  }
}
</style>


