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
  
  
  


</div>

</template>
<script>
export default{
  name:"reg",
  data(){
    return{
      message:"注册",
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
        padding-left:.13rem;
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