<template>
  <div class="nctouch-main-layout mt43" id="wx_ui">
    <div id="product_list" class="grid">
      <ul class="goods-secrch-list">
        <li class="goods-item" v-for="item in list" :key="item.id" @click="goto(item.id)">
          <span class="goods-pic">
            <!--商品标签-->
            <a href="#">
              <img :src="item.img" />
            </a>
          </span>
          <dl class="goods-info">
            <dt class="goods-country">
              <span
                class="country-img"
                style="background: url(https://b2cstatic.baiyangwang.com/shop/brand/05894707740194752_small.jpg);"
              ></span>

              <span class="country-name">日本</span>

              <span class="gc-name">润肤和精华</span>
            </dt>
            <dd class="goods-name">
              <div
                style="font-size: 15px;word-break: break-all;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;"
              >
                <a @click="goto(item.id)"
                  style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;"
                >{{item.name}}</a>
              </div>
            </dd>
            <dd class="goods-ad">111</dd>
            <dd class="goods-message">
              <span class="message-style1">自营</span>
            </dd>
            <dd class="goods-sale">
              <a href="#" @click="goto(item.id)">
                <span class="goods-price">
                  ￥
                  <em>{{item.price}}</em>
                  <span class="goods-price-pre">￥680.00</span>
                </span>
              </a>
            </dd>
          </dl>
        </li>
        <li class="loading">
          <div class="spinner">
            <i></i>
          </div>商品数据读取中...
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from "../../eventVue";
export default {
  data() {
    return {
      list: [
      ],
      sort: true
    };
  },

  methods: {
    goto(id) {
      this.$router.push('detail?goods_list='+id);
      // console.log("detail?goods_list=" + id);
    }
  },

  async created() {
    bus.$on("msg", e => {
      this.sort = !this.sort;
      console.log("接受值", e);
      if (this.sort) {
        return this.list.sort((a, b) => a.price - b.price); //升序
      } else {
        return this.list.sort((a, b) => b.price - a.price); //降序
      }
    });

    let goodlist = await this.$axios.get("http://localhost:1904/goods");
    console.log(goodlist);
    let lists = [];
    for (var i = 0; i < goodlist.data.data.length; i++) {
      // console.log(goodlist.data.data[i].name);
      let imgurl = require("../../assets/img/" +
        goodlist.data.data[i].img_url
          .split(";")
          .slice(0, 1)
          .join(""));
      // console.log(imgurl);
      lists.push({
        img: imgurl,
        name: goodlist.data.data[i].name,
        price: goodlist.data.data[i].ori_price,
        id: goodlist.data.data[i].id
      });
    }
    console.log(lists);
    this.list = lists;
    // this.goodsList = list;
  }
};
</script>


<style lang="scss" scoped>
.nctouch-main-layout {
  display: flex;
  margin-top: 2.2rem;
  margin-bottom: 1.4rem;
  z-index: -1;
  flex: 1;
  //   margin-top: 4.3rem;
  .goods-secrch-list {
    font-size: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .goods-item {
      background-color: #fff;
      vertical-align: top;
      display: inline-block;
      width: 48%;
      margin: 0.2rem 0 1px 0;
      position: relative;
      z-index: 1;
      overflow: hidden;
      padding: 0.4rem 0 0.15rem 0;
      border-radius: 0.3rem;
      margin-left: 1.3%;
      .goods-pic {
        display: block;
        width: 4.8rem;
        height: 4.8rem;
        margin: 0rem auto 0.2rem auto;
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
          }
        }
      }
      .goods-info {
        display: block;
        padding: 0.1rem 0.5rem;
        border-top: 1px solid #eee;
        .goods-country {
          color: #aeb9d3;
          height: 0.6rem;
          font-size: 0.3rem;
          position: absolute;
          top: 0.21rem;
          left: 0.24rem;
          .country-img {
            width: 0.55rem;
            height: 0.55rem;
            display: inline-block;
            background-size: cover !important;
            border-radius: 50%;
            position: relative;
            top: 0.06rem;
          }
          .gc-name {
            display: none;
          }
        }
        .goods-name {
          display: block;
          min-height: 0.54rem;
          overflow: hidden;
          padding-bottom: 0.03rem;
          a {
            color: #333;
            font-size: 0.36rem;
            line-height: 0.54rem;
            height: 1.08rem;
          }
        }
        .goods-message {
          font-size: 0.27rem;
          height: 0.54rem;
          margin-top: 0.06rem;
          span {
            color: #ff0066;
            padding: 0.01rem 0.1rem;
            border-radius: 0.4rem;
            border: 1px solid #ff0066;
            line-height: 0.48rem;
          }
        }
        .goods-sale {
          display: inline-block;
          height: 0.54rem;
          overflow: hidden;
          margin-top: 0.06rem;
          a {
            display: block;
            color: #333;
            font-size: 0.36rem;
            line-height: 0.54rem;
            height: 1.08rem;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            .goods-price {
              color: #ff0066;
              font-size: 0.48rem;
              line-height: 0.57rem;
              display: block;
              float: left;
              font-weight: 600;
              em {
                font-size: 0.43rem;
                line-height: 0.54rem;
                vertical-align: top;
                display: inline-block;
                font-weight: bold;
              }
              .goods-price-pre {
                text-decoration: line-through;
                color: #999;
                font-size: 0.35rem;
                position: absolute;
                top: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
