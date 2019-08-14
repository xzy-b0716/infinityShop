<template>
  <div class="describe">  
      <ul class="imgList" :style="style" @touchstart='touchStart' @touchend='touchEnd' >
          <li v-for="(item,index) in goodsdetail.product.carousel" :key="index">
              <img :src= "item.path" alt="图片走丢啦"></li>
              </ul>  

 <i class="icon-shangyibu" @click="back()"></i>
 <div class="number">{{currentindex+1}}/5</div>
<div class="time">
 <p class="price">￥{{goodsdetail.seckillPrice}} <span>七夕节特惠</span> </p>
<div class="reversetime">
 <p>{{str}}</p> 
<p v-show="pshow"><span>{{hour}}</span>:<span>{{minute}}</span>:<span>{{second}}</span></p>
</div>
</div>
 <div class="box">
    <p class="p1">{{goodsdetail.product.productName}}</p>
    <p class="p2">￥{{goodsdetail.product.productPrice}}</p>
    </div>
   <div :class="{'choosesize':true,'show':showSize}">
       <span class="span">{{size}}</span> 
       <div :class="{'choose':true,'show1':showSize}" @click="listShow">
           <i class="icon-xia"></i>
       </div>
   </div>
<ul class="size" v-if="showSize">
    <li v-for="(item,index) in goodsdetail.product.productSize" :key="index" @click="changeSpan(index)">{{item.size}}</li>
</ul>
<ul class="colorList">
    <p class="pcolor">Color : {{color}}</p>
    <li v-for="(item,index) in goodsdetail.product.productColor" :key="index" :style="{'background-color':item.color}" @click="changePcolor(index)">
        <i class="icon-guifanjieguoyeduigou" v-if="item.show"></i>
    </li>
</ul>
<p class="cardlist" @click="topay()">{{msg}}</p>
<hr>
<div class="comment" @click="$router.push({path:'/comment',query:{datas:productDiscuss}})">
  <p> 宝贝评价({{goodsdetail.countDiscuss}})</p>
  <p class="read">查看全部 &gt;</p>
   <ul>
     <li>
        <p class="username">
           <i class="icon-zuanshi"></i>
          <span>{{goodsdetail.product.productDiscuss[0].user.userName}}</span>
        <span class="commenttime">{{goodsdetail.product.productDiscuss[0].pdCreatetime}}</span>
           </p>
     <p class="usercomment"> {{goodsdetail.product.productDiscuss[0].producDiscussComment}}</p> 
    </li>
  </ul> 
</div>
<div class="information">
  <p> 宝贝详情</p>
  <ul>
      <li v-for="(item,index) in goodsdetail.information" :key="index">
         <span class="describename">{{item.name}}</span> 
         <span>{{item.describe}}</span>
      </li>
  </ul>
    </div>
 <recommend></recommend>

</div>
</template>

<script>

