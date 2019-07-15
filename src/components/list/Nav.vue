<template>
  <div class="goods-search-list-nav">
    <ul id="nav_ul">
      <li>
        <a href="javascript:void(0);" class="current" id="sort_default">
          综合
          <i></i>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" id="sort_salesnum" class onclick="init_get_list('2', '1')">销量</a>
      </li>
      <li>
        <a href="javascript:void(0);" id="sort_price" class @click="san">
          价格
          <!-- <div> -->
          <i class="c_1" v-bind:class="{actives:activeClass}"></i>
          <!-- <i class="c_2"></i> -->
          <!-- </div> -->
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

<script>
import bus from "../../eventVue";
export default {
  data() {
    return {
      activeClass: false // 0为默认选择第一个，-1为不选择
    };
  },
  methods: {
    san() {
      bus.$emit("msg", "1111");
      this.activeClass = !this.activeClass;
      console.log("传输值", this.activeClass);
    }
  }
};
</script>


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
        i {
          font-size: 0px;
          line-height: 0;
          vertical-align: middle;
          display: inline-block;
          width: 0px;
          height: 0px;
          margin-left: 0.12rem;
          border-width: 0.12rem;
          border-color: #aaa transparent transparent transparent;
          border-style: solid dashed dashed dashed;
        }
      }
      a:hover {
        color: #ff0066;
        font-family: 方正兰亭中黑_GBK, "Lantinghei SC";
        text-decoration: none;
        i {
          border-top-color: #ff0066;
          // border-right-color: transparent;
          // border-bottom-color: transparent;
          // border-left-color: transparent;
        }
        .actives {
          border-top-color: transparent !important;
          border-right-color: transparent !important;
          border-bottom-color: #ff0066 !important;
          border-left-color: transparent !important;
          margin-bottom: 0.2rem;
          //  top:0.5rem;
        }
      }
    }
  }
}
</style>

