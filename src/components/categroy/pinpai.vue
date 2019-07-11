<template>
    <div>
        <li v-for="item in pinpais" :key="item.name">
            <a href=""><img :src="item.imgurl" alt=""></a>
        </li>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            pinpais:[{
                name:'first',
                imgurl:require('../../assets/pinpaiimg/pinpai_1.png')
            },{
                name:'two',
                imgurl:require('../../assets/pinpaiimg/pinpai_2.png')
            },{
                name:'three',
                imgurl:require('../../assets/pinpaiimg/pinpai_3.png')
            },{
                name:'four',
                imgurl:require('../../assets/pinpaiimg/pinpai_4.png')
            },{
                name:'five',
                imgurl:require('../../assets/pinpaiimg/pinpai_5.png')
            },{
                name:'six',
                imgurl:require('../../assets/pinpaiimg/pinpai_6.png')
            },{
                name:'seven',
                imgurl:require('../../assets/pinpaiimg/pinpai_7.png')
            },{
                name:'eight',
                imgurl:require('../../assets/pinpaiimg/pinpai_8.png')
            },{
                name:'nine',
                imgurl:require('../../assets/pinpaiimg/pinpai_9.png')
            },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
img{
    width: 279px;
    height: 70px;
}



</style>
