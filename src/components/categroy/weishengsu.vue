<template>
    <div class="demo-image__lazy">
      <a href=""><el-image v-for="item in weishengsus" :key="item.name" :src="item.imgurl" lazy></el-image></a>
  
</div>

</template>
<script>
import Vue from 'vue';
import { Image } from 'element-ui';

Vue.use(Image);



export default {
    data(){
        return{
            weishengsus:[{
                name:'first',
                imgurl:require('../../assets/pinpaiimg/weishengsu_1.png')
            },{
                name:'two',
                imgurl:require('../../assets/pinpaiimg/weishengsu_2.png')
            },{
                name:'three',
                imgurl:require('../../assets/pinpaiimg/weishengsu_3.png')
            },{
                name:'four',
                imgurl:require('../../assets/pinpaiimg/weishengsu_4.png')
            },{
                name:'five',
                imgurl:require('../../assets/pinpaiimg/weishengsu_5.png')
            },{
                name:'six',
                imgurl:require('../../assets/pinpaiimg/weishengsu_6.png')
            },{
                name:'seven',
                imgurl:require('../../assets/pinpaiimg/weishengsu_7.png')
            },{
                name:'eight',
                imgurl:require('../../assets/pinpaiimg/weishengsu_8.png')
            },{
                name:'nine',
                imgurl:require('../../assets/pinpaiimg/weishengsu_9.png')
            },{
                name:'11',
                imgurl:require('../../assets/pinpaiimg/weishengsu_11.png')
            },
            ]
        }
    }
}
</script>
<style>

</style>
