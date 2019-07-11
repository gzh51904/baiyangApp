<template>
    <div class="end_line">
        <div class="line"></div>
        <p class="text">我是有底线的</p>
    </div>
</template>
<style lang="scss" scoped>
.end_line {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: .266667rem;
  width: 100%;
  height: 3.2rem;
  .line {
    width: 80%;
    height: .013333rem;
    border: .006667rem solid #ccc;
    margin-bottom: 0.266667rem;
  }
  .text {
    font-size: 0.266667rem;
    line-height: 0.266667rem;
    color: #ccc;
  }
}
</style>

