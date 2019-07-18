<template>
  <div style="width:100%">
    <buttonCom ref="buttonCom"></buttonCom>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>#</td>
          <td>商品名称</td>
          <td>分类</td>
          <td>价格(原价)</td>
          <td>价格(现价)</td>
          <td>库存</td>
          <td>状态</td>
          <td>添加时间</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(goods,index) in goodsList" :key="index">
          <td>
            <input type="checkbox">
          </td>
          <td>#</td>
          <td>商品名称</td>
          <td>分类</td>
          <td>价格(原价)</td>
          <td>价格(现价)</td>
          <td>库存</td>
          <td>状态</td>
          <td>添加时间</td>
          <td>
            <button>修改</button>
            <button>删除</button>
            <button>下架</button>
          </td>
        </tr>
      </tbody>
    </table>
   <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      <!-- @size-change="handleSizeChange"
      @current-change="handleCurrentChange" -->
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
</template>
<script>
import button from "../../../components/button.vue";
export default {
  data() {
    return {
      goodsList: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      pages:null
    };
  },
  created() {
    let limit = 10;
    let start = 0;
    let params = { limit, start };
    this.$axios.get("/api/goods", {}).then(({data}) => {
      console.log(data.data.length);
      this.goodsList = data.data.slice(0,9);
      this.pages =Math.ceil( data.data.length/9);
    });
  },
  components: {
    buttonCom: button
  }
};
</script>
<style lang="scss" scoped>
.v-cloak{
   display:none;
}
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


