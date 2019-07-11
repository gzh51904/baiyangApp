<template>
    <div>
        <li v-for="item in baikes" :key="item.name">
            <a href=""><img :src="item.imgurl" alt=""></a>
        </li>
    </div>
</template>
<script>
export default {
    data(){
        return{
            baikes:[{
                name:'first',
                imgurl:require('../../assets/pinpaiimg/baike_1.png')
            },{
                name:'two',
                imgurl:require('../../assets/pinpaiimg/baike_2.png')
            },{
                name:'three',
                imgurl:require('../../assets/pinpaiimg/baike_3.png')
            },{
                name:'four',
                imgurl:require('../../assets/pinpaiimg/baike_4.png')
            },{
                name:'five',
                imgurl:require('../../assets/pinpaiimg/baike_6.png')
            },{
                name:'six',
                imgurl:require('../../assets/pinpaiimg/baike_5.png')
            },{
                name:'seven',
                imgurl:require('../../assets/pinpaiimg/baike_7.png')
            },{
                name:'eight',
                imgurl:require('../../assets/pinpaiimg/baike_8.png')
            },{
                name:'nine',
                imgurl:require('../../assets/pinpaiimg/baike_9.png')
            },{
                name:'10',
                imgurl:require('../../assets/pinpaiimg/baike_10.png')
            },{
                name:'11',
                imgurl:require('../../assets/pinpaiimg/baike_11.png')
            },
            {
                name:'12',
                imgurl:require('../../assets/pinpaiimg/baike_12.png')
            },
            {
                name:'13',
                imgurl:require('../../assets/pinpaiimg/baike_13.png')
            },
            {
                name:'14',
                imgurl:require('../../assets/pinpaiimg/baike_14.png')
            },
            ]
        }
    }
}
</script>
<style scoped>
a{
    float: left;
    margin-left: 5px;
    margin-bottom: 7px;
}
img{
    width: 130px;
    height: 70px;
}
</style>
