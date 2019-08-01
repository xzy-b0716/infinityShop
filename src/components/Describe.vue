<template>
  <div class="describe">
<ul class="imgList">
    <li v-for="(item,index) in arr " :key="index">
        <i class="icon-shangyibu" @click="back()"></i>
        <img :src="item.url" alt="图片走丢啦">
    <i :class="{'icon-shoucang':true,'icon-shoucang1':like}" @click="changeClass"></i>
    </li>
</ul>
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
<p class="cardlist" @click="showPopup">加入购物车</p>

<transition name="PopupTS">
<div class="popup" v-show= "show1">已加入购物车</div>
</transition>
<hr>
<div class="comment" @click="$router.push('/comment')">
  <p> 宝贝评价(200)</p>
  <p class="read">查看全部 &gt;</p>
    <ul>
    <li>
       <p class="username">
           <i class="icon-zuanshi"></i>
           Lisa</p>
       <p class="usercomment">包包收到了，速度很快，质量很好，很喜欢，推荐购买，快快买吧</p> 
    </li>
  </ul>
</div>
<div class="information">
  <p> 宝贝详情</p>
  <ul>
      <li v-for="(item,index) in information" :key="index">
         <span class="describename">{{item.name}}</span> 
         <span>{{item.describe}}</span>
      </li>
  </ul>
    </div>
<p class="tuijian">猜你喜欢</p>
<recommend></recommend>





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
   information:[
       {
           name:"品牌",
           describe:"钻尚"
       },
       {
           name:"质地",
           describe:"帆布"
       },
         {
           name:"风格",
           describe:"日韩"
       },
         {
           name:"版型",
           describe:"常规"
       }
   ]    } 
 
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
        // this.show1=true;
        // var that = this;
        // setTimeout(function(){
        // that.show1 = false;
        // },1500)
        if(this.size=="Choose your size"||this.color=='')
        this.$toast("请选择颜色或尺码")
        else
        this.$toast("已加入购物车")
} 

  }
}

</script>

<style scoped lang="less">
.describe{
    font-size:16px;
    position:relative;
    overflow: hidden;
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
overflow: hidden;
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
    line-height:.2rem;
    text-align:center;
    padding:.15rem;
    height:.5rem;   
    background:rgba(0,0,0,0.5);
    position:fixed;
    color:#fff;
    left:50%;  
    top:50%;
    transform:translate(-50%,0);
    border-radius:.08rem;
    z-index:20; 
 
}
.PopupTS-enter-active,.PopupTS-leave-active {
  transition:all 1s;
}
.PopupTS-enter,.PopupTS-leave-to{
   opacity: 0;
    }
.PopupTS-leave,.PopupTS-enter-to{
    opacity: 1;
}

hr{
    background:rgba(192, 192, 192, 0.15);
    margin-top:.1rem;
    height:.1rem;
    border:none;
}


.comment{
    margin:.1rem 0;
    width:100%;
    padding: 5%;
    // background-color:rgba(192, 192, 192, 0.15);
    position:relative;
    .read{
        position:absolute;
        right:5%;
        top:.1875rem;
        color:#46AAFF;
    }
    >p{
        height:.4rem;
    }
    ul{
        list-style:none;
        li{
           .username
            {
                line-height:.4rem; 
                .icon-zuanshi{
                    font-size:16px;
                    color:#FF126A;
                }           
        }
        .usercomment{
            display:inline-block;

        }
       
    }
}
}
.information{
    width:100%;
    >p{
        height:.5rem;
        line-height:.5rem;
        text-align:center;
        background-color:rgba(192, 192, 192, 0.15);
    }
        ul{
            width:100%;
            li{
                width:100%;
                height:.5rem;
                padding:0 5%;    
                border-bottom:1px solid rgba(192, 192, 192, 0.15);    
                span{
                    display:inline-block;
                    margin-right:.1rem;
                    line-height:.5rem;
                    color:rgba(0, 0, 0, 0.76);             
                 } 
                .describename{
                    margin-right:1.2rem;
                    color:black;
                }  }
            }
        }
 .tuijian{
    margin-top:.1rem;
    height:.4rem;
    padding-left:5%;
    line-height:.4rem;
    font-size:18px;


}



</style>

