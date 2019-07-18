<template>
    <div class="delete_goods">
        <div class="select_all">
            <input type="checkbox" checked @click="selectAllGoods()" ref="selectAll">
            <span>全选</span>
        </div>
        <a href="javascript:;" class="delete_btn" @click="removeGoods">删除</a>
    </div>
</template>
<script>
export default {
  props:['selectAll','remove'],
  methods:{
    selectAllGoods(){
      var result = this.$refs.selectAll.checked;
      this.selectAll(result);
    },
    removeGoods(){
      this.remove();
    }


  }
  
}
</script>


<style lang="scss" scoped>
.delete_goods {
  position: fixed;
  left: 0;
  bottom: 1.333333rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.453333rem;
  background: #fff;
  .select_all {
    span {
      font-size: 0.266667rem;
      color: #000;
    }
  }
  .delete_btn {
    width: 1.6rem;
    height: 1.066667rem;
    background: red;
    font-size: 0.266667rem;
    color: #fff;
    line-height: 1.066667rem;
    text-align: center;
  }
}
</style>

