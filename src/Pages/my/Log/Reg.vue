<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-07-31 17:19:20
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-14 03:42:11
 -->
<template>
<div id="reg">
  <Header :message="message"></Header>
  <form>
    <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <input :type="list.type" :placeholder="list.warning" class="init" :required="list.required" :pattern="list.pattern" :title="list.title">
    </li> 
    <li class="li">
      <input :type="this.registration.pwdType" class="init" placeholder="请填写密码" />
      <img :src="this.registration.src" @click="changeType"/>
    </li>
  </ul>
  <div class="down">
    <button class="btn">注册</button>
  </div>
  </form>
  <div class="popback" v-show="popshow">
    <div class="pop">
      <div>
        <p>请选择登录方式</p>
        <i class="icon-guanbi"></i>
      </div>
      <button >手机号登录</button>
      <button >邮箱登录</button>
    </div>
  </div>
  
  
  


</div>

</template>
<script>
export default{
  name:"reg",
  data(){
 
    return{
      message:"注册",
      popshow:false,
      registration:{
        pwdType:"password",
        src:require("@/assets/img/close_eyes.png")
        
    },
      lists:[
        {
          type:"text",
          warning:"请输入昵称",
          required:"required",
          pattern:"^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{1,16}$",
          title:""
        },
        {
          type:"text",
          warning:"请输入会员名",
          required:"required",
          pattern:"^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{1,16}$",
          title:""
        },
        {
          type:"email",
          warning:"请输入常用邮箱",
          required:"required",
          pattern:"/^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/",
          title:""

        },
        {
          type:"tel",
          warning:"请输入手机号码",
          required:"required",
          pattern:/^[1][3,4,5,6,7,8,9][0-9]{9}$/,
        //   // pattern:"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0-3]|[5-9])|(18[0,5-9]))\d{8}$"
       
        title:""
        }
        // {
        //   type:"password",
        //   warning:"请输入密码",
        //   required:"required",
        //   pattern:"/[a-zA-Z]\w[z0-9]/",
        //   title:"由字母和数字组成，字母开头"
        // }
      ]
    }  
  },
  methods:{
    changeType(){
      this.registration.pwdType=this.registration.pwdType==='password'?'text':'password';
      this.registration.src=this.registration.src==require("@/assets/img/close_eyes.png")?require("@/assets/img/open_eyes.png"):require("@/assets/img/close_eyes.png");
    }
    
    // save(){
    //   this.popshow = true;
    // },
    // TelLogin(){
    //   this.popshow = false;
    //   this.$router.push('tellogin')

    // },
    // EmailLogin(){
    //   this.popshow = false;
    //   this.$router.push('emaillogin')
    
    // },
    // close(){
    //   this.popshow = false;
   
    // }
    

  }
}
</script>
<style scoped lang="less">
#reg{
  width:100%;
  background-color:#FFFFFF;
  form{
    width:100%;
    .content{
    width:80%;
    margin:0 auto;
    .li{
      list-style:none;
      font-size:.18rem;
      margin-top:.1rem;
      width:100%;
      height:.5rem;
      border:1px solid silver;
      border-radius:10px;
      position:relative;
      img{
        position:absolute;
        width:.3rem;
        height:.3rem;
        top:.1rem;
        right:.2rem;
      }
      .init{
        width:90%;
        outline:none;
        border:0;
        height:100%;
        margin-left:.13rem;
      }
    }
  }
  .btn{
    width:80%;
    height:.4rem;
    border-radius: 10px;
    color:white;
    font-size:.18rem;
    background-color:#46aaff;
    display:block;
    margin:0 auto;
    border:0;
    outline:none;
    margin-top:.3rem;
  }
  }
  
  .popback{
    width: 100%;
    height: 100%;
    background-color: rgba(118, 128, 129, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 97;
    .pop{
    width: 80%;
    height: 2.5rem;
    background-color: #ffffff;
    border-radius:10px;
    position:absolute;
    z-index: 111;
    border:1px solid silver;
    right:10%;
    top:30%;
    div{
      display:flex;
      justify-content: center;
      align-items:center;
      height:.4rem;
      background-color:#46a9ff73;
      p{
        font-size:.2rem;
        color:white;
      }
      i{
        font-size: 0.22rem;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        text-align: center;
        color: white;
      }
      
    }
    button{
        margin-top:.2rem;
        display:block;
        width:50%;
        height:.5rem;
        margin:.3rem auto;
        outline:none;
        border-style:none;
        background-color:transparent;
        border:1px solid #46aaff;
        border-radius:.5rem;
        color:#46aaff;

    }

  }
  }
}

</style>