export default {
  name: 'describe',
  data () {
    return {
         msg:"立即购买",
         showSize:false,
         color:'',
         size:"请选择颜色",
         productDiscuss:[],
         seckillStartTime:"2019-07-12 2:47:00",
         seckillEndTime:"2019-07-12 2:48:00",
         str:"距离秒杀结束还有",
         pshow:true,
         startX:0,   //触摸位置
         disX: 0, 
         currentindex:0,
         style:'',        
         hour:'',
         minute:'',
         second:'',
         timer:null,
         goodsdetail:{},
         seckill:{},
         nowTime:'',
         timer1:null,
         end:null


    }
    
  },
  methods:{
      topay(){ 
          if(this.goodsdetail.seckillStock==0){
            this.$toast("已售空")
           }    
           else if(this.size=="Choose your size"||this.color==''){
            this.$toast("请选择颜色或尺码")
           }else{
            this.$axios.get('./../static/seckill.json')
            .then(
             (res)=>{
             return eval(res.data);} )
             .then((res)=>{
                this.seckill=res;
                 if(this.seckill.success==true){
                  this.$router.push("/pay")
                 }
                if(this.seckill.data.state==-1) {
                        this.$toast("重复秒杀")
                    }
                if(this.seckill.data.state==-4) {
                        this.$toast("不在秒杀时间范围内")
                        }
                if(this.seckill.data.state==-2) {
                        this.$toast("系统异常")
                    }            
                 
                 })
           }
        }
       

  ,
        touchStart(ev){
                ev= ev || event 
            if(ev.touches.length == 1){
            this.startX = ev.touches[0].clientX;
                }
            },
         touchEnd(ev){
              ev = ev || event;
              if (ev.changedTouches.length == 1) {
              let endX = ev.changedTouches[0].clientX;
              this.disX = this.startX - endX;
              if ((this.disX)<0) {
                 if(this.currentindex==0)
             {
             }
             else{
            this.currentindex-=1;      
            this.style = 'left:'+(-100)*this.currentindex+'%'; 
             }           
              }else  if (this.disX > 0){
             if(this.currentindex==4)
             {
             }else{
            this.currentindex+=1;      
           this.style = 'left:'+(-100)*this.currentindex+'%' ;
             }
        
              }
              }
               
           
            },
      back(){
          this.$router.go(-1);
      },
      listShow(){
       this.showSize=!this.showSize;
      },
      changePcolor(n){
          this.color= this.goodsdetail.product.productColor[n].color;
          for(var i=0;i<this.goodsdetail.product.productColor.length;i++){
          this.goodsdetail.product.productColor[i].show=false;
          }
          this.goodsdetail.product.productColor[n].show=true;
         
      },
      changeSpan(n){
          this.size=this.goodsdetail.product.productSize[n].size;
          this.showSize=!this.showSize;
      },
       fTime(n){
     return n<10 ? "0"+n : ""+n;
      },   
      f(){
          console.log("timer")
    var iNow = new Date();  //当前时间对象
    var iNew = this.end;      
    var t = Math.floor((iNew - iNow)/1000); 
    var iH = Math.floor(t/3600); //时
    var iM = Math.floor(t%3600/60); //分
    var iS =t%60; //秒  
    var str=this.fTime(iH)+this.fTime(iM)+this.fTime(iS);
    if(str=="000000")
    {
        var that=this;
        clearInterval(that.timer);
        this.pshow=false;
        this.str="秒杀结束";      
        this.msg="秒杀结束";


    }
    this.hour=this.fTime(iH);
    this.minute=this.fTime(iM);
    this.second=this.fTime(iS);  
      
    },      
    fortime2(){
    this.str="距离秒杀结束还有",
    this.f();        
    var that=this;   
    this.timer=setInterval(that.f,1000); 
      },
    parseToDate(strTime)
{
 var arr=strTime.split(" ");
 if(arr.length>=2)
 {
  var arr1=arr[0].split("-");
  var arr2=arr[1].split(":");
 }
 else
  return null;
 if(arr1.length>=3 && arr2.length>=3)
 {
  var b=new Date(arr1[0],arr1[1],arr1[2],arr2[0],arr2[1],arr2[2]);//将字符串转换为date类型
  return b;
 }
 else
  return null;
},
first(){    
    console.log("timer1")
          var iNow=new Date();
          iNow=iNow.getTime();
          var start=this.parseToDate(this.seckillStartTime);
          var end=this.parseToDate(this.seckillEndTime);
          this.end=end;
          var startTime=start.getTime();
          var endTime=end.getTime();  
          if(iNow>endTime){
            this.str="秒杀已结束";
            this.pshow=false;
            var that=this;           
            clearInterval(that.timer1);
             this.msg="秒杀已结束"
           }else if(iNow<startTime){
             this.str="秒杀时间";
             this.hour=this.fTime(start.getHours());
             this.minute=this.fTime(start.getMinutes());
             this.second=this.fTime(start.getSeconds());
             this.pshow=true;
             this.msg="秒杀未开始"
           }else
               {
              var that=this; 
             clearInterval(that.timer1);        
             this.fortime2();
             this.pshow=true;
             this.msg="立即购买"
           }
}

  },
      created(){
     this.$axios.get('./../static/secdestail.json')
     .then(
         (res)=>{
         return eval(res.data);

         } )
         .then((res)=>{          
            this.goodsdetail=res;
            this.productDiscuss=this. goodsdetail.product.productDiscuss;
            this.seckillStartTime=this.goodsdetail.seckillStartTime ;
            this.seckillEndTime=this.goodsdetail.seckillEndTime;
            if(this.goodsdetail.seckillStock==0){
            this.msg="已售空"
          
            }                 
            }

         )
         .catch(function (error) { 
          console.log(error);
      }) 
         this.first();  
         var that=this;
        this.timer1=setInterval(that.first,1000) 
         
         
     
      },
     
}


      

</script>

<style scoped lang="less">

.describe{
    font-size:16px;
    position:relative;
    overflow:hidden;
}
.imgList{
position: relative;
left:0;
width:500%;
height:3rem;
list-style:none;
transition: 0.3s;
 li{
width:20%;
height:3rem;
float:left;
img{
    width:100%;
    height:100%;
}
}
}
.icon-shangyibu{
    font-size:30px;
    position:absolute;
    left:.1rem;
    top:.1rem;
    color:#F2F3F1;
}
.number{
  position:absolute;
  left:.1rem;
  top:2.6rem;
  width:.5rem;
  height:.25rem;
  line-height:.25rem;
  text-align: center;
  background:rgba(0, 0, 0, 0.203);
  border-radius: .3rem;  
  color:rgba(255, 255, 255, 0.538);
}
.time{
    width:100%;
    height:.8rem;
    border-bottom:1px solid #cccccc;
    background-color:#FF126A;
    display:flex;
 .price{
padding-left:5%;
width:60%;
font-size:.3rem;
font-weight:bold;
line-height:.8rem;
color:white;
span{
    background:#46AAFF;
    font-size:12px;
    font-weight:normal;
}
}

 .reversetime{
    // padding-top:.1rem;
    // position:absolute;
    // right:0;
    width:40%;
    height:.8rem;
    text-align:center;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    p{
        font-size:.18rem;
        width:100%;
        // height:.4rem;
        // line-height:.4rem;
    }
    span{
        display:inline-block;
        background:black;
        color:white;
        padding:.02rem;
        // margin-top:.08rem;
    }
    
}
}

.box{
    width:90%;
    height:.8rem;
    font-size:.2rem;    
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
            {    position:relative;
                line-height:.4rem; 
                 .commenttime{
                      position:absolute;
                      right:1%;  
                    }
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
 










</style>

