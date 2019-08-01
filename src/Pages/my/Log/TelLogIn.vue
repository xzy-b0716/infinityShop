<template>
<div id="add">
  <Header :message="message"></Header>
  <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <input type="text" :placeholder="list.warning" class="init">
    </li>
  </ul>
  <div class="down">
    <button class="btn" @click="save">登录</button>
  </div>
  
  
  


</div>

</template>
<script>
export default{
  name:"add",
  data(){
    return{
      message:"手机号码登录",
      lists:[
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
      alert(1);
    }

  }
}
</script>
<style scoped lang="less">
#add{
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


  

}
</style>