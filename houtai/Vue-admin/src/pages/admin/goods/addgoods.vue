<template>
  <div>
    <div class="row">
      <span>商品名称:</span>
      <input type="text" v-model="goods.name">
      <br>
    </div>
    <div class="row">
      <span>商品价格:</span>
      <input type="text" v-model="goods.price">
      <br>
    </div>
    <div class="row">
      <span>商品原价:</span>
      <input type="text" v-model="goods.del_price">
      <br>
    </div>
    <div class="row">
      <span>库存:</span>
      <input type="text" v-model="goods.xiaoliang">
      <br>
    </div>
    <div class="row">
      <span>数量:</span>
      <input type="text" v-model="goods.qty">
    </div>
    <div class="row">
      <span>图片:</span>
      <input type="text" v-model="goods.imgurl">
    </div>
    <div class="confirmation">
      <!-- <button @click="cancel" >取消</button> -->
      <button @click="confirm">确认添加</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: []
    };
  },
  methods: {
    confirm() {
      let params = this.goods;
      params = this.$qs.stringify(params);
      console.log(this.goods);
      this.$axios.post("/api/goods", params).then(({ data }) => {
        console.log(data);
      });
      this.$message("添加成功")
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  margin: 0.4rem auto;
  span {
    width: 3rem;
    text-align: right;
    float: left;
    margin-right: 0.5rem;
    font-size: 0.3rem;
    font-weight: 900;
  }
  input {
    width: 5rem;
    height: 1rem;
  }
  button {
    display: block;
    margin: 0.266667rem auto;
    width: 1.5rem;
    height: 1rem;
  }
}
</style>


