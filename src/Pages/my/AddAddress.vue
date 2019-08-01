<template>
<div id="add">
  <Header :message="message" class="header"></Header>
  <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <input type="text" :placeholder="list.warning" value="" />
    </li>
  </ul>
  <ul>
    <li>设为默认地址</li>
    <li><input type="checkbox" /></li>
  </ul>
  
  <div class="down">
    <button class="btn" @click="save">保存</button>
  </div>
  


</div>

</template>
<script>
export default{
  name:"add",
  data(){
    return{
      message:"添加收货地址",
      lists:[
        {
          warning:"收货人"
        },
        {
          warning:"手机号码"
        },
        {
          warning:"所在地区"
        },
        {
          warning:"街道详细地址"
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
  overflow:hidden;
  background-color:#FFFFFF;
  .header{
      margin-bottom:.2rem;
    }
  .content{
    width:100%;
    
    
    li{
      list-style:none;
      font-size:0.18rem;
      height:.5rem;
      width:90%;
      margin:auto;
      display:flex;
      align-items:center;
      border:1px solid silver;
      border-radius:.1rem;
      margin-bottom:.2rem;
      overflow:hidden;
      input[type='text']{
         margin-left:.13rem;
          width:94%;
          height:100%;
          outline:none;
          border:0;
          font-size:.18rem;
      }
      input[type='checkbox']{
          width:.2rem;
          height:.2rem;
          margin-top:.1rem;
          outline:none;
          border:0;
      }
      // .init{
        
      //   width:85%;
      //   padding-left:.16rem;
      //   margin-right:.2rem;
      //   font-size:.18rem;
      //   height:100%;
      //   overflow:hidden;
      //   resize:none;
      //   border: 0;  
      //   outline: none;
        
      //   background-color: rgba(0, 0, 0, 0);

      //   }
      
      

    }
  }
  
  .down{
    text-align:center;
    margin-top:.2rem;
    .btn{
    width:.6rem;
    height:.4rem;
    outline:none;
    border-radius:.1rem;
    background-color:rgba(126, 195, 216, 0.959);
    color:white;
    font-size:.2rem;
    
    
  }

  }
  
  
}

</style>