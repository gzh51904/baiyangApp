<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 admin-aside">
          <h2> 后台管理系统</h2>
          <ul class="goods">
              商品管理
              <li>商品列表</li>
              <li>商品分类</li>
              <li>添加商品</li>
          </ul>
             <ul class="users">
              用户管理
              <li>用户列表</li>
             
              <li>添加用户</li>
          </ul>
      </div>
    


      <div class="col-sm-10" style="background-color:blue;height:200px;">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Goods</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">GoodsList</li>
          </ol>
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.admin-aside {
  background-color: #20222a;
      color:#C2C2C2;
  h2{
      height:.96rem;
     line-height: .96rem;
      font-size: .32rem;
      font-weight: 800;
  }
  ul{
      font-size: .373333rem;
      font-weight: 600;
      li{
      font-size: .32rem;
      display:none;

      }
  }
}
</style>

