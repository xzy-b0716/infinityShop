<template>
<div id="add">
  <Header :message="message" class="header"></Header>
  <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <input type="text" :placeholder="list.warning" value="" />
    </li>
  </ul>
  <ul class="down">
    <li>设为默认地址</li>
    <li><input type="checkbox"/></li>
  </ul>
  
  <button type="button" class="submit" @click="saveAddr">保存</button>
  <button type="button" class="submit" @click="deleteAddr">删除</button>
  


</div>

</template>
<script>
export default{
  name:"add",
  
  data(){
    return{
      message:"编辑收货地址",
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
    saveAddr(){
      
        // if(this.lists[0].value==0){
        //   alert("收货人不能为空!");
        // }
        // else{
        //   this.$toast("保存成功");
        // }
      
      this.$toast("保存成功");
      // this.$router.push('address');
    },
    deleteAddr(){
      this.$messagebox.confirm("确定执行此操作？").then(
         action=>{
           
        })

  }
}
}
</script>
<style scoped lang="less">
#add{
  width:100%;
  overflow:hidden;
  background-color:#FFFFFF;
  
  .content{
    width:100%;
    .li{
      list-style:none;
      font-size:0.18rem;
      height:.5rem;
      width:100%;
      margin:auto;
      display:flex;
      align-items:center;
      border-bottom:1px solid silver;
      overflow:hidden;
      input[type='text']{
         margin-left:.13rem;
          width:94%;
          height:100%;
          outline:none;
          border:0;
          font-size:.18rem;
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
    width:100%;
      height:.5rem;
      border-bottom:1px solid silver;
      display:flex;
      align-items:center;
    li{
      display:flex;
      align-items:center;
      list-style: none;
      font-size:.18rem;
      margin-left:.13rem;
      input[type='checkbox']{
          width:.2rem;
          height:.2rem;
          margin-top:.1rem;
          outline:none;
          border:0;
      }  
    }
  }
  .submit{
    width:80%;
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

</style>