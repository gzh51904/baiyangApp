<template>
  wwwws
  <div class="container-fluid" style="height:100%">
    <div class="row" style="height:100%">
      <div class="col-sm-2 admin-aside">
        <h2>后台管理系统</h2>
        <ul class="goods">
          <span>商品管理</span>
          <router-link to="/admin/goods/list">
            <!-- 以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径 -->
            d
            <li>商品列表</li>
          </router-link>
          <router-link to="/admin/goods/categories">
            <li>商品分类</li>
          </router-link>
          <router-link to="/admin/goods/addgoods">
            <li>添加商品</li>
          </router-link>
        </ul>
        <ul class="users">
          <span>用户管理</span>
          <router-link to="/admin/users/list">
            <li>用户列表</li>
          </router-link>

          <router-link to="/admin/users/adduser">
            <li>添加用户</li>
          </router-link>
        </ul>
        <ul class="order">
          <span>订单管理</span>
          <li>订单列表</li>
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
import $ from "jquery";

export default {
  data() {
    return {};
  },
  mounted() {
    var goods = $(".goods");
    var users = $(".users");
    var order = $(".order");

    var goodsLi = goods.find("li");
    var usersLi = users.find("li");
    var orderLi = order.find("li");

    goods.find("span").on("click", () => {
      goodsLi.css("display") == "none"
        ? goodsLi.css("display", "block")
        : goodsLi.css("display", "none");
    });
    users.find("span").on("click", () => {
      usersLi.css("display") == "none"
        ? usersLi.css("display", "block")
        : usersLi.css("display", "none");
    });
    order.find("span").on("click", () => {
      orderLi.css("display") == "none"
        ? orderLi.css("display", "block")
        : orderLi.css("display", "none");
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.admin-aside {
  background-color: #20222a;
  color: #c2c2c2;
  height: 100%;
  h2 {
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.32rem;
    font-weight: 800;
  }
  ul {
    font-size: 0.373333rem;
    font-weight: 600;
    line-height: 1rem;
    margin-bottom: 0.4rem;
    li {
      font-size: 0.32rem;
      display: none;
      padding-left: 0.25rem;
    }
  }
}
</style>

