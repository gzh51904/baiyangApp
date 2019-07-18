<template>
<div class="login">
    <h3>Welcome to VUE-ADMIN SYSTEM</h3>
    <div class="login-form">
        <div class="login-form-item">
            <span>UserName:</span>
            <input type="text" id="username" placeholder="For example: Rae" v-model="username" @blur="checkName">
            <strong class="alert">用户名不符合规范</strong>
        </div>
        <div  class="login-form-item">
              <span>Password:</span>
            <input type="password" id="password" placeholder="For example:123456" v-model="password" @blur="checkPassword">
        </div>
        <div  class="login-form-item">
            <button class="login-btn">Login</button>
        </div>
    </div>


</div>
</template>
<script>
export default {
    data(){
        return {
            username:null,
            password:null

        }
    },
    methods:{
        checkName(){
            
        },
        checkPassword(){

        }

    }
}
</script>
<style lang="scss" scoped>
*{
    padding:0px;
    margin:0px;
}
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
        margin-bottom:1rem;
    }
    .login-form{

        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        .login-form-item{
            height:2rem;
            font-size: .373333rem;
        
        span{
            float:left;
            width:2rem;
            text-align: right;
            margin-right: .266667rem;
            font-weight: 600;
        }
        input{
            width:4.5rem;
            border-radius: 5%;
       
       ::placeholder{
           color: #aaa;
       }
         }
         button{
             background-color:#aaa;
             padding:0 .2rem;
             border-radius:10%;
         }
        }
        }
    }


</style>


