<template>
<div class="login">
    <h3>欢迎登录后台管理系统</h3>
    <div class="login-form">
        <div class="login-form-item">
            <span>用户名</span>
            <input type="text" id="username">
        </div>
        <div>
              <span>密码</span>
            <input type="password" id="password">
        </div>
        <div>
            <button>Login</button>
        </div>
    </div>


</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.login{
    margin: 2rem auto;
    overflow:hidden;
    width: 12rem;
    height:11.333333rem;
    /* height:5rem; */
    background-color:#58bc58;
    padding-top:.013333rem;
    h3{
        margin: .666667rem auto;
        text-align: center;
        font-size: .6rem;
        font-weight: 500;
    }
    .login-form{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        span{
            float:left;
            width:.8rem;
            text-align: right;
        }
    }

}
</style>


