<template>
    <div style="width:100%">
      <buttonCom ref="buttonCom"></buttonCom>
           <table >
            <thead >
                <tr>
                    <td >
                       <input type="checkbox" >
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
                <tr></tr>
            </tbody>
        </table>
    </div>
</template>
<script>

    import button from '../../../components/button.vue'
 export default {
    components:{
      buttonCom:button
   }
}
</script>
<style>
table{
   width: 100%;
   
   td{
      border: .013333rem solid #aaa;

   }
}
</style>


