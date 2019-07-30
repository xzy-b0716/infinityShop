<template>

  <div id="my">
    <Header :message="username" class="header"></Header>
    <header class="top">
      <div>
        <img class="back_img" :src="url1">
      </div>
      <img class="head_img" :src="url2">
      <p class="setence">你想要做什么？</p>
    </header>
    <ul class="ul">
      <li v-for="(list,index) in lists" :key="index" class="li" @click="routeTo(index)">
          <div class="m-left">
            <div id="icon1"><i :class="list.iconf1" id="ico1"></i></div>
            <p class="words">{{list.word}}</p>
          </div>
          <div class="m-right">
             <i :class="list.iconf2" id="ico2"></i>
          </div> 
      </li>

      
    </ul>
    <img class="bottom_img" :src="url3">
    <router-view></router-view>  

    <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
export default {
  name: 'my',
  data(){
    return{
          n:4,
          username:"Jack",
      lists:[
         {iconf1:'icon-wodedingdan',
         word:'我的订单',
         iconf2:'icon-youjiantou',
         link:'orders',
         name:'Orders'},
         {iconf1:'icon-04',
         word:'个人信息',
         iconf2:'icon-youjiantou',
         link:'details',
         name:'Details'},
         {iconf1:'icon-dizhi',
         word:'收货地址',
         iconf2:'icon-youjiantou',
         link:'address',
         name:'Address'
         },
         {iconf1:'icon-yiwen',
         word:'帮助',
         iconf2:'icon-youjiantou',
         link:'help',
         name:'Help'
         },
         {iconf1:'icon-shezhi',
         word:'设置',
         iconf2:'icon-youjiantou',
         link:'settings',
         name:'Settings'
         }
      ],
      url1:require('../assets/img/3.png'),
      url2:require('../assets/img/2.png'),
      url3:require('../assets/img/1.png'),
      username:"Jennifer"
    }
  },
  methods:{
    routeTo(index){
      this.$router.push(this.lists[index].link);
    }
    // routeTo(list){
    //   this.$router.push({
    //     path:'/my/$(list.id)'
    //   })
    // }
      
    }
}
</script>


<style scoped lang="less">
.header{
  position:fixed;
  top:0;
}
#my{
  padding:.5rem 0 .6rem;
  
}
.bottom{
    position:fixed;
    bottom:0;

}
.top{
  font-size:.15rem;
  position:relative;
  height:3rem;
  overflow:hidden;
  div{
    display:relative;
    .icoleft{
      display:absolute;
      float:left;
      padding-left:.14rem;
    }
    .uname{
      position:absolute;
      left:50%;
      top:0;
    }
    .logout{
      float:right;
      padding-right:.14rem;
    }
    .back_img{
      height:2rem;
      width:100%;
    }
  }
  
.head_img{
  position:absolute;
  width:.85rem;
  height:.85rem;
  border-radius:50%;
  top:1.6rem;
  left:50%;
  transform:translate(-50%,0);
}
.setence{
  text-align:center;
  line-height:1.4rem;
}
}
.ul{
  border-top:1px solid silver;
  margin-bottom:.2rem;

 
  .li{
  list-style:none;
  border-bottom:1px solid silver;
  height:.55rem;
  display:flex;
  align-items: center;
  
  .m-left{
    width:85%;
    height:.55rem;
    padding-left:.17rem;
    display:flex;
    align-items: center;
    
    .words{
    font-size:.20rem;
    font-weight:bloder;
    }
  #icon1{
  border:.01rem solid silver;
  border-radius:50%;
  width:.36rem;
  height:.36rem;
  margin-right:.14rem;
  box-shadow: 0 0 0.05rem  rgb(199, 194, 194);
  display:flex;
  justify-content: center;
  align-items:center;

  #ico1{   
  color:black;
  font-weight:bloder;
  font-size:.2rem;
  }
  }
}  
.m-right{
  width:15%;
  height:.55rem;
  display:flex;
  justify-content: center;
  align-items: center;
  #ico2{
    font-size:.22rem; 
  }
}
}
}

.bottom_img{
  width:90%;
  height:2rem;
  margin-left:5%;

  
}





</style>

