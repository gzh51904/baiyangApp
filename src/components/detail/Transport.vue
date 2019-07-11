<template>
    <div class="transport_infos">
        <ul class="infos_list">
            <li class="list_item">
                <p class="title">领卷</p>
                <p class="content">
                    <span>免运费</span>
                    <i class="iconfont icon-sandian"></i>
                </p>
            </li>
            <li class="list_item">
                <p class="title">领卷</p>
                <p class="content">
                    <span>免运费</span>
                    <i class="iconfont icon-sandian"></i>
                </p>
            </li>
            <li class="list_item">
                <p class="title">领卷</p>
                <p class="content">
                    <span>免运费</span>
                    <i class="iconfont icon-sandian"></i>
                </p>
            </li>
            <li class="list_item">
                <p class="title">领卷</p>
                <p class="content">
                    <span>免运费</span>
                    <i class="iconfont icon-sandian"></i>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.transport_infos {
  padding: 0 0.266667rem;
  background: #fff;
  margin-bottom: 0.28rem;
  .infos_list {
    width: 100%;
    .list_item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 0.946667rem;
      border-bottom: 0.026667rem solid #eee;
      .title {
        margin-right: 0.333333rem;
        font-size: 0.333333rem;
        color: #000;
        line-height: 0.4rem;
      }
      .content {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 0.333333rem;
          color: #000;
          line-height: 0.4rem;
        }
        .iconfont {
          font-size: 0.333333rem;
          color: #000;
          // line-height: 0.4rem;
        }
      }
    }
  }
}
</style>


