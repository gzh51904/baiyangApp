<template>
  <section class="pinpaiqiang">
    <ul class="goods_list">
      <li class="list_item" v-for="item in goods" :key="item.id">
        <a href="javascript:;">
          <div class="goods">
            <div class="goods_pic">
              <img :src="item.img_url" alt="#" />
            </div>
            <div class="goods_infos">
              <h3 class="goods_name" v-text="item.name"></h3>
              <p class="goods_des" v-text="item.des"></p>
            </div>
          </div>
          <div class="goods_jump_btn">
            <span class="icon">&gt;</span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      goods: [
      ]
    };
  },

  methods: {},

  async created() {
    let goodlist = await this.$axios.get("http://localhost:1904/find/小百科");
    console.log(goodlist);
    let lists = [];
    for (var i = 0; i < goodlist.data.data.length; i++) {
      // console.log(goodlist.data.data[i].name);
      let imgurl = require("../../../public/api_img/" +
        goodlist.data.data[i].img_url
          .split(";")
          .slice(0, 1)
          .join(""));
      // console.log(imgurl);
      lists.push({
        img_url: imgurl,
        name: goodlist.data.data[i].name,
        des: goodlist.data.data[i].des,
        id: goodlist.data.data[i].id
      });
    }
    console.log(lists);
    this.goods=lists;
    // this.list = lists;
  }
};
</script>

<style lang="scss" scoped>
.pinpaiqiang {
  padding-right: 0.306667rem;
  padding-top: 0.4rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .goods_list {
    width: 100%;
    .list_item {
      width: 100%;
      height: 1.84rem;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        // padding-left: 0.133333rem;
        width: 100%;
        height: 100%;
        .goods {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 6rem;
          height: 100%;
          .goods_pic {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-left: 0.133333rem;
            width: 1.986667rem;
            height: 100%;
            img {
              width: 1.28rem;
              height: 1.28rem;
            }
          }
          .goods_infos {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            height: 0.933333rem;
            width: 4rem;
            // flex: 1;
            .goods_name {
              width: 100%;
              font-size: 0.333333rem;
              color: #000;
              line-height: 0.333333rem;
              white-space: nowrap; //强制文本在一行显示
              overflow: hidden; //溢出隐藏
              text-overflow: ellipsis; //溢出文本显示省略号
            }
            .goods_des {
              width: 100%;
              font-size: 0.333333rem;
              color: #000;
              line-height: 0.333333rem;
              white-space: nowrap; //强制文本在一行显示
              overflow: hidden; //溢出隐藏
              text-overflow: ellipsis; //溢出文本显示省略号
            }
          }
        }
        .goods_jump_btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 0.266667rem;
          height: 100%;
          .icon {
            font-size: 0.2rem;
            color: #000;
          }
        }
      }
    }
  }
}
</style>

