<template>
  <div class="nctouch-main-layout mb-20" id="search_tip_list_container" style>
    <ul class="nctouch-default-list">
      <li>
        <a href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E6%98%AF%E4%BB%A5">是以</a>
      </li>

      <li>
        <a href="https://m.baiyangwang.com/tmpl/product_list.html?keyword=%E6%98%AF%E4%BB%8E">是从</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nctouch-main-layout {
  display: block;
  padding-top: 1.2rem;
  ul {
    overflow: hidden;
    padding: 0 0 0 0.3rem;
    background-color: #fff;
    border-top: solid 0.03rem #dedede;
    border-bottom: solid 0.03rem #dedede;
    li {
      position: relative;
      z-index: 1;
      display: block;
      clear: both;
      overflow: hidden;
      padding: 0.3rem 0;
      line-height: 0.6rem;
      border-top: solid 0.03rem #dedede;
      a {
        display: block;
        overflow: hidden;
        font-size: 0.39rem;
        color: #000;
      }
    }
  }
}
</style>

