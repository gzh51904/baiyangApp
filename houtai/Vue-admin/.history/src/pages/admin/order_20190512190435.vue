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
                <td>{{order.uname}}</td>
                <td>{{order.gid}}</td>
                <td>{{order.qty}}</td>
                <td>
                    <select name="status" class="status">
                        <option value="waiting">待发货</option>
                    </select>
                </td>
                <td></td>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
table{
    width:100%;
    td{
        border-collapse:collapse;
        border: 1px solid #aaa;
        text-align: center;
    }
}


</style>

