<template>
  <div class="topic">
    <div class="topic_pic" @click="jumpToSpecialPage(oTopic4.special_id)">
      <img :src="oTopic4.bigImg" alt="#">
    </div>
    <div class="topic_goods">
      <ul class="goods_list">
        <li class="list_item" v-for="item in oTopic4.goodsList" :key="item.id" @click="jumpToDetailPage(item.id)">
          <div class="goods_pic">
            <img :src="item.img_url" alt="#">
          </div>
          <div class="goods_infos">
            <div class="goods_name">
              <p v-text="item.name"></p>
            </div>
            <div class="goods_price">
              <p class="current_price">￥{{item.cur_price}}</p>
              <del class="origin_price">￥{{item.ori_price}}</del>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oTopic4: {
        special_id: 18,
        bigImg: require("../../assets/img/special18.png"),
        goodsList: []
      }
    };
  },
  methods: {
    async getSpecialDatas(special_name, oTopic) {
      var datas = await this.$axios.get(
        "http://127.0.0.1:1904/special/" + special_name
      );
      var arr = datas.data.data;
      for (var i = 0; i < arr.length; i++) {
        arr[i].img_url = require("../../assets/img/" +
          arr[i].img_url.split(";")[0]);
      }
      oTopic.goodsList = arr;
    },
    jumpToSpecialPage(special_id) {
      this.$router.push({
        path: "/special",
        query: {
          special_id: special_id
        }
      });
    },
    jumpToDetailPage(goods_id) {
      this.$router.push({
        path: "/detail",
        query: {
          goods_id: goods_id
        }
      });
    }
  },
  created() {
    this.getSpecialDatas("维生素A", this.oTopic4);
  }
};
</script>

<style lang="scss" scoped>
.topic {
  margin-bottom: 0.333333rem;
  .topic_pic {
    margin-bottom: 0.133333rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.266667rem;
    img {
      height: 100%;
    }
  }
  .topic_goods {
    width: 100%;
    overflow-x: scroll;
    .goods_list {
      display: flex;
      flex-direction: row;
      align-items: center;
      .list_item {
        display: flex;
        flex-direction: column;
        width: 2.92rem;
        height: 5.04rem;
        .goods_pic {
          margin-bottom: 0.266667rem;
          width: 2.693333rem;
          height: 2.693333rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .goods_infos {
          // width:
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .goods_name {
            width: 2.693333rem;
            padding: 0 0.266667rem;
            p {
              width: 100%;
              font-size: 0.333333rem;
              color: #000;
              line-height: 0.44rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
          .goods_price {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 0.266667rem;
            width: 2.693333rem;
            height: 0.586667rem;
            .current_price {
              font-size: 0.253333rem;
              color: #ff0066;
              font-weight: 600;
            }
            .origin_price {
              font-size: 0.253333rem;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>

