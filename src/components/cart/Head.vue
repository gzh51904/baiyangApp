<template>
  <header class="cart_head">
    <p class="title">购物车</p>
    <div class="edit" @click="$emit('edit')">
      <a href="javascripti:;" v-text="isEdit?'编辑':'完成'"></a>
    </div>

  </header>
</template>
<script>
export default {
  props:['isEdit'],

  data() {
    return {
      // isEdit: true
    };
  },
  computed: {
    // operation() {
    //   if (this.isEdit) {
    //     return "编辑";
    //   } else {
    //     return "完成";
    //   }
    // }
  },
  methods: {
    editOperation(){
      this.edit(123);
    }
    // async edit() {
    //   this.isEdit = !this.isEdit;
    // }
  },
  
};
</script>
<style lang="scss" scoped>
.cart_head {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.146667rem;
  border-bottom: 0.026667rem solid #cccccc;
  background: #fff;
  .title {
    font-size: 0.453333rem;
    color: #000;
    line-height: 0.453333rem;
    text-align: center;
  }
  .edit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.68rem;
    height: 100%;
    a {
      font-size: 0.333333rem;
      color: #333;
    }
    a:hover {
      text-decoration: none;
    }
  }
}
</style>


