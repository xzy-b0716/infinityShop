<template>
  <div id="my">
    <header class="top">
      
      <img class="back_img" :src="url1">
      <img class="head_img" :src="url2">
      <p class="setence">你想要做什么？</p>
      
    </header>
    
    
    <ul class="ul">
      <li v-for="(list,index) in lists" :key="index" class="li">
        <div class="middle">
            <div id="icon1"><i :class="list.iconf1" id="ico1"></i></div>
            <p class="pword">{{list.word}}</p>
            <i :class="list.iconf2" id="ico2"></i>
        </div>
      </li>
    </ul>
    <img class="bottom_img" :src="url3">
    
  </div>
  
  
</template>

<script>
export default {
  name: 'my',
  data(){
    return{
      lists:[
         {iconf1:'icon-dingdan',word:'我的订单',iconf2:'icon-youjiantou'},
         {iconf1:'icon-wode',word:'个人信息',iconf2:'icon-youjiantou'},
         {iconf1:'icon-zhifu',word:'支付方式',iconf2:'icon-youjiantou'},
         {iconf1:'icon-dizhi',word:'收货地址',iconf2:'icon-youjiantou'},
         {iconf1:'icon-bangzhu',word:'帮助',iconf2:'icon-youjiantou'},
         {iconf1:'icon-icon-test',word:'设置',iconf2:'icon-youjiantou'}
      ],
      url1:require('../assets/img/3.png'),
      url2:require('../assets/img/2.png'),
      url3:require('../assets/img/1.png')
      
     
    }
  }
}
</script>

<style scoped lang="less">

.top{
  font-size:15px;
  .back_img{
  height:200px;
  width:100%;
}
.head_img{
  width:50px;
  height:50px;
  border-radius:50%;
  margin:0 auto;
}
.setence{
  margin:0 auto;
}
}


.ul{
  border-top:1px solid silver;
  height:300px;
  margin-top:.2rem;
  .li{
  list-style:none;
  border-bottom:1px solid silver;
  height:.5rem;
  display:flex;
  align-items: center;
  .middle{
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  align-items:center;
  .pword{
    font-size:.22rem;
    font-weight:bloder;
    // padding-left:.1rem;
  }
  #ico2{
    font-weight:bloder;
    font-size:.22rem;
    
  }
  #icon1{
  border:.01rem solid silver;
  border-radius:50%;
  width:.4rem;
  height:.4rem;
  box-sizing:border-box;
  display:flex;
  box-shadow:0 0 0.05rem  rgb(199, 194, 194);
  #ico1{ 
  margin:auto; 
  color:black;
  font-weight:bloder;
  font-size:.22rem;
}
}  
}

}

}





// .pword{
//   display:inline-block;
// }


.bottom_img{
  width:300px;
  height:200px;
  padding:20px;
}





</style>

