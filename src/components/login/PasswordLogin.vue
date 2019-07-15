<template>
    <div class="phone_login">
        <form action="" class="login_form" :model="ruleForm"  ref="ruleForm">
            <ul class="login_infos">
                <li class="infos_item phone" prop="phone">
                    <input type="text" placeholder="请输入手机号" v-model="ruleForm.phone" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)" >
                </li>
                <li class="infos_item psw" prop="pwd">
                    <input type="text" placeholder="请输入密码" v-model="ruleForm.pwd"> 
                </li>
                <li class="infos_item ver_code">
                    <input type="text" placeholder="请输入验证码">
                    <a href="javascript:;" class="get_ver_code_btn" @click="refreshCode()">
                        <ver-code :identifyCode="identifyCode"></ver-code>
                    </a>
                </li>
            </ul>
            <a href="javascript:;" class="login_btn" @click="submitForm">登录</a>
            <div class="login_ways">
                <a href="javascript:;">忘记密码</a>
                <a href="javascript:;" @click="jumpPage('/login_pwd')">手机验证码登录</a>
            </div>
        </form>
    </div>
</template>
<script>
import VerCode from "./VerCode.vue";
export default {
   model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      code: "", //text框输入的验证码
    //   contentWidth:'100%',
    //   contentHeight:'1.346667rem',
      ruleForm: {
        phone: "",
        pwd: ""
      },
      
    };
  },
  components: {
    "ver-code": VerCode
  },
  methods: {
   
    submitForm() {
      
        
            let {phone,pwd} = this.ruleForm;
            this.$axios.get("http://localhost:1904/login",{
                params:{
                    phone,
                    pwd
                }
            }).then((res)=>{
                let {data,headers} = res
                console.log(res);
                if(data.code == 250){
                    alert('用户名或密码错误！')
                }else if(data.code === 1000){

                    // 保存登录信息
                    localStorage.setItem('Authorization',data.data);

                    // 获取目标路径
                    // let targetPath = this.$route.query.redirectTo;
                    // this.$router.push("/")
                    // this.$router.replace(targetPath?targetPath:'/home')
                }
            })
        
      ;
    },
    jumpPage(url) {
      this.$router.push('/login');
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    // this.ruleForm.username = ruleForm.username;
    // console.log(this.ruleForm.username)
  },
  created() {
    this.refreshCode();
    
  },
  //验证码
 
};
</script>
<style lang="scss" scoped>
.phone_login {
  width: 100%;
  padding: 0 0.706667rem;
  .login_form {
    width: 100%;
    .login_infos {
      margin-bottom: 0.56rem;
      width: 100%;
      .infos_item {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 1.346667rem;
        border-bottom: 0.026667rem solid #dedede;
        input {
          width: 100%;
          height: 100%;
          border: none;
          font-size: 0.373333rem;
          color: #919191;
          line-height: 0.466667rem;
        }
        .get_ver_code_btn {
          position: absolute;
          right: 0;
          top: 0.28rem;
          padding-left: .4rem;
          width: 2.533333rem;
          height: 0.8rem;
          border-left: 0.026667rem solid gray;
        }
      }
    }
    .login_btn {
      display: block;
      margin-bottom: 0.533333rem;
      width: 100%;
      height: 1.12rem;
      border-radius: 0.026667rem;
      background: #cccccc;
      font-size: 0.36rem;
      color: #fff;
      text-align: center;
      line-height: 1.12rem;
    }
    .login_ways {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 0.546667rem;
      a {
        font-size: 0.333333rem;
        color: #000;
      }
    }
  }
}
</style>


