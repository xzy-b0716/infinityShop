<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-01 01:55:29
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-14 02:41:53
 -->

<template>
<div id="password">
  <Header :message="message"></Header>
  <form class="content">
    <ul>
      <li>原密码</li>
      <li>
        <input type="password" placeholder="填写原密码" required="required">
      </li>
    </ul>
    <ul>
      <li>新密码</li>
      <li>
        <input type="password" placeholder="填写新密码"  required="required">
        </li>
    </ul>
    <ul>
      <li>确认密码</li>
      <li>
        <input type="password" placeholder="再次填写确认" required="required">
      </li>
    </ul>
    <p>密码必须是6-16位的数字、字符组合(不能是纯数字)</p>
    <button type="button" class="submit" @click="savepwd">保存</button>
  </form>
        
  

  




</div>

</template>
<script>


export default{
  name:"password",
  
  data(){
    return{
      message:"重置密码"
      
    }
  },
  methods:{
    savepwd(){
      console.log(1);
    }
    

  }
}

</script>
<style scoped lang="less">
#password{
  width:100%;
  overflow:hidden;
  background-color:#FFFFFF;
  .content{
    width:100%;
    ul{
      width:100%;
      height:.5rem;
      border-bottom:1px solid silver;
      display:flex;
      justify-content:space-between;
      align-items:center;
      li{
        list-style: none;
        font-size:.18rem;
        margin-left:.13rem;
        li:nth-child(2){
          width:80%;
          height:100%;
          
        }
        input{
          outline:none;
          border:0;
          font-size:.18rem;
          
        }
      }

    }
    p{
      margin-top:.1rem;
      margin-left:.13rem;
      color:gray;

    }
    .submit{
    width:30%;
    height:.4rem;
    border-radius: 5px;
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
}

</style>