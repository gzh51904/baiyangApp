<template>
  <div class="container-fluid" style="height:100%">
    <div class="row" style="height:100%">
      <div class="col-sm-2 admin-aside">
          <h2> 后台管理系统</h2>
          <ul class="goods"  >
              <span> 商品管理</span>
              <li >商品列表</li>
              <li >商品分类</li>
              <li >添加商品</li>
          </ul>
             <ul class="users"  >
                 <span>用户管理</span>
              <li >用户列表</li>
              <li >添加用户</li>
          </ul>
             <ul class="order"  >
                 <span> 订单管理</span>
              <li >订单列表</li>
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
import $ from "jquery"

export default {
    data(){
        return {}
    },
    mounted(){
        var goods =$('.goods');
        var users = $('.users');
        var order = $('.order');
        goods.find('span').on('click',(e)=>{
          

                goods.find('li').css('display')=="none" ? goods.find('li').css('display',"block") :goods.find('li').css('display',"none");
            
        })
        users.on('click',()=>{
             users.find('li').css('display')=="none" ? users.find('li').css('display',"block") :users.find('li').css('display',"none");
        })
         order.on('click',()=>{
             order.find('li').css('display')=="none" ? order.find('li').css('display',"block") :order.find('li').css('display',"none");
        })
        
    },
    methods:{
   
    }
};
</script>
<style lang="scss" scoped>
.admin-aside {
  background-color: #20222a;
      color:#C2C2C2;
      height:100%;
  h2{
      height:.96rem;
     line-height: .96rem;
      font-size: .32rem;
      font-weight: 800;
  }
  ul{
      font-size: .373333rem;
      font-weight: 600;
      line-height: 1rem;
      margin-bottom:.4rem;
      li{
      font-size: .32rem;
      display:none;
      padding-left:.25rem;    

      }
  }
}
</style>

