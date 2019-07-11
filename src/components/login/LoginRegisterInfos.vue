<template>
    <div class="login_register_infos">
        
           <login-logo></login-logo>
            <ul class="login_infos">
                <li class="infos_item"></li>
                <li class="infos_item"></li>
                <li class="infos_item"></li>
            </ul>

        </form>
    </div>
</template>
<script>
import LoginLogo from '../components/LoginLogo.vue';
export default {
    components:{
        "login-logo":LoginLogo
    }
    
}
</script>


<style lang="scss" scoped>
.login_register_infos {
  form {
    width: 100%;
    
  }
}
</style>

