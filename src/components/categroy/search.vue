<template>
    <mt-search v-model="value" :result.sync="result"></mt-search>

</template>
<script>
import Vue from 'vue';
import { Search } from 'mint-ui';


export default {
    methods:{
        result(){

        },
        value(native,code){

        }
    }
}
</script>
<style lang="scss">
.mint-search {
    height: 100%;
    /* height: 100vh; */
    overflow: hidden;
}
</style>

