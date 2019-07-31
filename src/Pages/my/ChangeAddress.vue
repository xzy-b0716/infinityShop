<template>
<div id="add">
  <Header :message="message"></Header>
  <div class="content">
    <ul>
      <li>收货人</li>
      <li><input type="text" placeholder="收货人姓名" value="" /></li>
    </ul>
    <ul>
      <li>联系方式</li>
      <li><input type="text" placeholder="联系人手机号码" value="" /></li>
    </ul>
    <ul>
      <li>所在地区</li>
      <li><input type="text" placeholder="选择收货地址" readonly class="area" value="" /></li>
    </ul>
    <ul>
      <li>详细地址</li>
      <li><input type="text" placeholder="街道详地址" value="" /></li>
    </ul>
    <ul>
      <li>设为默认地址</li>
      <li><input type="checkbox" /></li>
    </ul>
    <button type="button" class="submit" @click="saveAddr">保存</button>
    <button type="button" class="submit" @click="deleteAddr">删除</button>
    

  </div>
        
  <!-- <messagebox :v-if="showCancelButton"></messagebox> -->

  




</div>

</template>
<script>


export default{
  name:"add",
  data(){
    return{
      message:"编辑收货地址"
      

    }
  },
  methods:{
    saveAddr(){
      this.$toast("保存成功");
      // this.$router.push('address');
    },
    deleteAddr(){
      this.$messagebox.confirm("确定执行此操作？").then(
         action=>{
        }
      )
       
      
      // MessageBox({
      //    title: 'Notice',
      //    message: 'Are you sure?',
      //    showCancelButton: true
      //    });
    //   MessageBox({
    //     title: '提示',
    //     message: '确定删除该地址吗?',
    //     // showInput:'yes',
    //     showCancelButton: true
    //   }).then(action=>{
    //     if(action==='confirm'){
    //       console.log(1)
    //     }
    //     if(action==='cancel'){
    //       console.log(2)
    //     }
    //   }).catch(err=>{
    //     console.log(err)
    //   })
     
    // }

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
    ul{
      width:100%;
      height:.5rem;
      border-bottom:1px solid silver;
      display:flex;
      align-items:center;
      li{
        list-style: none;
        font-size:.18rem;
        margin-left:.13rem;
        li:nth-child(2){
          width:70%;
          height:100%;
        }
        input[type='text']{
          outline:none;
          border:0;
          font-size:.18rem;
        }
        .area{
          outline:none;
          border:0;
          font-size:.15rem !important;
        }
        input[type='checkbox']{
          width:.2rem;
          height:.2rem;
          margin-top:.1rem;
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
}

</style>