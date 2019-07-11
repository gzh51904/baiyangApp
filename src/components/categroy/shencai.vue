<template>
    <div>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><img src="../../assets/pinpaiimg/shencai_1.png" alt="" width="288" height="103"></div></el-col>

             <el-col :span="8"><div class="grid-content bg-purple templateBrand"><a href=""><img src="../../assets/pinpaiimg/shencai_2.png"></a></div></el-col>
             <el-col :span="8"><div class="grid-content bg-purple-light templateBrand"><a href=""><img src="../../assets/pinpaiimg/shencai_3.png"></a></div></el-col>
             <el-col :span="8"><div class="grid-content bg-purple templateBrand"></div><a href=""><img src="../../assets/pinpaiimg/shencai_4.png"></a></el-col>
        </el-row>
        <div class="content">
            <a href=""><img src="../../assets/pinpaiimg/shencai_2.png"></a>
            <a href=""><img src="../../assets/pinpaiimg/shencai_3.png"></a>
            <a href=""><img src="../../assets/pinpaiimg/shencai_4.png"></a>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {Row,Col} from 'element-ui'

Vue.use(Row)
Vue.use(Col)

export default {
    
}
</script>
<style scoped>
.content{
    display: flex;

}
.templateBrand a {
    font-size: 0.55rem;
    color: #999;
    display: inline-block;
    vertical-align: top;
    /* margin-left: 0.28rem; */
}
.templateBrand a img {
    width: 1rem;
    height: 1rem;
}
</style>
