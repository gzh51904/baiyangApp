<template>
  <div class="nctouch-main-layout mb-20" id="search_tip_list_container" style>
    <ul class="nctouch-default-list">
      <li v-for="(item,index) in list" :key="index">
        <a href="#" @click="golist">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "../../eventVue";
export default {
  data() {
    return {
      goodsList: [
        //假数据
        { name: "三星Galaxy Note8", price: 5200, sales: 2.6 },
        { name: "iphone5s", price: 2500, sales: 2.2 },
        { name: "iphone6", price: 2800, sales: 1.6 },
        { name: "iphone6s", price: 3200, sales: 2.9 },
        { name: "iphone7", price: 3800, sales: 12.6 },
        { name: "iphone7plus", price: 4200, sales: 2.1 },
        { name: "iphone8", price: 5500, sales: 10.6 },
        { name: "华为", price: 4600, sales: 7.6 },
        { name: "小米", price: 1200, sales: 32.6 },
        { name: "OPPOR11", price: 3000, sales: 1.2 },
        { name: "vivoX20", price: 3250, sales: 2.9 }
      ],
      list: []
    };
  },
  methods:{
    golist(){
        this.$router.push({name:'list'});    
    }
  },
  async created() {
    let goodlist = await this.$axios.get("http://localhost:1904/goods");
    // console.log(goodlist.data.data);
    // console.log(this.goodsList);
    let list = [];
    for (var i = 0; i < goodlist.data.data.length; i++) {
      // console.log(goodlist.data.data[i].name);

      list.push(goodlist.data.data[i].name);
      // console.log(list);
    }
    this.goodsList = list;
    // console.log(this.goodsList);
  },

  mounted() {
    bus.$on("msg", e => {
      console.log("接受值", e, this.goodsList[0]);
      var arrByZM = []; //声明一个空数组来存放数据
      for (var i = 0; i < this.goodsList.length; i++) {
        //for循环数据中的每一项（根据name值）
        if (this.goodsList[i].search(e) != -1) {
          //判断输入框中的值是否可以匹配到数据，如果匹配成功
          arrByZM.push(this.goodsList[i]);
          //向空数组中添加数据
          // console.log(arrByZM);
        }
      }
      // console.log(arrByZM);
      //一定要记得返回筛选后的数据
      this.list = arrByZM.slice(0, 3);
      // console.log(this.list[0]);

    });
  }
};
</script>


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

