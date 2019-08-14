<template>
  <div class="home">
<div class="swiper">
  <!-- <p>Infinity</p> -->
<ul  :style="style"   @touchstart='touchStart' @touchend='touchEnd'>
  <li v-for="(item,index) in arr " :key="index" @click.stop="$router.push('/describe')">
    <img :src="item.url" alt="图片走丢啦">
  </li>
</ul>
<div class="point">
  <p :class="{'pchecked':currentindex==index}" v-for="(item,index) in arr" :key="index"></p>
</div> 
</div>
<div class="recently-viewed">
  <p>Recently Viewed</p>
<ul class="view" :style="style1" @touchstart='touchStart1' @touchend='touchEnd1'>
<li v-for= "(item,index) in swip2" :key="index" @click.stop="go">
  <img :src="item.url" alt="">
  <i :class="{'icon-shoucang':true,'icon-shoucang1':item.like}" @click.stop="addclass(index)" ></i>
</li>
</ul>
</div>
 <p class="psec">限时秒杀</p>
<div class="sec" @click.stop="$router.push('/seckill')">
<img src="@/assets/img/sec.jpg" alt="图片走丢啦">
</div>
<recommend></recommend>
<bottom class="bottom" :n="n"></bottom>




  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        startX:0,   //触摸位置
        endX:0,     //结束位置
        disX: 0, 
        currentindex:0,
        off:true,
        style:'',
        style1:'',
        left:0,
        timer:null,
       screenWidth:document.body.clientWidth,
      n:0,
      scrollTop:'',
        arr:[
        {
          url:require("@/assets/img/1.jpg"),
          goodsid:1
        },
        {
          url:require("@/assets/img/2.jpg"),
            goodsid:2
        },
        {
          url:require("@/assets/img/1.jpg"),
            goodsid:3
        },
         {
          url:require("@/assets/img/1.jpg"),
            goodsid:3
        }

        ],
        like:false,
        swip2:[
          {
          url:"../../static/img/5.jpg",
          like:false
        },
        {
          url:"../../static/img/5.jpg",
          like:false
        },
        {
          url:"../../static/img/5.jpg",
          like:false
        },
         {
          url:"../../static/img/5.jpg",
          like:false
        },
         {
          url:"../../static/img/5.jpg",
          like:false
        }
        , {
          url:"../../static/img/5.jpg",
          like:false
        }
        ],
       
       
     


    }
  },
  methods:{
     touchStart(ev){
                ev= ev || event
          //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕    
            if(ev.touches.length == 1){
                    // 记录开始位置
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
             if(this.currentindex==3)
             {
             }else{
            this.currentindex+=1;      
           this.style = 'left:'+(-100)*this.currentindex+'%'; 
             }
        
              }
              }
              clearInterval(this.timer);
              var that=this;
              this.timer=setInterval(that.f,3500)
              } ,  
              touchStart1(ev){
                ev= ev || event
          //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕    
            if(ev.touches.length == 1){
                    // 记录开始位置
            this.startX = ev.touches[0].clientX;
                }
            },
         touchEnd1(ev){
              ev = ev || event;
              if (ev.changedTouches.length == 1) {
              let endX = ev.changedTouches[0].clientX;
              this.disX = this.startX - endX;
              if ((this.disX)<0) {
                 if(this.left==0)
             {
             }
             else{     
            this.style1 = 'left:0'; 
            this.left=0;
             }           
              }else  if (this.disX > 0){
             if(this.left==(-3.75))
             {
             }
             else{     
           this.style1 = 'left:-3.5rem';
           this.left=-3.75; 
             }
        
              }
              }
              } ,  
    addclass(n){
     this.swip2[n].like=!this.swip2[n].like;   
    },
    go(){
      this.$router.push({path:'/describe'})
    },
    f(){
     if(this.currentindex==0){
        this.off=true;
      } 
         if(this.currentindex==3){
        this.off=false;
      } 
          if(this.off){
      this.currentindex++; 
      this.style = 'left:'+-100*this.currentindex+'%';
      if(this.currentindex==3){
        this.off=false;
      } 
      }else{
      this.currentindex--;
      this.style = 'left:'+-100*this.currentindex+'%'; 
        if(this.currentindex==0){
        this.off=true;
      } 
      }
    },
    
    play(){    
       var that=this;    
       this.timer=setInterval(that.f,3500)
    }
  },
  created(){
     this.play();
  },
 mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    }
}
</script>

<style scoped lang="less">
.home{
  padding-bottom:.6rem;
}
.bottom{
    position:fixed;
    bottom:0;
}

.swiper{
  position:relative;
  width:100%;
    height:2.5rem;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 0.1rem;
    overflow:hidden;
    >p{
      position:absolute;
      z-index:98;
      color:white;
      font-size:20px;
      left:1.5rem;
    }
 ul{
  width:400%;
  height:2.5rem;
  position:absolute;
  left: 0;
  transition: 0.3s;
  overflow:hidden;
 li{
  width:25%;
  height:2.5rem;
  list-style:none;
  float:left;
  overflow:hidden;
 }
}
.point{
  width:100%;
  position:absolute;
  height:.15rem;
  /* background-color: red; */
  bottom:.08rem;
  z-index:99;
  margin: auto;
  display:flex;
  justify-content: center;
>p{
  width:.4rem;
  height:.06rem;
  border-radius:.08rem;
  border:1px solid rgba(255, 255, 255, 0.65);
  margin-right:.1rem;
}
}
}
.pchecked{
  background:#46aaff;
}



img{
  width:100%;
  height:100%;
}

.recently-viewed{
  width:100%;
  height:1.7rem;
  overflow: hidden;
  p{
  height:0.4rem;
  line-height:0.4rem;
  color:black;
  margin-bottom:5px;
  padding-left:3%;
  font-size:0.16rem;
}
  .view{
  width:7.2rem;
  position:relative;
  height:1.25rem;
  list-style:none;
  margin-left:10px;
  left:0;
  transition: 0.3s;

li{
  position:relative;
  width:1.1rem;
  height:1.25rem;
  border:1px solid black;
  border-radius:.05rem;
  margin-right:0.1rem;
  float:left;
  overflow:hidden;

}
}
}
.icon-shoucang{
  font-size: .18rem;
  position:absolute;
  bottom:.04rem;
  right:.04rem;
  color:white;
}
.icon-shoucang1{
  color:red;
  }

  .psec{
   height:0.55rem;
  line-height:0.55rem;
  color:black;
  // margin-bottom:5px;
  padding-left:3%;
  font-size:0.16rem;

  }
  .sec{
    width:94%;
    margin:auto;
    height:2rem;
    border-radius:.05rem;
    overflow: hidden;
  }




</style>