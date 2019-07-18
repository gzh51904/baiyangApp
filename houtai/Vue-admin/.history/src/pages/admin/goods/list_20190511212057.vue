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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
      
      
      
        <li class="page-item" v-for="index in pages" :key="index" v-cloak>
          <a class="page-link" href="#">{{index+1}}</a>
        </li>
      
      </ul>
    </nav>
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
    this.$axios.get("/api/goods", {  }).then(({data}) => {
      console.log(data.data.length);
      this.pages
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


