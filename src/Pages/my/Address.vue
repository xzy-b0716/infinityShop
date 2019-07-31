<template>
<div id="Address">
  <Header :message="message"></Header>
  <ul class="content">
    <li v-for="(list,index) in lists" :key="index" class="li">
      <div class="c-left">
        <div class="c-left-up">
          <p class="name">{{list.name}}</p>
          <p class="tell">{{list.tel}}</p>
          <p v-if="list.v_show" class="show">默认</p>
        </div>
        <div class="c-left-down">
          
          <p class="addr">{{list.addr}}</p>
        </div>
      </div>
      <div class="c-right">
        <p class="change" @click="changeAddr">编辑</p>
      </div>
    </li>
  </ul>
  <div class="down">
    <i class="icon-jiahaob" id="iconjia" @click="addAddr"></i>
  </div>
  
  <router-view></router-view>

</div>
</template>
<script>
export default{
  name:"Address",
  data(){
    return{
      message:"我的收货地址",
      lists:[
        {
          name:"周淘宝",
          tel:"15900181324",
          v_show:true,
          addr:"陕西省西安市长安区韦曲街道春天花园小区9号楼2单元150本门周先生收"
        },
        {
          name:"李京东",
          tel:"15900181324",
          v_show:false,
          addr:"陕西省西安市雁塔区"
        },
        {
          name:"赵阿里",
          tel:"15900181324",
          v_show:false,
          addr:"陕西省西安市高新区"
        },
        {
          name:"王唯品",
          tel:"15900181324",
          v_show:false,
          addr:"陕西省西安市小寨区"
        },
        {
          name:"孙多多",
          tel:"15900181324",
          v_show:false,
          addr:"陕西省西安市碑林区"
        }

      ]

    }
    
  },
  methods:{
    addAddr(){
      this.$router.push('addaddress');
    },
    changeAddr(){
      this.$router.push('changeaddress');
    }
  }
}
</script>
<style scoped lang="less">
#Address{
  .content{
    .li{
      list-style:none;
      display:flex;
      align-items: center;
      justify-content: center;
      border-bottom:1px solid silver;
      .c-left{
        width:85%;
        padding-left:.16rem;
        padding-right:.2rem;
        margin-top:.1rem;
        margin-bottom:.1rem;
       
        .c-left-up{
          display:flex;
          align-items:center;
          justify-items:center;
          margin-bottom:.1rem;
          .name{
          font-size:.18rem;
          margin-right:.2rem;
          }
          .tell{
            font-size:.15rem;
            color:silver;
            margin-right:.2rem;
          }
          .show{
            font-size:.15rem;            
            color:rgb(32, 120, 192);
            background-color: rgba(146, 202, 202, 0.794);
          }

        }
        .c-left-down{
          .addr{
            font-size:.15rem;
          }

        }
        

        

      }
      .c-right{
        border-left:1px solid silver;
        width:15%;
        display:flex;
        align-items: center;
        justify-content: center;
        .change{
          font-size:.15rem;
          color:rgb(165, 159, 159);
        }

      }
    }
  }
  .down{
    text-align:center;
    margin-top:.2rem;
    #iconjia{
    width:100%;
    color:rgba(126, 195, 216, 0.959);
    font-size:.6rem;
    }

  }
  


}

  
</style>




