<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-01 01:55:29
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-13 17:41:32
 -->

<template>
<div id="add">
  <Header :message="message"></Header>
  <form class="content">
    <ul>
      <li>收货人</li>
      <li>
        <input type="text" placeholder="收货人姓名" required="required">
      </li>
    </ul>
    <ul>
      <li>联系方式</li>
      <li>
        <input type="text" placeholder="联系人手机号码"  required="required">
        </li>
    </ul>
    <ul>
      <li>所在地区</li>
      <li>
        <input type="text" placeholder="选择收货地址" readonly class="area" required="required">
      </li>
    </ul>
    <ul>
      <li>详细地址</li>
      <li>
        <input type="text" placeholder="街道详细地址" required="required">
        </li>
    </ul> 
     <ul>
      <li>设为默认地址</li>
      <li>
        <input type="checkbox">
      </li>
    </ul>
    <button type="button" class="submit" @click="saveAddr">保存</button>
  </form>
        
  

  




</div>

</template>
<script>


export default{
  name:"add",
  
  data(){
    return{
      message:"添加收货地址"
      // lists:[
      //   {
      //     word:"收货人",
      //     type:"text",
      //     placeholder:"收货人姓名",
      //     required:"required"
      //   },
      //   {
      //     word:"联系方式",
      //     type:"tel",
      //     placeholder:"联系人手机号码",
      //     required:"required"
      //   },
      //   {
      //     word:"所在地区",
      //     type:"text",
      //     placeholder:"选择收货地址",
      //     required:"required"
      //   },
      //   {
      //     word:"详细地址",
      //     type:"text",
      //     placeholder:"街道详细地址",
      //     required:"required"
      //   },
      //   {
      //     word:"设为默认地址",
      //     type:"checkbox",
      //     placeholder:""
      //   }

      // ]

    }
  },
  methods:{
    
    saveAddr(){
      
      // this.$toast("保存成功");
      // this.$router.push('address');
    }
       
      
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