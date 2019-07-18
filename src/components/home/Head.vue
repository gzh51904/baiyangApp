<template>
  <header id="app_head">
    <div class="head_inner">
      <div class="search" @click="jumpToSearchPage()">
        <div class="search_pic">
          <i class="iconfont icon-search"></i>
        </div>
        <p class="input">儿童钙铁</p>
      </div>
      <div class="user" @click="jumpToMemberPage()">
        <i class="iconfont icon-member"></i>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    jumpToSearchPage() {
      this.$router.push({
        path: "/search"
      });
    },
    jumpToMemberPage() {
      this.$router.push({
        path: "/member"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#app_head {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.2rem 0.4rem;
  width: 100%;
  height: 1.2rem;
  background: #ff0066;

  .head_inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    .search {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      height: 100%;
      border-radius: 0.32rem;

      .search_pic {
        width: 0.96rem;
        height: 100%;
        border-top-left-radius: 0.306667rem;
        border-bottom-left-radius: 0.306667rem;
        text-align: center;
        line-height: 0.8rem;
        .iconfont {
          font-size: 0.466667rem;
          color: gray;
        }
      }

      .input {
        flex: 1;
        height: 100%;
        border-top-right-radius: 0.306667rem;
        border-bottom-right-radius: 0.306667rem;
        border: none;
        font-size: 0.426667rem;
        color: gray;
        line-height: 0.8rem;
      }
    }
    .user {
      margin-left: 0.373333rem;
      padding-top: 0.133333rem;
      width: 0.56rem;
      height: 100%;
      .iconfont {
        display: block;
        height: 0.56rem;
        font-size: 0.56rem;
        color: #ffffff;
        font-weight: 600;
        line-height: 0.56rem;
      }
    }
  }
}
</style>

