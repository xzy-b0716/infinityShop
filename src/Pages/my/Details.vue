<template>
<div id="Details">
  <Header :message="message"></Header>
  <ul class="content">
    <li v-for="(lista,index) in listsa" :key="index +'_a'" class="li" @click="changepic">
      <div class="c-left">
        <p class="c-word">{{lista.word}}</p>  
      </div>
      <div class="c-right">
        <img :src="lista.url" class="imgs">
        <i :class="lista.iconf" id="icon2"></i>
      </div>
    </li>
    <li v-for="(listb,index) in listsb" :key="index +'_b'" class="li">
      <div class="c-left">
        <p class="c-word">{{listb.word}}</p>
      </div>
      <div class="c-right">
        <p class="c-uword">{{listb.uword}}</p>
        <i :class="listb.iconf" id="icon2"></i>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default{
  name:"Details",
  data(){
    return{
      message:"个人信息",
      listsa:[
        {
          word:"头像",
          url:require('@/assets/img/2.png'),
          iconf:"icon-guifanliebiaoxiayibu"
        },
        {
          word:"个人主页背景",
          url:require('@/assets/img/3.png'),
          iconf:"icon-guifanliebiaoxiayibu"
        } 
      ],
      listsb:[
        {
          word:"会员名",
          uword:"lxp",
          iconf:""
        },
        {
          word:"昵称",
          uword:"Jennifer",
          iconf:"icon-guifanliebiaoxiayibu"
        },
        {
          word:"密码",
          uword:"",
          iconf:"icon-guifanliebiaoxiayibu"
        },
        {
          word:"邮箱",
          uword:"",
          iconf:"icon-guifanliebiaoxiayibu"
        },
        {
          word:"电话",
          uword:"",
          iconf:"icon-guifanliebiaoxiayibu"
        },
        {
          word:"生日",
          uword:"",
          iconf:"icon-guifanliebiaoxiayibu"
        },
        {
          word:"性别",
          uword:"",
          iconf:"icon-guifanliebiaoxiayibu"
        }

      ]
      

    }
  },
  methods:{
    changepic(){
      console.log("1233")
    }

  }
}
</script>
<style scoped lang="less">
#Details{
  .content{
    .li{
      list-style:none;
      height:.5rem;
      font-size:.20rem;
      display:flex;
      align-items: center;
      justify-items: center;
      border-bottom:0.5px solid silver;
      .c-left{
        padding-left:.16rem;
        width:40%;
        .c-word{
          color:black;

        }
      }
      .c-right{
        width:60%;
        color:silver;
        display:flex;
        align-items: center;
        justify-items: center;
        justify-content:flex-end;
        padding-left:1.2rem;
        .imgs{
          width:.4rem;
          height:.4rem;
          margin-right:.12rem;

        }
        .c-uword{
          color:silver;
          margin-right:.12rem;

        }
        #icon2{
          font-size:.25rem;
          padding-right:.16rem;
          

        }


      }
    }
  }
}

</style>

