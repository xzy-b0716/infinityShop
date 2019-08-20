<template>
  <div class="describe">
       <i class="icon-shangyibu" @click="back()"></i>
        <i :class="{'icon-shoucang':true,'icon-shoucang1':goodsdetail.collect}" @click="changeClass"></i>
<ul :style="style"  class="imgList" @touchstart='touchStart' @touchend='touchEnd'>
    <li v-for="(item,index) in goodsdetail.carousel" :key="index">   <img :src="item.path" alt="图片走丢啦">
    </li>
</ul>
  <div class="number">{{currentindex+1}}/5</div>
    <div class="box">
    <p class="p1">{{goodsdetail.productName}}</p>
    <p class="p2">￥{{goodsdetail.productPrice}}</p>
    </div>
   <div :class="{'choosesize':true,'show':showSize}">
       <span class="span">{{size}}</span> 
       <div :class="{'choose':true,'show1':showSize}" @click="listShow">
           <i class="icon-xia"></i>
       </div>
   </div>
<ul class="size" v-if="showSize">
    <li v-for="(item,index) in goodsdetail.productSizes" :key="index" @click="changeSpan(index)">{{item.size}}</li>
</ul>
<ul class="colorList">
    <p class="pcolor">Color : {{color}}</p>
    <li v-for="(item,index) in goodsdetail.productColors" :key="index" :style="{'background-color':item.color}" @click="changePcolor(index)">
        <i class="icon-guifanjieguoyeduigou" v-if="item.show"></i>
    </li>
</ul>
<p class="cardlist" @click="showPopup">加入购物车</p>
<hr>
<div class="comment" @click="$router.push({path:'/comment',query:{datas:productDiscuss}})">
  <p> 宝贝评价({{goodsdetail.discussCount}})</p>
  <p class="read">查看全部 &gt;</p>
    <ul>
    <li>
       <p class="username">
           <i class="icon-zuanshi"></i>
          <span>{{user.userName}}</span>
          <span class="time">{{disscusOne.pdCreatetime}}</span> </p>
       <p class="usercomment"> {{disscusOne.producDiscussComment}}</p> 
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
    <!-- <button @click="aaa">点我</button> -->
<p class="tuijian">猜你喜欢</p>
<recommend></recommend>

  </div>
</template>

<script>

export default {
  name: 'describe',
  data () {
    return {
         showSize:false,
         color:'',
         size:"Choose your size",
         productDiscuss:[],
         goodsdetail:{},
         startX:0,   //触摸位置
         disX: 0, 
         currentindex:0,
         style:'',
         disscusOne:{},
         user:{},
         n:3
    }
    
 },
  methods:{
       
// aaa(){
//     this.$store.commit('increment',this.n)
//     console.log(this.userId)
// },
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
      changeClass(){
          this.goodsdetail.collect=!this.goodsdetail.collect;
      },
      listShow(){
       this.showSize=!this.showSize;
      },
      changePcolor(n){
          this.color= this.goodsdetail.productColors[n].color;
          for(var i=0;i<this.goodsdetail.productColors.length;i++){
         this.goodsdetail.productColors[i].show=false;
          }
          this.goodsdetail.productColors[n].show=true;
         
      },
      changeSpan(n){
          this.size=this.goodsdetail.productSizes[n].size;
          this.showSize=!this.showSize;
      },
      showPopup(){
        if(this.size=="Choose your size"||this.color=='')
        this.$toast("请选择颜色或尺码")
        else
        this.$toast("已加入购物车")
}


  },
  created(){
     this.$axios.get('productAll?productId='+this.productId+'&userId=1')
     .then(
         (res)=>{
         return res.data;

         } )
         .then((res)=>{          
            this.goodsdetail=res[0].data;
            this.productDiscuss=this.goodsdetail.productDiscuss;
            this.discussOne= this.productDiscuss[0];
            this.user= this.discussOne.user;
         

         })
         .catch(function (error) { 
          console.log(error);
      })
    
  },
      computed:{
      productId:function(){
          return this.$route.params.productId
      },
      userId(){
         return this.$store.state.userId;
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

.icon-shangyibu{
    font-size:30px;
    position:absolute;
    left:.1rem;
    top:.1rem;
    color:#F2F3F1;
    z-index:11;
    
}
.icon-shoucang{
  position:absolute;
  top:2.55rem;
  right:.15rem;
  font-size:30px;   
  color:white;
  z-index:11;
}
.icon-shoucang1{
    color:red;
}
.imgList{
width:500%;
position:relative;
height:3rem;
list-style:none;
overflow: hidden;
left:0;
transition:0.5s;

li{
position:relative;
width:20%;
height:3rem;
float:left;
overflow: hidden;
img{
    width:100%;
    height:100%;
}
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
            {
                position:relative;
                line-height:.4rem; 
                .time{
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
 .tuijian{
    margin-top:.1rem;
    height:.4rem;
    padding-left:5%;
    line-height:.4rem;
    font-size:18px;


}



</style>

