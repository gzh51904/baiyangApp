<template>
    <header class="head">
        <i class="iconfont icon-erweima"></i>
        <div class="search_box">
            <input type="text" class="search">
            <i class="iconfont icon-search"></i>
        </div>
        <i class="iconfont icon-member"></i>
    </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.head {
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.16rem 0.333333rem 0.186667rem 0.333333rem;
  width: 100%;
  height: 1.146667rem;
  border-bottom: 0.013333rem solid #dedede;
  .iconfont {
    color: #7a7a7a;
    font-weight: 600;
  }
  .icon-erweima {
    font-size: 0.8rem;
  }
  .icon-member {
    font-size: 0.533333rem;
  }
  .search_box {
    position: relative;
    width: 7.493333rem;
    height: 100%;
    border-radius: 0.333333rem;
    background: #ededed;
    font-size: 0.32rem;
    color: #7a7a7a;
    line-height: 0.773333rem;
    .search {
      padding-left: 0.96rem;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 0.333333rem;
      background: #ededed;
      border: none;
    }
    i {
      position: absolute;
      left: 0.333333rem;
      top: 0.08rem;
      font-size: 0.4rem;
      color: #7a7a7a;
    }
  }
}
</style>

