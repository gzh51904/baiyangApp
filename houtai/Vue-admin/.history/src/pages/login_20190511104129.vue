<template>
<div class="login">
    <h3>欢迎登录后台管理系统</h3>

<form class="login-form">
   <div class="form-group row" >
    <label for="inputUsername" class="col-sm-3 col-form-label">User name</label>
    <div class="col-sm-9">
      <input type="password" class="form-control-sm" id="inputUsername" placeholder="User Name" >
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
    <div class="col-sm-9">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
  <button type="button" class="btn btn-success mt-3">Login</button>
</form>


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
      width:9.32rem;
        margin:0px auto;
        label{
            font-size: .32rem;
        }
        input{
           height: .6;
           ::placeholder{
               font-size: .32rem;
           }
           
        }
        button{
            margin:0 auto;
        }
    }
}
</style>


