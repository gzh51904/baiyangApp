<template>
    <section id="login">
        <login-close></login-close>
        <login-logo></login-logo>
        <phone-login></phone-login>
    </section>
</template>
<script>
import Close from '../components/login/Close.vue';
import LoginLogo from '../components/login/LoginLogo.vue';
import PhoneLogin from '../components/login/PhoneLogin.vue';
export default {
    components:{
        "login-close":Close,
        "login-logo":LoginLogo,
        "phone-login":PhoneLogin
    }
    
}
</script>
<style lang="scss" scoped>
#login{
    // width: 100%;
    // height: 100%;
}

</style>






