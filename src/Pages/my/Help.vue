<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-07-25 12:21:00
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-12 23:18:24
 -->
<template>
<div id="setting">
  <Header :message="msg"></Header>
  <div>
    <!-- <img :src="url1"/> -->
    <button @click="login">登录</button>
    <button @click="regin">注册</button>
  </div>
  
</div>
</template>
<script>
export default{
  name:'setting',
  data(){
    return{
      msg:"设置",
      url1:require('@/assets/img/3.png')
    }
  },
  methods:{
    regin(){
      this.$router.push('reg');
    },
    login(){
      console.log(1);
    }

  }

}
</script>
<style scoped lang='less'>
#setting{
  div{
    width:100%;
    // img{
    //   background-size:100% 100%;
    // }
    // background:url("url1");
    // background-image:"url(" + require('@/assets/img/3.png') + ")";
    // background-size:100% 100%;
    button{
    display:block;
    margin:0 auto;
    width:75%;
    height:.4rem;
    outline:none;
    border-style:none;
    border-radius:.1rem;
    background-color:rgba(126, 195, 216, 0.959);
    color:white;
    font-size:.2rem;
    margin-top:.2rem;
  }

  }
  
}
</style>