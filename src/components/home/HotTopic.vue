<template>
  <section class="hot_topic">
    <div class="hot_topic_title">
      <h2>热门专题</h2>
    </div>
    <!-- 面部护理 -->
    <topic1></topic1>
    <!-- 逆龄养颜 -->
    <topic2></topic2>
    <!-- 增肌 -->
    <topic3></topic3>
    <!-- 维生素A -->
    <topic4></topic4>
    <!-- 心脑保健 -->
    <topic5></topic5>
    <!-- 儿童玩具 -->
    <topic6></topic6>
    <!-- 家庭常备 -->
    <topic7></topic7>
    <!--  亲肤有道-->
    <topic8></topic8>

  </section>
</template>
<script>
import Topic1 from "./Topic1.vue";
import Topic2 from "./Topic2.vue";
import Topic3 from "./Topic3.vue";
import Topic4 from "./Topic4.vue";
import Topic5 from "./Topic5.vue";
import Topic6 from "./Topic6.vue";
import Topic7 from "./Topic7.vue";
import Topic8 from "./Topic8.vue";

export default {
  data() {
    return {
      // oTopic1: {
      //   special_id: 15,
      //   bigImg: require("../../assets/img/special15.png"),
      //   goodsList: []
      // },
      // oTopic2: {
      //   special_id: 16,
      //   bigImg: require("../../assets/img/special16.png"),
      //   goodsList: []
      // },
      // oTopic3: {
      //   special_id: 17,
      //   bigImg: require("../../assets/img/special17.png"),
      //   goodsList: []
      // },
      // oTopic4: {
      //   special_id: 18,
      //   bigImg: require("../../assets/img/special18.png"),
      //   goodsList: []
      // },
      // oTopic5: {
      //   special_id: 19,
      //   bigImg: require("../../assets/img/special19.png"),
      //   goodsList: []
      // },
      // oTopic6: {
      //   special_id: 20,
      //   bigImg: require("../../assets/img/special20.png"),
      //   goodsList: []
      // },
      // oTopic7: {
      //   special_id: 21,
      //   bigImg: require("../../assets/img/special21.png"),
      //   goodsList: []
      // },
      // oTopic8: {
      //   special_id: 12,
      //   bigImg: require("../../assets/img/special22.png"),
      //   goodsList: []
      // }
    };
  },
  components: {
    Topic1,
    Topic2,
    Topic3,
    Topic4,
    Topic5,
    Topic6,
    Topic7,
    Topic8
  },
  methods: {
    // async getSpecialDatas(special_name, oTopic) {
    //   var datas = await this.$axios.get(
    //     "http://127.0.0.1:1904/special/" + special_name
    //   );
    //   var arr = datas.data.data;
    //   for (var i = 0; i < arr.length; i++) {
    //     arr[i].img_url = require("../../assets/img/" +
    //       arr[i].img_url.split(";")[0]);
    //   }
    //   oTopic.goodsList = arr;
    //   // console.log(this.oTopic1);
    // }
  },
  created() {
    // this.getSpecialDatas("面部护理", this.oTopic1);
    // this.getSpecialDatas("逆龄养颜", this.oTopic2);
    // this.getSpecialDatas("增肌", this.oTopic3);
    // this.getSpecialDatas("维生素A", this.oTopic4);
    // this.getSpecialDatas("心脑保健", this.oTopic5);
    // this.getSpecialDatas("儿童玩具", this.oTopic6);
    // this.getSpecialDatas("家庭常备", this.oTopic7);
    // this.getSpecialDatas("亲肤有道", this.oTopic8);
    // consol
    // this.getSpecialDatas("");
  }
};
</script>
<style lang="scss" scoped>
.hot_topic {
  padding: 0 0.333333rem;
  .hot_topic_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.373333rem;
    height: 2.04rem;
    h2 {
      height: 0.933333rem;
      font-size: 0.466667rem;
      color: #000;
      line-height: 0.933333rem;
      font-weight: 600;
    }
  }
}
</style>

