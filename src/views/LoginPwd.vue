<template>
    <section id="login_pwd">
        <login-close></login-close>
        <login-logo></login-logo>
        <password-login></password-login>
    </section>
</template>
<script>
import { mapMutations } from "vuex";
import Close from "../components/login/Close.vue";
import LoginLogo from "../components/login/LoginLogo.vue";
import PasswordLogin from "../components/login/PasswordLogin.vue";
export default {
  components: {
    "login-close": Close,
    "login-logo": LoginLogo,
    "password-login": PasswordLogin
  },
  methods: {
    ...mapMutations(["displayFoot"])
  },

  created() {
    //隐藏foot
    // console.log("created");
    this.displayFoot(false);
    // console.log(this.$store);
  },
  destroyed() {
    //   console.log("login_pwd",this.$store);
    this.displayFoot(true);
  }
};
</script>
<style lang="scss" scoped>
</style>