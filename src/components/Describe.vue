<template>
  <div class="describe">
<ul class="imgList">
    <li v-for="(item,index) in arr " :key="index">
        <i class="icon-fanhui"></i>
        <img :src="item.url" alt="图片走丢啦">
    <i :class="{'icon-shoucang':true,'checked':like}" @click="changeClass"></i>
    </li>
</ul>
    <div class="box">
    <p class="p1">makes me feel warm and comfortable.</p>
    <p class="p2">$38.89</p>
    </div>
   <div :class="{'choosesize':true,'show':showSize}">
       <span class="span">{{size}}</span> 
       <div :class="{'choose':true,'show1':showSize}" @click="listShow">&gt;&gt;</div>
   </div>
<ul class="size" v-if="showSize">
    <li v-for="(item,index) in sizeList" :key="index" @click="changeSpan(index)">{{item}}</li>
</ul>
<ul class="colorList">
    <p class="pcolor">Color : {{color}}</p>
    <li v-for="(item,index) in colorArr" :key="index" :style="{'background-color':item}" @click="changePcolor(index)"></li>
</ul>
<p class="cardlist" @click="showPopup">Add to bag</p>
<div class="popup" v-if="show1"></div>
<!-- <transition name="PopupTS">
<div class="Popup" v-show= "show1">
<div class="content">
<span>已加入购物车</span>
</div>
</div> -->
<ul class="product">
<li v-for="(item,index) in product" :key="index">{{item.name}}</li>
</ul>
<p class="tuijian">Buy the look</p>




  </div>
</template>

<script>

export default {
  name: 'describe',
  data () {
    return {
         like:false,
         showSize:false,
         color:'',
         show1:false,
         size:"Choose your size",
         colorArr:["red","yellow","green","pink","red","yellow","green","pink",],
   arr:[{
       url:require('../assets/img/1.jpg')
      
   }],
   sizeList:["S","M","L"],
   product:[
       {
       name:"product details",
       content:"Long,long ago there lived a king.He loved horses. One day he asked an artist to draw him a beautiful horse. ",
       show:true
   },
   {
       name:"product details",
       content:"Long,long ago there lived a king.He loved horses. One day he asked an artist to draw him a beautiful horse. ",
       show:false
   },
   {
       name:"product details",
       content:"Long,long ago there lived a king.He loved horses. One day he asked an artist to draw him a beautiful horse. ",
       show:false
      },
   {
       name:"product details",
       content:"Long,long ago there lived a king.He loved horses. One day he asked an artist to draw him a beautiful horse. "  ,
       show:false     
   }]
    }
    
  },
  methods:{
      changeClass(){
          this.like=!this.like;
      },
      listShow(){
       this.showSize=!this.showSize;
      },
      changePcolor(n){
          this.color= this.colorArr[n];
      },
      changeSpan(n){
          this.size=this.sizeList[n];
          this.showSize=!this.showSize;
      },
      showPopup(){
        this.show1=true;
        var that = this;
        setTimeout(function(){
        that.show1 = false;
        },2000)
}
      }

  }

</script>

<style scoped>
.checked{
    color:red;
}
.describe{
    font-size:16px;
    position:relative;
}
.imgList{
width:800px;
height:3.5rem;
list-style:none;
}
.imgList li{
position:relative;
width:3.75rem;
height:3.5rem;
float:left;
}
.icon-fanhui{
    font-size:30px;
    position:absolute;
    left:.1rem;
    top:.1rem;
    color:#F2F3F1;
}
.icon-shoucang{
  position:absolute;
  bottom:.1rem;
  right:.1rem;
  font-size:30px;

}
img{
    width:100%;
    height:100%;
}
.box{
    width:90%;
    height:.8rem;
    font-size:20px;    
    display:flex;
    align-items: center;
    margin:auto;
    
    }
.p1{    
    width:70%;
    height:.8rem;
    font-size:18px;
    overflow: hidden;
     display:flex;
    align-items: center;
    
   
}
.p2{
    width:30%;
    height:.8rem;
    display:flex;
    align-items: center;
    justify-content:flex-end;    
}
.choosesize{
    display:flex;
    width:90%;
    height:.4rem;
    margin:auto;
    border:1px solid #C9C9C9;
    border-radius: .05rem;
    align-items: center;
    justify-content:space-between;
    padding-left:.1rem;
    overflow: hidden;
    }
    .show{
       border-radius:.05rem .05rem 0 0;   
    }

.choose{
       width:.4rem;
       height:.4rem;
       line-height:.4rem;
       text-align: center;
       background-color:#46AAFF;
       border-radius:0 .05rem 0 0;

}
.span{
    font-size:14px;
}
.size{
    width:90%;
    margin:auto;
    list-style:none;
    border:1px solid #C9C9C9;
    border-top:none;

}
.size li
{
    height:.4rem;
    line-height: .4rem;
    border-bottom:1px solid  #C9C9C9;
    padding-left:.1rem;
}
.size li:hover{
    background-color: #46AAFF;
}
.colorList{
    width:90%;
    margin:auto;
    height:1rem;
    list-style: none;

}
.colorList li{
    height:.3rem;
    width:.3rem;
    border-radius:50%;
    background-color: aqua;
    margin-right:.1rem;
    float:left;
}
.pcolor{
    height: 0.4rem;
    line-height:.4rem;
    margin:auto;
    font-size: 14px;
    margin-bottom:.05rem;
}
.cardlist{
    width:90%;
    height:.4rem;
    background-color: #46AAFF;
    margin:auto;
    border-radius:.03rem;
    text-align: center;
    line-height:.4rem

}
.popup{
    width:1rem;
    height:.5rem;
    background-color:black;
    position:fixed;
    left:50%;  
    top:50%;
    /* transform:translate(-0.5rem,-0.25rem); */
}
/* PopupTS-enter-active {
animation-name: enterIn;
animation-duration: 0.3s;
animation-fill-mode: both;
}
.PopupTS-leave-active {
animation-name: enterOut;
animation-duration: 0.3s;
animation-fill-mode: both;
}
@keyframes enterIn {
0% {opacity: 0;}
to {opacity: 0.5;}
}
@keyframes enterOut {
0% {opacity: 0.5;}
to {opacity: 0;}
} */
.product{
    width:100%;
    list-style:none;
    margin-top:.2rem;

}
.product li{
width:100%;
height:.5rem;
padding-left:5%;
font-size:22px;
line-height:.5rem;
border-bottom:1px solid #EAEAEA;
}
.tuijian{
    height:.6rem;
    padding-left:5%;
    line-height:.6rem;
    font-size:18px;
    background-color: blanchedalmond;


}



</style>

