<template>
  <div class="describe">
<ul class="imgList">
    <li v-for="(item,index) in arr " :key="index">
        <i class="icon-shangyibu" @click="back()"></i>
        <img :src="item.url" alt="图片走丢啦">
    <i :class="{'icon-shoucang':true,'icon-shoucang1':like}" @click="changeClass"></i>
    </li>
</ul>
<div class="time">
<p class="price">￥25</p>
<p class="reversetime">
    距离秒杀结束还有
    <span>07</span>:<span>06</span>:<span>36</span>
</p>
</div>
    <div class="box">
    <p class="p1">makes me feel warm and comfortable.</p>
    <p class="p2">$38.89</p>
    </div>
   <div :class="{'choosesize':true,'show':showSize}">
       <span class="span">{{size}}</span> 
       <div :class="{'choose':true,'show1':showSize}" @click="listShow">
           <i class="icon-xia"></i>
       </div>
   </div>
<ul class="size" v-if="showSize">
    <li v-for="(item,index) in sizeList" :key="index" @click="changeSpan(index)">{{item}}</li>
</ul>
<ul class="colorList">
    <p class="pcolor">Color : {{color}}</p>
    <li v-for="(item,index) in colorArr" :key="index" :style="{'background-color':item.color}" @click="changePcolor(index)">
        <i class="icon-guifanjieguoyeduigou" v-if="item.show"></i>
    </li>
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
<li v-for="(item,index) in product" :key="index">
   <p class="pname" @click="showContent(index)">{{item.name}}</p>
   <p class="pcontent" v-if="item.show">{{item.content}}</p>
</li>
</ul>





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
         colorArr:[
             {
                color:"red",
                show:false
             },
              {
                color:"yellow",
                show:false
             },
              {
                color:"pink",
                show:false
             },
              {
                color:"green",
                show:false
             },
              {
                color:"blue",
                show:false
             }
                ],
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
   }],

    }
    
  },
  methods:{
      back(){
          this.$router.go(-1);
      },
      changeClass(){
          this.like=!this.like;
      },
      listShow(){
       this.showSize=!this.showSize;
      },
      changePcolor(n){
          this.color= this.colorArr[n].color;
          for(var i=0;i<this.colorArr.length;i++){
          this.colorArr[i].show=false;
          }
          this.colorArr[n].show=true;
         
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
},
showContent(n){
    for(var i=0;i<4;i++){
   this.product[i].show=false;
    }
 
    this.product[n].show=true;
}
      },

  

  }

</script>

<style scoped lang="less">

.describe{
    font-size:16px;
    position:relative;
}
.imgList{
width:800px;
height:3rem;
list-style:none;
}
.imgList li{
position:relative;
width:3.75rem;
height:3rem;
float:left;
}
.icon-shangyibu{
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
  color:white;

}
.icon-shoucang1{
    color:red;
}
img{
    width:100%;
    height:100%;
}
.time{
    width:100%;
    padding:5%;
    height:.8rem;
    position:relative;
    border-bottom:1px solid #cccccc;
}
.time .price{
position:absolute;
left:.2rem;
width:60%;
font-size:26px;
font-weight:bold;


}
.time .reversetime{
    position:absolute;
    right:.2rem;
    width:40%;
    text-align:center;
    line-height:20px;
    span{
        display:inline-block;
        background:black;
        color:white;
        padding:2px;
    }
    
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
    text-decoration: line-through;
    color:#cccccc;

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
    .icon-xia{
        font-size:24px;
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
    padding-top:.05rem;
    width:90%;
    margin:auto;
    height:1.05rem;
    list-style: none;

}
.icon-guifanjieguoyeduigou{
    font-weight:blod;
    font-size:24px;
    color:white;
}
.colorList li{
    height:.3rem;
    width:.3rem;
    border-radius:50%;
    background-color: aqua;
    margin-right:.1rem;
    float:left;
    text-align: center;
    line-height:.3rem;
 
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
border-bottom:1px solid #EAEAEA;

}
.product li .pname{
    margin:auto;
    width:90%;
    height:.5rem;
    line-height:.5rem;
    font-size:22px;
}
.product li .pcontent{
    width:90%;
    margin:auto;
    padding-bottom:.1rem;
}







</style>

