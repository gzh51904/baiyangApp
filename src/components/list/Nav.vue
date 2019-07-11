<template>
  <div class="goods-search-list-nav">
    <ul id="nav_ul">
      <li>
        <a href="javascript:void(0);" class="current" id="sort_default" onclick="sanj()">
          综合
          <i></i>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" id="sort_salesnum" class onclick="init_get_list('2', '1')">销量</a>
      </li>
      <li>
        <a href="javascript:void(0);" id="sort_price" class onclick="dianji()">
          价格
          <div>
            <i class="c_1"></i>
            <i class="c_2"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" id="search_adv">
          筛选
          <i></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.goods-search-list-nav {
  display: block;
  width: 100%;
  height: 1.38rem;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  z-index: 2;
  top: 1.2rem;
  left: 0;
  right: 0;
  ul {
    font-size: 0;
    display: block;
    width: 100%;
    float: left;
    li {
      vertical-align: top;
      display: inline-block;
      width: 25%;
      a {
        font-size: 0.42rem;
        color: #333;
        line-height: 1.38rem;
        text-align: center;
        display: block;
        height: 1.38rem;
      }
    }
  }
}
</style>

