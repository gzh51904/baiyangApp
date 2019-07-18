<template>
  <div style="over-flow:auto">
    <buttonCom ref="buttonCom"></buttonCom>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>#</td>
          <td>商品名称</td>
        
          <td>价格(原价)</td>
          <td>价格(现价)</td>
          <td>库存</td>
          <td>状态</td>
          <td>商品图片路径</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(goods,index) in goodsList" :key="index">
          <td>
            <input type="checkbox">
          </td>
          <td>{{index+1+skip}}</td>
          <td>{{goods.name}}</td>
          
          <td>{{goods.del_price}}</td>
          <td>{{goods.price}}</td>
          <td>{{goods.xiaoliang}}</td>
          <td>{{goods.qty}}</td>
          <td>{{goods.imgurl}}</td>
          <td>
            <button>修改</button>
            <button>删除</button>
            <button>下架</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import button from "../../../components/button.vue";
export default {
  data() {
    return {
      goodsList: [],
      pages: null,
      currentPage: 1,
      total: 0,
      skip:0
    };
  },
  created() {
    let limit = 9;
    let start = 0;
    let params = { limit, start };
    this.$axios.get("/api/goods", {params}).then(({data}) => {
      console.log(data.data);
      this.total = data.data.length;
      this.goodsList = data.data.slice(0, 9);
      console.log(this.goodsList);
      this.pages = Math.ceil(data.data.length / 9);
    });
  },
  components: {
    buttonCom: button
  },
  methods: {
       handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
          let limit = 9;
         let skip =( Number(val)-1)*limit;
         this.skip = skip;
         let params = { limit, skip };
         console.log(params);
         this.$axios.get("/api/goods", {params}).then(({ data }) => {
      
         this.goodsList = data.data;
         console.log(this.goodsList);
     
    });
    }
  }
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  tr {
    &:nth-child(1) {
      background-color: #f2f2f2;
    }
    td {
      border: 0.013333rem solid #aaa;
      border-collapse: collapse;
      height: 0.8rem;
      text-align: center;
    }
  }
}
</style>


