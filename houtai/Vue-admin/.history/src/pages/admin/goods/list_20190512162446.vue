<template>
  <div style="over-flow:auto">
     <div>
        <button type="button" class="btn btn-sm add ">
            <i class="iconfont iconfont-tianjia" style="font-size:20px; color:white"></i>
            添加</button>
        <button type="button" class="btn btn-sm _delete">删除</button>
   

    </div>
    <table>
      <thead>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>#</td>
          <td>商品id</td>
          <td>商品名称</td>
        
          <td>价格(原价)</td>
          <td>价格(现价)</td>
          <td>库存</td>
          <td>状态</td>
          <td>商品图片路径</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody v-if="show">
        <tr v-for="(goods,index) in goodsList" :key="index" > 
          <td>
            <input type="checkbox">
          </td>
          <td>{{index+1+start}}</td>
          <td>{{goods.id}}</td>
          <td>{{goods.name}}</td>
          
          <td>{{goods.del_price}}</td>
          <td>{{goods.price}}</td>
          <td>{{goods.xiaoliang}}</td>
          <td>{{goods.qty}}</td>
          <td>{{goods.imgurl}}</td>
          <td>
            <button @click="modify(index)">修改</button>
            <button @click="deleteItem(index)">删除</button>
           
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pages"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <div class="modifyBox" v-if="MSGbox">
      
        <span>商品名称</span><input type="text" v-model="goods.goodsname"><br/>
        <span>商品价格</span><input type="text" v-model="goods.price"><br/>
        <span>库存</span><input type="text" v-model="goods.xiaoliang"><br/>
        <span>数量</span><input type="text" v-model="goods.qty">


     

    </div>
  </div>
</template>
<script>
import $ from "jquery";

import button from "../../../components/button.vue";
export default {
  data() {
    return {
      goodsList: [],
      pages: null,
      currentPage: 1,
      total: 0,
      start:0,
      show:true,
      MSGbox: false,
      goods:[]
    };
  },
  created() {
    // let limit = 9;
    let start = 0;
    let params = {};
    this.$axios.get("/api/goods", {params}).then(({data}) => {
      this.total = data.data.length;
      this.goodsList = data.data.slice(0, 9);
      this.pages = Math.ceil(data.data.length / 9);
    });
  },
  mounted() {
  var add = $('.add');
  var _delete = $('._delete');
  var sumBtn = $('table thead input');
  var checkBtns = $('table tbody input');
  var deleteIDList = [];
  var delGoodsList=[];
  add.on('click',()=>{
    this.$router.replace('/admin/goods/addgoods')
  })
_delete.on('click',()=>{
    deleteIDList = [];
    delGoodsList=[];
  for( let i = 0; i<$('table tbody input').length;i++){
  
    if($('table tbody input')[i].checked){
      // $('table tbody input')[i].parentNode.nextSibling
     var id = $('table tbody input').eq(i).parent().next().next().text();
     var index =Number($('table tbody input').eq(i).parent().next().text())-1;
     id = Number(id);
        deleteIDList.push(id)
        delGoodsList.push(index);
    }
  }
  console.log(deleteIDList)
  for(let i =0; i<deleteIDList.length;i++){
    var params = {id:deleteIDList[i]};
      this.$axios.delete("/api/goods", {params}).then(({ data }) => {
      console.log(data)
        if(data.status==200){
        this.goodsList.splice(i,1)
        }

    });
  }


})
 
  sumBtn.on('click',()=>{
   
    if(sumBtn.prop('checked')){
   
      $('table tbody input').prop('checked',true);
    }
  })

  },
  methods: {
       handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
          let limit = 9;
         let start =( Number(val)-1)*limit;
         this.start = start;
         let params = { limit, start };
         this.$axios.get("/api/goods", {params}).then(({ data }) => {
      
         this.goodsList = data.data;

    });
    },
    deleteItem(idx){
      var id = this.goodsList[idx].id;
      var params={id};
       this.$axios.delete("/api/goods", {params}).then(({ data }) => {
      console.log(data)
        if(data.status==200){
        this.goodsList.splice(idx,1)
        }

    });

    },
    modify(idx){
      this.MSGbox = true;
    }
  
  }
};
</script>
<style lang="scss" scoped>
  button{
        width:1.733333rem;
        height:.733333rem;
        line-height:.733333rem;
        border: 1px solid #aaa;
        border-radius:5%;
        font-size:.293333rem;
        padding:0px;
        padding-right:.226667rem;
        text-align: right;
        &.add{
            background-color: #33AB9F;
            margin-right:.373333rem;
        }
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
.modifyBox{
  width: 4rem;
  height: 8rem;
  border:1px solid #aaa;
  span{
    width:1.3rem;
    float: left;
    text-align: right;
  }
}
</style>


