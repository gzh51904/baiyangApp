<template>
    <div class="cart_is_empty">
        <p class="cart_status_prompt">购物车是空的，您可以</p>
        <a href="javascropt:;" class="go_shopping_btn" @click="jumpToHomePage()">去逛逛</a>
    </div>
</template>

<script>
export default {
  methods:{
    jumpToHomePage(){
      this.$router.push({
        path:'/'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart_is_empty {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.36rem;
  background: #fff;
  .cart_status_prompt {
    margin-right: 0.106667rem;
    height: 0.36rem;
    font-size: 0.36rem;
    color: #999999;
    line-height: 0.36rem;
  }
  .go_shopping_btn {
    display: block;
    width: 1.88rem;
    height: 0.706667rem;
    background: #ff0066;
    border-radius: 0.026667rem;
    font-size: 0.36rem;
    color: #fff;
    line-height: 0.706667rem;
    text-align: center;
  }
  .go_shopping_btn:hover {
    text-decoration: none;
  }
}
</style>


