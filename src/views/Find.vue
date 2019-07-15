<template>
  <div id="faxian">
  <div class="faxian">
    <div class="box">
    <a href="javascript:;" @click="changTab(0)" v-bind:class="{liang:active===0}">推荐</a>
    <a href="javascript:;" @click="changTab(1)">美容</a>
    <a href="javascript:;" @click="changTab(2)">母婴</a>
    <a href="javascript:;" @click="changTab(3)">健康</a>
    <a href="javascript:;" @click="changTab(4)">医药</a>
    <a href="javascript:;" @click="changTab(5)">每日科普</a>
    <a href="javascript:;" @click="changTab(6)">有偿资讯</a>
    <a href="javascript:;" @click="changTab(7)">孕期营养攻略</a>
    </div>
  </div>
  <!-- <div class="container" v-for="(tab,idx) of tabs" :key="idx"  v-show="active===idx">
    <div class="c_left">
       <div class="victim1">
         <img src="../assets/img/faxian1.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian4.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>{{tabs[0].name}}</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian5.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
    </div>
    <div class="c_right">
      <div class="victim1">
         <img src="../assets/img/faxian2.png" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian3.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
       <div class="victim1">
         <img src="../assets/img/faxian6.jpg" alt="">
         <h3>中国11-13岁青少年膳食营养素参考摄入量</h3>
         <p>钙铁锌维生素</p>
         <h5><span><i></i>百洋健康</span><span><i></i><i></i></span></h5>
       </div>
    </div>
  </div> -->
  <div class="hao">
  <tui-jian v-show="active===0"></tui-jian>
  <mei-rong v-show="active===1"></mei-rong>
  <mu-ying v-show="active===2"></mu-ying>
  <jian-kang v-show="active===3"></jian-kang>
  <yi-yao v-show="active===4"></yi-yao>
  <ke-pu v-show="active===5"></ke-pu>
  <zi-xun v-show="active===6"></zi-xun>
  <yu-qi v-show="active===7"></yu-qi>
  </div>
  </div>
</template>
<script>
// import axios from "axios";
import Tuijian from "../components/find/Tuijian.vue";
import MeiRong from "../components/find/MeiRong.vue";
import Muying from "../components/find/Muying.vue";
import JianKang from "../components/find/JianKang.vue";
import YiYao from "../components/find/YiYao.vue";
import KePu from "../components/find/KePu.vue";
import ZiXun from "../components/find/ZiXun.vue";
import YuQi from "../components/find/YuQi.vue";

export default {
  data() {
    return {
      active: 0,
      tabs: [{}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    changTab(num) {
      this.active = num;
      console.log(this.active);
    }
  },
  components: {
    "tui-jian": Tuijian,
    "mei-rong": MeiRong,
    "mu-ying": Muying,
    "jian-kang": JianKang,
    "yi-yao": YiYao,
    "ke-pu": KePu,
    "zi-xun": ZiXun,
    "yu-qi": YuQi
  }
  // async created() {
  //   let { data } = await this.$axios.get("http://localhost:1904/find");
  //   // console.log(data);
  //   this.tabs = data.data;
  //   console.log(this.tabs);
  // }
  // async created() {
  //   const datas = await this.$axios.get("http://127.0.0.1:1904/find/美颜术");
  //   console.log(datas.data.data);
  // }
};
</script>
<style lang="scss" scoped>
.faxian {
  // display: flex;
  // flex: 1;
  overflow: auto;
  // padding-bottom: 0.266667rem;
  border-bottom: 0.013333rem;
  // justify-content: space-between;
  // padding-right: 1.333333rem;
  font-size: 0.48rem;
  .box {
    width: 200%;
    display: flex;
    height: 0.533333rem;
    font-size: 0.48rem;
    height: 1.026667rem;
    border-bottom: 0.013333rem solid #999;
    a {
      margin: 0.2rem 0.4rem 0 0.4rem;
      text-decoration: none;
      // margin-bottom: 0.266667rem;
      height: 0.8rem;
      // line-height: 0.8rem;
      color: #333333;
      // text-decoration: none;
      &:hover {
        color: #ff0066;
        border-bottom: 2px solid #ff0066;
        // a:first-child {
        //   color: #333333;
        //   border-bottom: none;
        // }
      }
      &.liang {
        color: #ff0066 !important;
        border-bottom: 2px solid #ff0066;
      }
    }
  }
}
// a.liang {
//          color: #ff0066;
//          border-bottom: 2px solid #ff0066;
//        }
#faxian {
  display: flex;
  flex: 1;
  flex-direction: column;
}
// .container {
//   padding-top: 0.32rem;
//   padding-left: 0.213333rem;
//   display: flex;
//   flex: 1;
//   // justify-content: left;
//   .c_left {
//     width: 4.613333rem;
//     margin-right: 0.266667rem;
//     .victim1 {
//       display: flex;
//       // flex: 1;
//       flex-direction: column;
//       justify-content: flex-start;
//       border: 1px solid #ccc;
//       border-radius: 8px;
//       margin-bottom: 0.32rem;
//       img {
//         width: 100%;
//         border-radius: 8px;
//       }
//       h3 {
//         width: 100%;
//         margin: 0.2rem 0;
//         padding: 0 3px 0 3px;
//       }
//       p {
//         width: 100%;
//         margin: 0.106667rem 0;
//         padding: 0 3px 0 3px;
//         font-size: 0.373333rem;
//         color: #999;
//       }
//       h5 {
//         width: 100%;
//         margin: 0.106667rem 0;
//         padding: 0 3px 0 3px;
//         font-size: 0.373333rem;
//         font-weight: bold;
//       }
//     }
//   }
//   .c_right {
//     width: 4.613333rem;
//     .victim1 {
//       display: flex;
//       // flex: 1;
//       flex-direction: column;
//       justify-content: flex-start;
//       border: 1px solid #ccc;
//       border-radius: 8px;
//       margin-bottom: 0.32rem;
//       img {
//         width: 100%;
//         border-radius: 8px;
//       }
//       h3 {
//         width: 100%;
//         margin: 0.2rem 0;
//         padding: 0 3px 0 3px;
//       }
//       p {
//         width: 100%;
//         margin: 0.106667rem 0;
//         padding: 0 3px 0 3px;
//         font-size: 0.373333rem;
//         color: #999;
//       }
//       h5 {
//         width: 100%;
//         margin: 0.106667rem 0;
//         padding: 0 3px 0 3px;
//         font-size: 0.373333rem;
//         font-weight: bold;
//       }
//     }
//   }
// }
</style>