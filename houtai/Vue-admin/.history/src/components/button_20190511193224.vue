<template>
    <div>
        <button type="button" class="btn btn-sm add ">
            <i class="iconfont iconfont-tianjia" style="font-size:20px; color:white"></i>
            添加</button>
        <button type="button" class="btn btn-sm delete">删除</button>
        <table >
            <thead >
                <tr>
                    <td style="width:77px">
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

export default {
    
}
</script>
<style lang="scss" scoped>
// @import '../../public/iconfont.css';
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
</style>

