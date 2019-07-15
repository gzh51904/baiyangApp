<template>
  <div class="cart_goods">
    <ul class="goods_list">
      <li class="list_item" v-for="(item,index) in aGoods" :key="item.goods_id">
        <div class="title">
          <input type="checkbox" checked class="check_all" @click="selectAll(index)" ref="selectAll">
          <i class="iconfont icon-dianpu shop_icon"></i>
          <a href="javascript:;" class="shop_name">百洋健康官方自营店&nbsp;&gt;</a>
        </div>
        <div class="goods">
          <input type="checkbox" checked class="check_one" @click="selectOne(index)" ref="selectOne">
          <div class="goods_pic">
            <a href="javascript:;">
              <img :src="'/images/'+item.goods_img" alt="#">
            </a>
          </div>
          <div class="goods_infos">
            <h2 class="goods_name">
              <a href="javascript:;">
                {{item.goods_name}}
              </a>
            </h2>
            <div class="goods_price_num">
              <p class="goods_price">￥{{item.price}}</p>
              <div class="goods_num">
                <a href="javascript:;" class="reduce_btn" @click="reduce(index)">-</a>
                <input type="number" class="num" :value="item.num" @blur="inputNum(index)" ref="inputNum">
                <a href="javascript:;" class="add_btn" @click="add(index)">+</a>
              </div>
            </div>
          </div>

        </div>
      </li>
    </ul>

    <!-- 全选 删除 -->
    <!-- <div class="delete_goods">
      <div class="select_all">
        <input type="checkbox" checked>
        <span>全选</span>
      </div>
      <a href="javascript:;" class="delete_btn">删除</a>
    </div> -->

  </div>
