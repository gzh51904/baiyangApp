<template>
    <div class="goods_recommend">
        <nav class="remmend_title">
            <li class="item">
                <a href="javascript:;">相关推荐</a>
            </li>
            <li class="item">
                <a href="javascript:;">同类型热销推荐</a>
            </li>
        </nav>
        <same-type-goods></same-type-goods>
    </div>
</template>
<script>
import SameTypeGoods from "./SameTypeGoods.vue";
export default {
  components: {
    "same-type-goods": SameTypeGoods
  }
};
</script>

<style lang="scss" scoped>
.goods_recommend {
  margin-bottom: 0.28rem;
  width: 100%;
  background: #fff;
  .remmend_title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.266667rem;
    width: 100%;
    height: 1.266667rem;
    border-bottom: 0.026667rem solid #eeeeee;
    .item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      a {
        display: block;
        height: 100%;
        border-bottom: 0.053333rem solid #000;
        font-size: 0.36rem;
        color: #000;
        line-height: 1.2rem;
        text-align: center;
      }
      a:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

