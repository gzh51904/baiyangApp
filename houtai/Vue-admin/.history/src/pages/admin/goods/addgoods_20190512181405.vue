<template>
   <div >
        <div class="row">
        <span>商品名称</span><input type="text" v-model="goods.goodsname"><br/>
        </div>
        <div class="row">
        <span>商品价格</span><input type="text" v-model="goods.price"><br/>
          </div>
         <div class="row">
        <span>库存</span><input type="text" v-model="goods.xiaoliang"><br/>
          </div>
         <div class="row">
        <span>数量</span><input type="text" v-model="goods.qty">
        </div>
         <div class="row">
        <span>图片</span><input type="text" v-model="goods.imgurl">
        </div>
        <div class="confirmation">
          <!-- <button @click="cancel" >取消</button> -->
          <button @click="confirm">确认</button>
        </div>

     

    </div>
</template>
<script>
export default {
    data(){
        return {
            goods:''
        }
    },
    methods:{
        confirm(){
            console.log(this.goods)
        }
    }
    
}
</script>
<style lang="scss" scoped>
.row{
    margin: .4rem auto;
    span{
        width: 3rem;
        text-align: right;
        float: left;
        margin-right: 1rem;
        font-size: .3rem;
    }
    input{
        width: 5rem;
        height: 1rem;
    }
}
</style>


