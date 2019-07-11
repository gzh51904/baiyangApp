<template>
  <footer id="app_foot">
    <nav class="foot_nav">
      <li class="nav_item">
        <a href="javascript:;" :class="{'active':now===0}" @click="jumpPage('/',0)">
          <i class="iconfont icon-home"></i>
          <span>商城</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="javascript:;" :class="{'active':now===1}" @click="jumpPage('/categroy',1)">
          <i class="iconfont icon-categroy"></i>
          <span>分类</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="javascript:;" :class="{'active':now===2}" @click="jumpPage('/find',2)">
          <i class="iconfont icon-find"></i>
          <span>发现</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="javascript:;" :class="{'active':now===3}" @click="jumpPage('/cart',3)">
          <i class="iconfont icon-cart"></i>
          <span>购物车</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="javascript:;" :class="{'active':now===4}" @click="jumpPage('/member',4)">
          <i class="iconfont icon-member"></i>
          <span>我的</span>
        </a>
      </li>
    </nav>

  </footer>
</template>
<script>
export default {
  data() {
    return {
      now: 0
    };
  },
  methods: {
    jumpPage(url, index) {
      this.$router.push({
        path: url
      });
      this.now = index;
      console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped>
#app_foot {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.333333rem;
  background: #fff;
  border-top: 0.013333rem solid #cdcdcd;
  .foot_nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    .nav_item {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        .iconfont {
          display: block;
          height: 0.613333rem;
          margin-top: 0.266667rem;
          margin-bottom: 0.066667rem;
          font-size: 0.613333rem;
          line-height: 0.533333rem;
          color: #000;
          font-weight: 600;
          text-decoration: none;
        }
        span {
          display: block;
          height: 0.306667rem;
          font-size: 0.306667rem;
          line-height: 0.306667rem;
          color: #000;
          font-weight: 600;
          text-decoration: none;
        }
      }
      .active {
        text-decoration: none;
        .iconfont {
          color: red;
          text-decoration: none;
        }
        span {
          color: red;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