</template>
<script>
export default {
  props: {
    aGoods: {
      type: Array
    }
  },
  methods: {
    // 深拷贝
    extend(obj1, obj2) {
      for (var key in obj2) {
        obj1[key] = obj2[key];
      }
    },
    async reduce(index) {
      // 获取商品数量
      var iNum = this.aGoods[index].num;
      // 如果当前商品数量大于或等于2，数量减1，否则不做处理
      if (iNum >= 2) {
        iNum--; //商品数量减1
        this.aGoods[index].num = iNum; //将修改后的值渲染到页面
        var sUserName = localStorage.getItem("username"); //获取用户名
        if (sUserName) {
          // 如果用户登录了账户,每次改变数量，就修改数据库的值
          var obj = {};
          this.extend(obj, this.aGoods[index]);
          // console.log(obj);
          obj.num = -1;
          obj["username"] = sUserName;
          //去数据库修改商品的数量
          await this.$axios.post("http://127.0.0.1:1904/cart", obj);
        } else {
          // 如果用户没有登录账户，每次改变数量，就修改本地存储中商品的值
          var sCart = JSON.stringify(this.aGoods);
          localStorage.setItem("cart", sCart);
        }
      }
    },
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
        // 修改商品数量
        this.aGoods[index].num = iNum;
        // 获取用户名
        var sUserName = localStorage.getItem("username"); //获取用户名
        // 判断用户登录
        if (sUserName) {
          // 如果用户登录了账户,每次改变数量，就修改数据库的值
          var obj = {};
          this.extend(obj, this.aGoods[index]);
          // console.log(obj);
          obj.num = 1;
          obj["username"] = sUserName;
          //去数据库修改商品的数量
          await this.$axios.post("http://127.0.0.1:1904/cart", obj);
        } else {
          // 如果用户没有登录账户，每次改变数量，就修改本地存储中商品的值
          var sCart = JSON.stringify(this.aGoods);
          localStorage.setItem("cart", sCart);
        }
      }
      // console.log(iStockNum);
    },
    async inputNum(index) {
      var iNum = this.$refs.inputNum[index].value; // 获取数入数量
      var iOldNum = this.aGoods[index].num; // 原来的数量
      var datas = await this.$axios.get(
        "http://127.0.0.1:1904/goods/" + this.aGoods[index].goods_id //查询库存，获取商品的库存量
      );
      var iStockNum = datas.data.data[0].num; //商品库存量
      var sUserName = localStorage.getItem("username"); //获取用户名

      // 用户未登录
      if (!sUserName) {
        // 非空判断
        var iNum = iNum.replace(/\s+/g, ""); //去掉输入全部空格
        if (iNum == "") {
          console.log("输入为空");
          iNum = 1;
        }
        // 输入是否为整数
        iNum = parseInt(iNum);

        // 输入范围判断
        if (iNum < 1) {
          console.log("小于1");
          iNum = 1;
        }

        if (iNum > iStockNum) {
          console.log("大于库存");
          iNum = iStockNum; //
        }

        this.aGoods[index].num = iNum; //修改数量，渲染页面
        var sCart = JSON.stringify(this.aGoods); //将数组转为字符串
        localStorage.setItem("cart", sCart); //将修改后的数据存储到本地
        return;
      }
      // 用户已登录
      if (sUserName) {
        console.log("用户已经登录");
        // 处理输入的数据
        var iNum = iNum.replace(/\s+/g, ""); //去掉输入全部空格
        if (iNum == "") {
          console.log("输入为空");
          iNum = 1;
        }
        // 输入是否为整数
        iNum = parseInt(iNum);

        // 输入范围判断
        if (iNum < 1) {
          console.log("小于1");
          iNum = 1;
        }

        if (iNum > iStockNum) {
          console.log("大于库存");
          iNum = iStockNum; //
        }
        // 修改数量 渲染页面
        this.aGoods[index].num = iNum; //修改数量，渲染页面

        // 将修改值写入数据库
        // 新旧数据对比
        // 新值 < 旧值
        var iNum2 = iNum - iOldNum;

        var obj = {};
        this.extend(obj, this.aGoods[index]);
        // console.log(obj);
        obj.num = iNum2;
        obj["username"] = sUserName;
        //去数据库修改商品的数量
        await this.$axios.post("http://127.0.0.1:1904/cart", obj);
      }
    },
    // 全选
    async selectAll(index) {
      this.$refs.selectOne[index].checked = this.$refs.selectAll[index].checked;
      
    },
    async selectOne(index) {
      
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.cart_goods {
  width: 100%;
  .goods_list {
    width: 100%;
    .list_item {
      margin-bottom: 0.293333rem;
      width: 100%;
      height: 4.16rem;
      border-top: 0.013333rem solid #ccc;
      border-bottom: 0.013333rem solid #ccc;
      background: #fff;
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 0.266667rem;
        width: 100%;
        height: 1.2rem;
        border-bottom: 0.013333rem solid #ccc;
        .check_all {
          margin-right: 0.266667rem;
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #ff0066;
        }
        .check_one {
          margin-right: 0.266667rem;
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #ff0066;
        }
        .shop_icon {
          margin-right: 0.186667rem;
          font-size: 0.4rem;
          color: #000;
        }
        .shop_name {
          font-size: 0.32rem;
          color: #000;
          line-height: 0.32rem;
        }
      }
      .goods {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 0 0.266667rem;
        width: 100%;
        height: 2.906667rem;
        .check_btn {
          margin-right: 0.266667rem;
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: #ff0066;
        }
        .goods_pic {
          margin-right: 0.533333rem;
          width: 1.813333rem;
          height: 1.813333rem;
          a {
            display: block;
            width: 100%;
            height: 100%;
            img {
              width: 100;
              height: 100%;
            }
          }
          a:hover {
            text-decoration: none;
          }
        }
        .goods_infos {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 0.266667rem;
          padding-bottom: 0.32rem;
          height: 100%;
          width: 6.426667rem;
          .goods_name {
            width: 100%;
            a {
              display: block;
              width: 100%;
              font-size: 0.346667rem;
              color: #000;
              line-height: 0.32rem;
            }
            a:hover {
              text-decoration: none;
            }
          }
          .goods_price_num {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 0.613333rem;
            width: 100%;
            .goods_price {
              font-size: 0.266667rem;
              color: #000;
              line-height: 0.613333rem;
            }
            .goods_num {
              display: flex;
              flex-direction: row;
              align-items: center;
              height: 100%;
              //   border: 0.013333rem solid #cccccc;
              //   border-radius: 0.053333rem;
              a {
                display: block;
                width: 0.666667rem;
                height: 0.613333rem;
                background: #fafafa;
                font-size: 0.266667rem;
                text-align: center;
                line-height: 0.56rem;
                color: #ccc;
              }
              a:hover {
                text-decoration: none;
              }
              .reduce_btn {
                border: 0.013333rem solid #ccc;
                border-top-left-radius: 0.053333rem;
                border-bottom-left-radius: 0.053333rem;
              }
              .add_btn {
                border: 0.013333rem solid #ccc;
                border-top-right-radius: 0.053333rem;
                border-bottom-right-radius: 0.053333rem;
              }
              .num {
                display: block;
                width: 0.8rem;
                height: 100%;
                border-top: 0.013333rem solid #ccc;
                border-bottom: 0.013333rem solid #ccc;
                font-size: 0.266667rem;
                text-align: center;
                line-height: 0.56rem;
                color: #000;
              }
            }
          }
        }
      }
    }
  }
  .delete_goods {
    padding: 0 0.266667rem;
    position: fixed;
    left: 0;
    bottom: 1.333333rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.453333rem;
    background: #fff;
    .select_all {
      span {
        font-size: 0.266667rem;
        color: #000;
      }
    }
    .delete_btn {
      width: 1.6rem;
      height: 1.066667rem;
      background: red;
      font-size: 0.266667rem;
      color: #fff;
      line-height: 1.066667rem;
      text-align: center;
    }
  }
}
</style>

