<template>
    <section class="hot_topic">
        <div class="hot_topic_title">
            <h2>热门专题</h2>
        </div>
        <!-- 逆龄黑科技 -->
        <topic></topic>
        <!-- 特级初榨橄榄油 -->
        <topic></topic>
        <!-- 每日坚果缔造者 -->
        <topic></topic>
        <!-- 健康养生之道 -->
        <topic></topic>
        <!-- 品牌百年 德国双心 -->
        <topic></topic>
        <!-- 九蒸酒炙 -->
        <topic></topic>
    </section>
</template>
<script>
import Topic from "./Topic.vue";
export default {
  components: {
    topic: Topic
  }
};
</script>
<style lang="scss" scoped>
.hot_topic {
  padding: 0 0.333333rem;
  .hot_topic_title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0.373333rem;
    height: 2.04rem;
    h2 {
      height: 0.933333rem;
      font-size: 0.466667rem;
      color: #000;
      line-height: 0.933333rem;
      font-weight: 600;
    }
  }
}
</style>

