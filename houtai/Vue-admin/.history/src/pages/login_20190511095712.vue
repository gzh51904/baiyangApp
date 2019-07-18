<template>
<div class="login">
    <h3>欢迎登录后台管理系统</h3>

<form class="login-form">
   <div class="form-group row">
    <label for="inputUsername" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputUsername" placeholder="Password">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
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
    width: 10rem;
    /* height:5rem; */
    background-color:#58bc58;
    padding-top:.013333rem;
    h3{
        margin: .133333rem auto;
        font-size: .2rem;
    }
    .login-form{
        width:5rem;
        margin:0px auto;
    }
}
</style>


