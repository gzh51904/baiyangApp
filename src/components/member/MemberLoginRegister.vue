<template>
    <section class="member_login_register">
        <div class="member_login_register_inner">
            <img src="../../assets/img/topavater.png" alt="#">
            <div class="member_infos">
                <div class="member_pic">
                    <img src="../../assets/img/default_avatar.png" alt="#">
                </div>
                <p class="member_name" @click=tiao()>登录/注册</p>
            </div>
            <div class="member_collect">
                <ul class="member_collect_list">
                    <li class="list_item">
                        <a href="javascript:;">
                            <em>0</em>
                            <p>商品收藏</p>
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="javascript:;">
                            <em>0</em>
                            <p>店铺关注</p>
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="javascript:;">
                            <em>0</em>
                            <p>我的消息</p>
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="javascript:;">
                            <em>0</em>
                            <p>我的足迹</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {

    methods:{
      tiao(){
        this.$router.push('./login')
      }
    }

};
</script>

<style lang="scss" scoped>
.member_login_register {
  width: 100%;
  height: 4.573333rem;
  background: #f5f5f5;
  .member_login_register_inner {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      position: relative;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
    .member_infos {
      position: absolute;
      top: 0;
      left: calc(50% - 4.6rem);
      right: calc(50% - 4.6rem);
      padding: 0.333333rem 0.493333rem 0 0.493333rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 2.066667rem;

      .member_pic {
        margin-right: 0.266667rem;
        width: 1.733333rem;
        height: 1.733333rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .member_name {
        margin-top: 0.186667rem;
        height: 0.826667rem;
        font-size: 0.453333rem;
        color: #000;
        line-height: 0.826667rem;
        font-weight: 600;
      }
    }
    .member_collect {
      position: absolute;
      left: 0;
      top: 2.08rem;
      height: 1.96rem;
      width: 100%;
      .member_collect_list {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        .list_item {
          flex: 1;
          padding: 0.373333rem 0;
          height: 100%;
          a {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            em {
              margin-top: 0.146667rem;
              font-size: 0.36rem;
              color: #666666;
              font-weight: 600;
            }
            p {
              height: 0.333333rem;
              font-size: 0.333333rem;
              color: #6666;
              line-height: 0.333333rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>

