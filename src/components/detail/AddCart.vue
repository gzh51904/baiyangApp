<template>
  <div class="add_cart_box">
    <input type="button" value="存储用户信息" @click="saveUserInfos()">
    <div class="left">
      <a href="javascript:;" class="kefu">
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </a>
      <a href="javascript:;" class="cart" @click="jumpToCartPage()">
        <i class="iconfont icon-cart"></i>
        <p>购物车</p>
        <em class="icon_num">{{iGoodsNum}}</em>
      </a>
    </div>
    <div class="right">
      <a href="javascript:;" class="add_cart_btn" @click="addCart()">加入购物车</a>
      <a href="javascript:;" class="buy_now_btn">立即购买</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsInfos: {
      type: Array
    }
  },
  data() {
    return {
      iGoodsNum: 0
    };
  },
  computed: {
  },

  methods: {
    saveUserInfos() {
      localStorage.setItem("username", "ganliyun3477");
    },
    jumpToCartPage() {
      this.$router.push("/cart");
    },
    async addCart() {
      // 用户未登录 将购物车数据存储到本地存储 用户已登录，将本地存储和新的数据一并存到mysql，并删除本地存储。
      //1.用户是否登录 cart对象是否存在 cart对象中是否包行该商品信息

      // 获取用户名
      var sUserName = localStorage.getItem("username");
      // 获取cart对象
      var sCart = localStorage.getItem("cart");

      //获取添加到购物车的商品信息
      var oGoods = {
        goods_id: this.goodsInfos[0]["id"],
        goods_name: this.goodsInfos[0].name,
        goods_img: this.goodsInfos[0].img_url.split(";")[0],
        price: this.goodsInfos[0].cur_price,
        num: 1
      };

      // 1.用户未登录，cart对象不存在 ：创建cart对象，将记录添加到本地
      if (!sUserName && !sCart) {
        console.log("用户未登录，cart对象不存在");
        // 创建cart对象，将数据存储到该对象，然后存储到本地
        var aCart = [];
        aCart.push(oGoods);
        localStorage.setItem("cart", JSON.stringify(aCart)); //将数组转为字符串，存储到本地
        return;
      }

      // 2.用户未登录，cart对象存在：判断cart对象中是否存在该产品，有就修改数量，无直接添加记录
      if (!sUserName && sCart) {
        console.log("用户未登录，cart对象存在");
        var aCart = JSON.parse(sCart); //将字符串转为数组

        // 遍历本地存储cart数组，判断是否有该商品，有就直接修改商品数量，无就直接添加记录
        for (var i = 0; i < aCart.length; i++) {
          if (aCart[i].goods_id == oGoods.goods_id) {
            // 对象中存在该商品 直接修改数量 并存储
            console.log("cart对象中有该商品");
            aCart[i].num += 1; //数量加1
            localStorage.setItem("cart", JSON.stringify(aCart)); //将数组转为字符串，存储到本地
          } else {
            // 对象中不存在该商品 往数组中添加商品信息 并存储
            console.log("cart对象中无该商品");
            aCart.push(oGoods);
            localStorage.setItem("cart", JSON.stringify(aCart)); //将数组转为字符串，存储到本地
          }
        }
        return;
      }

      // 3.用户登录，cart对象不存在：将记录添加到数据库
      if (sUserName && !sCart) {
        console.log("用户登录，cart对象不存在");
        // 将数据添加到数据库
        oGoods.username = sUserName;
        await this.$axios.post("http://127.0.0.1:1904/cart", oGoods);
        return;
      }

      // 4.用户登录，cart对象存在：将新的记录和本地记录合并，存入数据库
      if (sUserName && sCart) {
        console.log("用户登录，cart对象存在");
        // 将本地存储cart对象转为数组
        var aCart = JSON.parse(sCart);
        //遍历数组，看是否有该商品，有就修改数量，无就直接添加记录
        for (var i = 0; i < aCart.length; i++) {
          if (aCart[i].goods_id == oGoods.goods_id) {
            console.log("cart对象中有该商品");
            aCart[i].num += 1;
          } else {
            console.log("cart对象无该商品");
            aCart.push(oGoods);
          }
        }
        // 将数据存储到数据库
        for (var i = 0; i < aCart.length; i++) {
          aCart[i].username = sUserName;
          await this.$axios.post("http://127.0.0.1:1904/cart", aCart[i]);
        }
        // 清空本地存储中cart对象
        localStorage.removeItem("cart");
        return;
      }

    }
  }
};
</script>

<style lang="scss" scoped>
.add_cart_box {
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1.373333rem;
  border-top: 0.026667rem solid #dddddd;
  border-bottom: 0.026667rem solid #dddddd;
  background: #fff;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 31%;
    height: 100%;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 1.12rem;
      height: 100%;
      .iconfont {
        margin: 0.133333rem;
        font-size: 0.466667rem;
        color: #666666;
      }
    }
    a:hover {
      text-decoration: none;
    }
    p {
      height: 0.28rem;
      font-size: 0.28rem;
      color: #666666;
      line-height: 0.28rem;
    }
  }
  .kefu {
    width: 47%;
  }
  .cart {
    width: 53%;
    border-left: 0.026667rem solid #dddddd;
    position: relative;
    .icon_num {
      position: absolute;
      left: 60%;
      top: 0.133333rem;
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: red;
      font-size: 0.133333rem;
      color: #fff;
      text-align: center;
      line-height: 0.4rem;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 69%;
    height: 100%;
    a {
      display: block;
      width: 50%;
      height: 100%;
      font-size: 0.453333rem;
      line-height: 1.32rem;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
    a:hover {
      text-decoration: none;
    }
    .add_cart_btn {
      background: #333333;
    }
    .buy_now_btn {
      background: #ff0066;
    }
  }
}
</style>

