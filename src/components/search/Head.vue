<template>
  <div id="head">
    <div class="header-wrap">
      <div class="header-l">
        <a href="javascript:history.go(-1)">
          <i class="back"></i>
        </a>
      </div>
      <div class="header-inp" style="background: #ededed;width: 73%;">
        <!-- <i class="icon"></i> -->
        <i class="iconfont icon-search"></i>
        <input
          style="background-color: #ededed"
          type="text"
          class="search-input"
          value
          id="keyword"
          placeholder="眼部逆龄黑科技"
          maxlength="50"
          autocomplete="on"
          autofocus
          v-model="searchVal"
          v-on:input="search"
        />
        <!-- <span class="input-del"></span> -->
      </div>
      <div class="header-r">
        <a id="header-nav" href="javascript:void(0);" class="search-btn">搜索</a>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../eventVue";
export default {
  data() {
    return {
      searchVal: ""
    };
  },
  methods: {
    search() {
      bus.$emit("msg", this.searchVal);
      console.log("传输值",this.searchVal);
      this.$emit("pass", this.searchVal);
    }
    
  },
  mounted() {
  }
};
</script>


<style lang="scss" scoped>
#head {
  border-bottom: 1px #dedede solid;
  width: 100%;
  background: #ffffff;
  height: 1.2rem;
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  .header-wrap {
    display: block;
    // max-width: 320px;
    // max-width: 640px;
    margin: 0 auto;
    text-align: center;
    .header-l {
      display: block;
      width: 1.15rem;
      height: 1.15rem;
      position: absolute;
      top: 0;
      left: 0;
      a {
        position: relative;
        z-index: 1;
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        margin-top: 0.45rem;
        margin-left: 0.3rem;
        i.back {
          display: block;
          width: 58%;
          height: 58%;
          margin: 5%;
          background-image: url(../../assets/img/arrow_left_b.png);
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: 100%;
          opacity: 0.75;
        }
      }
    }
    .header-inp {
      background: #ededed;
      width: 73%;
      position: relative;
      display: block;
      height: 0.8rem;
      border: 0;
      border-radius: 1rem;
      margin: 0.275rem auto;
      background-color: #ededed;
      text-align: left;
      width: 60%;
      i {
        float: left;
        vertical-align: top;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0.2rem 0.3rem 0.1rem 0.4rem;
        // background-image: url(../images/search_ico.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 70%;
      }
      .icon-search:before {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.4rem;
      }
      input {
        float: left;
        width: 4.5rem;
        height: 0.72rem;
        font-family: 兰亭黑 GBK;
        font-size: 0.4rem;
        line-height: 1.1rem;
        color: #bbb;
        vertical-align: top;
        border: none 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.05rem;
        background-color: #ededed;
      }
    }
    .header-r {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      font-size: 0;
      text-align: right;
      .search-btn {
        width: 1.3rem;
        height: 1rem;
        text-align: center;
        padding: 0;
        font-size: 0.43rem;
        line-height: 1.4rem;
        color: #333;
        position: relative;
        z-index: 1;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}
</style>


