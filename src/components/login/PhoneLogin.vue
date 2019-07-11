<template>
    <div class="phone_login">
        <form action="" class="login_form">
            <ul class="login_infos">
                <li class="infos_item phone">
                    <input type="text" placeholder="请输入手机号">
                </li>
                <li class="infos_item sms_ver_code">
                    <input type="text" placeholder="请输入短信验证码!">
                    <a href="javascript:;" class="get_sms_ver_code_btn">获取验证码</a>
                </li>
            </ul>
            <a href="javascript:;" class="login_btn">登录</a>
            <div class="login_ways">
                <a href="javascript:;" @click="jumpPage('/login_pwd')">使用密码登录</a>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  methods: {
    jumpPage(url) {
      this.$router.push({
        path: url
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.phone_login {
  width: 100%;
  padding: 0 0.706667rem;
  .login_form {
    width: 100%;
    .login_infos {
      margin-bottom: 0.56rem;
      width: 100%;
      .infos_item {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 1.346667rem;
        border-bottom: 0.026667rem solid #dedede;
        input {
          width: 100%;
          height: 100%;
          border: none;
          font-size: 0.373333rem;
          color: #919191;
          line-height: 0.466667rem;
        }
        .get_sms_ver_code_btn {
          position: absolute;
          right: 0;
          top: 0.28rem;
          width: 2.533333rem;
          height: 0.573333rem;
          border-left: 0.026667rem solid gray;
          font-size: 0.333333rem;
          color: #ff0066;
          font-weight: 600;
          text-align: center;
        }
        .get_sms_ver_code_btn:hover {
          text-decoration: none;
        }
      }
    }
    .login_btn {
      display: block;
      margin-bottom: 0.533333rem;
      width: 100%;
      height: 1.12rem;
      border-radius: 0.026667rem;
      background: #cccccc;
      font-size: 0.36rem;
      color: #fff;
      text-align: center;
      line-height: 1.12rem;
    }
    .login_ways {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      height: 0.546667rem;
      a {
        font-size: 0.333333rem;
        color: #000;
      }
    }
  }
}
</style>


