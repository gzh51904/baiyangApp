<template>
    <div style="width:100%">
        <table>
            <thead>
                <tr>
                    <td>用户名</td>
                    <td>商品ID</td>
                    <td>购买数量</td>
                    <td>订单状态</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "(order,index) in orders" :key="index">
                <td>{{order.uname}}</td>
                <td>{{order.gid}}</td>
                <td>{{order.qty}}</td>
                <td>
                   准备发货
                </td>
                <td>
                    <span>
                    <button class="confirm">确认</button>
                    <button class="cancel">取消</button>
                    </span>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            order:{}
        }
    },
    created(){
     
    let params = {};
    this.$axios.get("/api/cart", { params }).then(({ data }) => {
      this.total = data.data.length;
    this.order = data.data;
    });
    }
}
</script>
<style lang="scss" scoped>
table{
    width:100%;
    td{
        border-collapse:collapse;
        border: 1px solid #aaa;
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
    }
    span{
        display:block;
        margin: 0px auto;
        width: 1.8rem;
        padding-top: .2rem;

    button{
       margin-right: .3rem;
        height: 0.4rem;
        line-height: .4rem;
    }
    }
}


</style>

