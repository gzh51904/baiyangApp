<template>
  <section id="baiyang_cart">
    <!-- 头部 -->
    <cart-head @edit="edit" :isEdit="isEdit"></cart-head>
    <!-- 用户登录 未登录的时候显示-->
    <user-login v-show="!isLogin"></user-login>
    <!-- 购物车为空 购物车为空时显示-->
    <cart-empty v-show="isNull"></cart-empty>
    <!-- 购物车商品 购物车不为空时显示-->
    <cart-goods v-show="!isNull" :aGoods="aGoods" :reduce="reduce" :add="add" :inputNum="inputNum" :isSelectAll="isSelectAll" :selectAll2="selectAll2" :selectOne="selectOne"></cart-goods>

    <delete v-show="!isEdit" :selectAll="selectAll" :remove="remove"></delete>

  </section>
</template>
<script>
import Head from "../components/cart/Head.vue";
import CartEmpty from "../components/cart/CartEmpty.vue";
import UserLogin from "../components/cart/UserLogin.vue";
import CartGoods from "../components/cart/CartGoods.vue";
import Delete from "../components/cart/Delete.vue";
export default {
  components: {
    "cart-head": Head,
    "cart-empty": CartEmpty,
    "user-login": UserLogin,
    "cart-goods": CartGoods,
    Delete
  },
  data() {
    return {
      isEdit: true,
      isLogin: false, //用户是否登录
      isNull: true, //购物车是否为空,
      aGoods: [],
      isSelectAll: true,
      aSelectResult: []
    };
  },

  methods: {
    
    async getDatas() {
      // console.log();

      /*
    需求分析：
    1.数据来源：本地存储+数据库
    2.四种情况：
      2.1用户未登录 本地存储无数据=> isLogin=false isNull=true
      2.2用户未登录 本地存储有数据=> isLogin=false isNull=false 渲染本地存储数据
      2.3用户已登录 本地存储无数据=> isLogin=true
        2.3.1数据库无数据=> isNull=true
        2.3.2数据库有数据=> isNull=false 渲染数据库数据
      2.4用户已登录 本地存储有数据=> isLogin=true isNull=false 
        2.4.1数据库无数据=>渲染本地存储数据 将数据写入数据库
        2.4.2数据库有数据=>将数据写入数据库 读取数据库 渲染页面

    
    */

      var sUserName = localStorage.getItem("username"); //获取用户名
      var sCart = localStorage.getItem("cart"); //获取cart对象的内容

      // var arr = [];

      /************* 2.1用户未登录 本地存储无数据=> isLogin=false isNull=true *****************/
      if (!sUserName && !sCart) {
        console.log("用户未登录 本地存储无数据");
        // 设置标志
        this.isLogin = false;
        this.isNull = true;
        return;
      }

      /************* 2.2用户未登录 本地存储有数据=> isLogin=false isNull=false 渲染本地存储数据 *****************/
      if (!sUserName && sCart) {
        console.log("用户未登录 本地存储有数据");
        // 设置标志
        this.isLogin = false;
        this.isNull = false;
        // 渲染本地存储数据
        console.log(sCart);
        var arr = JSON.parse(sCart);
        for (var i = 0; i < arr.length; i++) {
          var name = arr[i].goods_img;
          arr[i].goods_img = require("../assets/img/" + name);
        }
        this.aGoods = arr;
        return;
      }

      /************* 2.3用户已登录 本地存储无数据=> isLogin=true *****************/
      if (sUserName && !sCart) {
        this.isLogin = true; //设置登录标志
        var oSqlData1 = await this.$axios.get(
          "http://127.0.0.1:1904/cart/" + sUserName //获取数据库数据
        );
        var aSqlData1 = oSqlData1.data.data;

        /********2.3.1数据库无数据=> isNull=true*********/
        if (aSqlData1.length <= 0) {
          console.log("用户已登录 本地存储无数据 数据库无数据");
          this.isNull = true;
          return;
        }
        /********2.3.2数据库有数据=> isNull=false 渲染数据库数据*********/
        if (aSqlData1.length > 0) {
          console.log("用户已登录 本地存储无数据 数据库有数据");
          this.isNull = false;
          // var arr =
          for (var i = 0; i < aSqlData1.length; i++) {
            var name = aSqlData1[i].goods_img;
            aSqlData1[i].goods_img = require("../assets/img/" + name);
          }
          this.aGoods = aSqlData1;
          return;
        }
      }

      /************* 2.4用户已登录 本地存储有数据=> isLogin=true isNull=false*****************/
      if (sUserName && sCart) {
        console.log("用户已登录 本地存储有数据");
        this.isLogin = true; //设置标志
        this.isNull = true;
        var aLocalDatas = JSON.parse(sCart);
        // 将本地缓存的数据写入数据库
        for (var i = 0; i < aLocalDatas.length; i++) {
          var obj = {};
          for (var key in aLocalDatas[i]) {
            obj[key] = aLocalDatas[i][key];
          }
          obj["username"] = sUserName;

          await this.$axios.post("http://127.0.0.1:1904/cart", obj);
        }
        // 读取数据库数据
        var oSqlData2 = await this.$axios.get(
          "http://127.0.0.1:1904/cart/" + sUserName
        );
        var aSqlData2 = oSqlData2.data.data;
        // 渲染页面
        for (var i = 0; i < aSqlData2.length; i++) {
          var name = aSqlData2[i].goods_img;
          aSqlData2[i].goods_img = require("../assets/img/" + name);
        }
        this.aGoods = aSqlData2;
        // this.aGoods = this.changeImgUrl(aSqlData2);
        localStorage.removeItem("cart");
      }
    },

    edit() {
      this.isEdit = !this.isEdit;
    },
    async reduce(index) {
      var iNum = this.aGoods[index].num; // 获取当前商品数量

      if (iNum >= 2) {
        iNum--; //商品数量减1
        this.aGoods[index].num = iNum; //将修改后的值渲染到页面
        var sUserName = localStorage.getItem("username"); //获取用户名
        if (sUserName) {
          // 用户已登录 修改数据库
          await this.$axios.patch(
            "http://127.0.0.1:1904/cart/" +
              this.aGoods[index].id +
              "&" +
              this.aGoods[index].num
          );
        } else {
          // 用户未登录 修改本地存储
          var sCart = localStorage.getItem("cart");
          var aCart = JSON.parse(sCart);
          aCart[index].num = iNum;
          localStorage.setItem("cart", JSON.stringify(aCart));
        }
      }
    },
    // 增
    async add(index) {
      // 获取数量
      var iNum = this.aGoods[index].num;
      // 获取商品库存量
      var datas = await this.$axios.get(
        "http://127.0.0.1:1904/goods/" + this.aGoods[index].goods_id
      );
      var iStockNum = datas.data.data[0].num;
      // 临界判断
      if (iNum < iStockNum) {
        // 数量加1
        iNum++;
        // 修改商品数量 渲染到页面
        this.aGoods[index].num = iNum;
        // 获取用户名
        var sUserName = localStorage.getItem("username"); //获取用户名
        // 判断用户登录
        if (sUserName) {
          // 用户已登录 修改数据库值
          await this.$axios.patch(
            "http://127.0.0.1:1904/cart/" +
              this.aGoods[index].id +
              "&" +
              this.aGoods[index].num
          );
        } else {
          // 用户未登录 修改本地存储
          // 用户未登录 修改本地存储
          var sCart = localStorage.getItem("cart");
          var aCart = JSON.parse(sCart);
          aCart[index].num = iNum;
          localStorage.setItem("cart", JSON.stringify(aCart));
        }
      }
    },
    // 输入数量
    async inputNum(index, num) {
      var iOriNum = this.aGoods[index].num; // 原数量
      var iCurNum = num; //当前数量

      var oData = await this.$axios.get(
        "http://127.0.0.1:1904/goods/" + this.aGoods[index].goods_id
      );
      var iStockNum = oData.data.data[0].num; //商品库存量

      var sUserName = localStorage.getItem("username"); //获取用户名

      // 去掉空格
      iCurNum = iCurNum.replace(/\s+/g, ""); //去掉输入值的空格

      // 非空判断
      if (iCurNum == "") {
        iCurNum = 1;
      }

      // 小数转为整数
      iCurNum = parseInt(iCurNum);

      // 数值范围处理
      if (iCurNum < 1) {
        iCurNum = 1;
      }

      if (iCurNum > iStockNum) {
        iCurNum = iStockNum;
      }

      // 渲染页面
      this.aGoods[index].num = iCurNum;

      // 判断用户登录
      if (sUserName) {
        // 用户已登录 修改数据库值
        await this.$axios.patch(
          "http://127.0.0.1:1904/cart/" +
            this.aGoods[index].id +
            "&" +
            this.aGoods[index].num
        );
      } else {
        // 用户未登录 修改本地存储
        // localStorage.setItem("cart", JSON.stringify(this.aGoods));
        // 用户未登录 修改本地存储
        var sCart = localStorage.getItem("cart");
        var aCart = JSON.parse(sCart);
        aCart[index].num = iCurNum;
        localStorage.setItem("cart", JSON.stringify(aCart));
      }
    },

    selectAll(result) {
      this.isSelectAll = result;
      for (var i = 0; i < this.aGoods.length; i++) {
        this.aSelectResult.push(true);
      }
    },
    selectAll2(arr) {
      this.aSelectResult = arr;
    },
    selectOne(arr) {
    
      this.aSelectResult = arr;
    },
    async remove() {
      // console.log("删除");
      var sUserName = localStorage.getItem("username");

      // 用户登录
      if (sUserName) {
        // console.log(sUserName);
        var arr = [];

        for (var i = 0; i < this.aSelectResult.length; i++) {
          // console.log("denglu:", this.aSelectResult);
          if (this.aSelectResult[i]) {
            // 去数据库删除被选择的商品
            var result = await this.$axios.delete(
              "http://127.0.0.1:1904/cart/" + this.aGoods[i].id
            );
            console.log(result);
            // this.aGoods.splice(i, 1);
          } else {
            // 将没有被选择的商品添加到数组
            arr.push(this.aGoods[i]);
          }
        }
        this.aGoods = arr;
      } else {
        // 用户未登录
        var arr = [];
        for (var i = 0; i < this.aSelectResult.length; i++) {
          if (!this.aSelectResult[i]) {
            arr.push(this.aGoods[i]);
          }
        }
        this.aGoods = arr;
        if (arr.length > 0) {
          // iCurNum;
          var sCart = localStorage.getItem("cart");
          var aCart = JSON.parse(sCart);
          var arr2 = [];
          for(var i = 0; i <this.aSelectResult.length; i++){
            if(!this.aSelectResult[i]){
              arr2.push(aCart[i]);
            }
          }
          localStorage.setItem("cart", JSON.stringify(arr2));
        } else {
          localStorage.removeItem("cart");
        }
      }
    }
  },
  created() {
    this.getDatas();
  },

  beforeMount() {
    // console.log(this.aGoods);
    for (var i = 0; i < this.aGoods.length; i++) {
      this.aSelectResult.push(true);
    }
    // console.log(this.aSelectResult);
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