<template>
  <div class="detail_head">
    <div class="left" @click="back()">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="right">
      <i class="iconfont icon-xingxing"></i>
      <i class="iconfont icon-fenxiang"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      console.log("1222");
      this.$router.push('/');
      // this.$router.push({
      //   // path:'/'
      // });
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_head {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 1.093333rem;
  .left {
    width: 1.093333rem;
    height: 100%;
    text-align: center;
    line-height: 1.093333rem;
    .icon-back {
      font-size: 0.453333rem;
      color: #888888;
      font-weight: 600;
    }
  }
  .right {
    margin-right: 0.466667rem;
    height: 100%;
    text-align: center;
    line-height: 1.093333rem;
    .iconfont {
      margin-left: 0.266667rem;
      font-size: 0.386667rem;
      color: #888888;
      font-weight: 600;
    }
  }
}
</style>

