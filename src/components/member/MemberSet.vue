<template>
  <header class="member_set">
    <p class="set_btn" @click="jumpToSetPage()">
      <i class="iconfont icon-setting"></i>
    </p>
  </header>
</template>
<script>
export default {
  methods: {
    jumpToSetPage() {
      var sUserName = localStorage.getItem("username");
      //
      if (sUserName) {
        //用户已经登录
        this.$router.push({
          path: "/member/setting"
        });
      } else {
        // 用户未登录
        this.$router.push({
          path: "/login"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.member_set {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 1.12rem;
  background: #ef3c79;
  .set_btn {
    width: 1.093333rem;
    height: 100%;
    text-align: center;
    line-height: 1.12rem;
    .iconfont {
      display: block;
      font-size: 0.6rem;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>

