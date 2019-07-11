<template>
    <section id="login">
        <login-close></login-close>
        <login-logo></login-logo>
        <password-login></password-login>
    </section>
</template>
<script>
import Close from '../components/login/Close.vue';
import LoginLogo from '../components/login/LoginLogo.vue';
import PasswordLogin from '../components/login/PasswordLogin.vue';
export default {
    components:{
        "login-close":Close,
        "login-logo":LoginLogo,
        "password-login":PasswordLogin
    }
    
}
</script>
<style lang="scss" scoped>

</style>