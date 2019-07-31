<template>
<div id="add">
  <Header :message="message"></Header>
  <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <input type="text" :placeholder="list.warning" class="init">
      <div class="c-right">
        <i :class="list.icon" class="i"></i>
      </div> 
    </li>
  </ul>
  <div class="under">
    <p>设为默认地址</p>

  </div>
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
          warning:"收货人",
          icon:""
        },
        {
          warning:"手机号码",
          icon:"icon-guifanliebiaoxiayibu"
        },
        {
          warning:"所在地区",
          icon:"icon-guifanliebiaoxiayibu"
        },
        {
          warning:"详细地址：如道路、门牌号、小区、楼栋号、单元室等",
          icon:""
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
  .content{
    li{
      list-style:none;
      border-bottom:1px solid silver;
      display:flex;
      align-items:center;
      justify-items:center;
      height:.5rem;
      .init{
        
        width:85%;
        padding-left:.16rem;
        margin-right:.2rem;
        font-size:.18rem;
        height:.5rem;
        border: 0;  
        outline: none;
        background-color: rgba(0, 0, 0, 0);

        }
      .c-right{
        width:15%;
        display:flex;
        align-items: center;
        justify-content: center;
        padding-right:.1rem;
        .i{
          color:silver;
          font-size:.2rem;
          

        }

      }
      

    }
  }
  .under{
    border:1px solid silver;
    height:.5rem;
    margin-top:.15rem;
    font-size:.18rem;
    display:flex;
    align-items: center;
    // justify-content: center;
    p{
      padding-left:.16rem;

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



