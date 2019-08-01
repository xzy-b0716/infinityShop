<template>
<div id="reg">
  <Header :message="message"></Header>
  <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <input type="text" :placeholder="list.warning" class="init">
    </li>
  </ul>
  <div class="down">
    <button class="btn" @click="save">注册</button>
  </div>

  <div class="popback" v-show="popshow">
    <div class="pop">
      <div>
        <p>请选择登录方式</p>
        <i class="icon-guanbi" @click="close"></i>
      </div>
      <button @click="TelLogin">手机号登录</button>
      <button @click="EmailLogin">邮箱登录</button>
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
      lists:[
        {
          warning:"请输入昵称"
        },
        {
          warning:"请输入常用邮箱"
        },
        {
          warning:"请输入手机号码"
        },
        {
          warning:"请输入密码"
        }
      ]
    }  
  },
  methods:{
    save(){
      this.popshow = true;
    },
    TelLogin(){
      this.popshow = false;
      this.$router.push('tellogin')

    },
    EmailLogin(){
      this.popshow = false;
      this.$router.push('emaillogin')
    
    },
    close(){
      this.popshow = false;
   
    }
    

  }
}
</script>
<style scoped lang="less">
#reg{
  width:100%;
  background-color:#FFFFFF;
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