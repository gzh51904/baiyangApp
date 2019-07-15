<template>
  <section id="baiyang_cart">
    <!-- 头部 -->
    <cart-head></cart-head>
    <!-- 用户登录 未登录的时候显示-->
    <user-login v-show="!isLogin"></user-login>
    <!-- 购物车为空 购物车为空时显示-->
    <cart-empty v-show="isNull"></cart-empty>
    <!-- 购物车商品 购物车不为空时显示-->
    <cart-goods v-show="!isNull" :aGoods="aGoods"></cart-goods>
    <!-- <delete></delete> -->
    
  </section>
</template>
<script>
import Head from "../components/cart/Head.vue";
import CartEmpty from "../components/cart/CartEmpty.vue";
import UserLogin from "../components/cart/UserLogin.vue";
import CartGoods from "../components/cart/CartGoods.vue";
// import Delete from "../components/cart/Delete.vue";
export default {
  components: {
    "cart-head": Head,
    "cart-empty": CartEmpty,
    "user-login": UserLogin,
    "cart-goods": CartGoods,
    // Delete
  },
  data() {
    return {
      isLogin: false, //用户是否登录
      isNull: true, //购物车是否为空,
      aGoods: []
    };
  },
  methods: {
    
  },
  async created() {
    // 用户是否登录 本地存储是否有cart对象
    var sUserName = localStorage.getItem("username"); //获取用户名
    var sCart = localStorage.getItem("cart"); //获取cart对象的内容
    var aCart = [];
    var arr = [];
    // 1.用户未登录 cart对象不存在
    if (!sUserName && !sCart) {
      console.log("用户未登录 cart对象不存在");
      // 设置标志
      this.isLogin = false;
      this.isNull = true;
      return;
    }

    // 2.用户未登录 cart对象存在
    if (!sUserName && sCart) {
      console.log("用户未登录 cart对象存在");
      // 设置标志
      this.isLogin = false;
      this.isNull = false;
      // 数据渲染
      aCart = JSON.parse(sCart); //将字符串转为数组
      this.aGoods = aCart;
      return;
    }
    // 3.用户已登录 cart对象不存在
    if (sUserName && !sCart) {
      console.log("用户已登录 cart对象不存在");
      this.isLogin = true; //设置标志

      // 获取数据库数据
      var oData1 = await this.$axios.get(
        "http://127.0.0.1:1904/cart/" + sUserName
      );
      var aData = oData1.data.data;
      console.log(aData);

      // 3-1.数据库购物车表无商品记录
      if (aData.length <= 0) {
        console.log("数据库无记录");
        // 设置标志
        this.isNull = true;
      } else {
        this.isNull = false;
        // 数据渲染
        console.log("数据库有记录");
        this.aGoods = aData;
      }
      // 3-2.数据库购物车表有商品记录
      return;
    }
    // 4.用户已登录 cart对象存在
    if (sUserName && sCart) {
      console.log("用户已登录 cart对象存在");
      // 设置标志
      this.isLogin = true;
      this.isNull = false;
      aCart = JSON.parse(sCart); //将字符串转为数组
      // 获取数据库数据
      var oData2 = await this.$axios.get(
        "http://127.0.0.1:1904/cart/" + sUserName
      );
      var aData = oData2.data.data;
      // 判断数据库是否有记录
      if (aData.length <= 0) {
        console.log("数据库无记录");
        // 渲染本地存储的数据渲染到页面
        this.aGoods = aCart;
        // console.log(this.aGoods);
        // 将本地存储的数据存储到数据库
        for (var i = 0; i < aCart.length; i++) {
          var arr2 = aCart[i];
          arr2.username = sUserName;
          console.log(arr2);
          await this.$axios.post("http://127.0.0.1:1904/cart",arr2);
        }
        // await this.$axios.post();
      } else {
        console.log("数据库有记录");

        // 将本地存储存入数据库
        for (var i = 0; i < aCart.length; i++) {
          var arr = aCart[i];
          arr.username = sUserName;
          await this.$axios.post("http://127.0.0.1:1904/cart", arr);
        }
        // 读取数据库数据，渲染页面
        var oData3 = await this.$axios.get(
          "http://127.0.0.1:1904/cart/" + sUserName
        );
        var aData2 = oData3.data.data;
        this.aGoods = aData2;
      }
      // 清除本地缓存
      localStorage.removeItem("cart");
    }
  }
};
</script>
<style lang="scss" scoped>
#baiyang_cart {
  padding-bottom: 40%;
  padding-top: 1.146667rem;
  min-height: 100%;
  width: 100%;
  background: #f5f5f5;
}
</style>