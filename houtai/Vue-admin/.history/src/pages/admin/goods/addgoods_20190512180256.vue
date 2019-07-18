<template>
   <div class="modifyBox" v-if="MSGbox">
        <div>
        <span>商品名称</span><input type="text" v-model="goods.goodsname"><br/>
        </div>
        <div>
        <span>商品价格</span><input type="text" v-model="goods.price"><br/>
          </div>
        <div>
        <span>库存</span><input type="text" v-model="goods.xiaoliang"><br/>
          </div>
        <div>
        <span>数量</span><input type="text" v-model="goods.qty">
        </div>
        <div>
        <span>图片</span><input type="text" v-model="goods.imgurl">
        </div>
        <div class="confirmation">
          <button @click="cancel" >取消</button>
          <button @click="confirm">确认</button>
        </div>

     

    </div>
</template>
<script>
export default {
    
}
</script>

