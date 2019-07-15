<template>
    <div class="container" >
    <div class="c_left" >
       <div class="victim1" v-if="loading" v-for="(tab,idx) of goodsLeft" :key="idx" @click="changTab(tab.id)" >
         <img src="../../static/img/pin9.jpg" alt="" >
         <h3>{{goodsLeft[idx].name}}</h3>
         <p>{{goodsLeft[idx].branch}}</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <!-- <div class="victim1">
         <img src="../../assets/img/faxian4.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../../assets/img/faxian5.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div> -->
    </div>
    <div class="c_right">
      <div class="victim1" v-if="loading" v-for="(tab,idx) of goodsRight" :key="idx" @click="changTab(tab.id)">
         <img src="../../static/img/pin1.jpg" alt="">
         <h3>{{goodsLeft[idx].name }}</h3>
         <p>{{goodsRight[idx].branch}}</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <!-- <div class="victim1">
         <img src="../../assets/img/faxian3.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../../assets/img/faxian6.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // goods: []
      loading: false,
      goodsLeft: [],
      goodsRight: [],
      goodsImgLeft: [],
      goodsImgRight: []
    };
  },
  methods: {
    changTab: function(id) {
      this.$router.push({ name: "detail", query: { goods_id: id } });
      console.log(id);
    }
  },
  async created() {
    const datas = await this.$axios.get("http://127.0.0.1:1904/find/小百科");
    console.log(datas.data.data);
    this.loading = true;
    this.goodsLeft = datas.data.data.slice(0, 80);
    this.goodsRight = datas.data.data.slice(80, -1);
    this.goodsImgLeft = this.goodsLeft.map(function(item) {
      return item.img_url.split(";")[0];
    });

    console.log(this.goodsImgLeft);
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0.32rem;
  padding-left: 0.213333rem;
  display: flex;
  flex: 1;
  // justify-content: left;
  .c_left {
    width: 4.613333rem;
    margin-right: 0.266667rem;
    .victim1 {
      display: flex;
      // flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 0.32rem;
      img {
        width: 100%;
        border-radius: 8px;
      }
      h3 {
        width: 100%;
        margin: 0.2rem 0;
        padding: 0 3px 0 3px;
      }
      p {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        color: #999;
      }
      h5 {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        font-weight: bold;
      }
    }
  }
  .c_right {
    width: 4.613333rem;
    .victim1 {
      display: flex;
      // flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 0.32rem;
      img {
        width: 100%;
        border-radius: 8px;
      }
      h3 {
        width: 100%;
        margin: 0.2rem 0;
        padding: 0 3px 0 3px;
      }
      p {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        color: #999;
      }
      h5 {
        width: 100%;
        margin: 0.106667rem 0;
        padding: 0 3px 0 3px;
        font-size: 0.373333rem;
        font-weight: bold;
      }
    }
  }
}
</style>