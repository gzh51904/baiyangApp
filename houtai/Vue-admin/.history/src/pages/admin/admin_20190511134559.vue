<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 admin-aside">
          <h2> 后台管理系统</h2>
          <ul class="goods" @click="toggle()">
              商品管理
              <li ref="list">商品列表</li>
              <li ref="categories">商品分类</li>
              <li ref="addgoods">添加商品</li>
          </ul>
             <ul class="users" @click="toggle()" >
              用户管理
              <li ref="list">用户列表</li>
             
              <li ref="adduser">添加用户</li>
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
export default {
    data(){
        return {}
    },
    mounted(){
        var goods = document.getElementsByClassName('.goods')[0];
        var users = document.getElementsByClassName('.users')[0];

        
    },
    methods:{
        toggle(){
            console.log(this.$refs)
            for(var key in this.$refs){
               this.$refs[key].style.display= this.$refs[key].style.display == "block" ? "none" : "block";
            }
            
        }
    }
};
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

