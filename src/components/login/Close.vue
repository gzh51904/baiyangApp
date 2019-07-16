<template>
    <div class="login_close">
        <a href="javascript:;" class="close_btn" @click=tiao()>
            <i class="iconfont icon-close"></i>
        </a>
    </div>
</template>
<script>
export default {
    methods:{
        tiao(){
            this.$router.push("/member")
        }
    }
    
}
</script>

<style lang="scss" scoped>
.login_close{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 1.12rem;
    .close_btn{
        width: 1.12rem;
        height: 1.093333rem;
        text-align: center;
        line-height: 1.093333rem;
        .iconfont{
            font-size: .453333rem;
            color: #000;
        }

    }

}

</style>

