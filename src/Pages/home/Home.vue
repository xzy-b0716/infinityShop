<template>
  <div class="home">
<div class="swiper">
  <!-- <p>Infinity</p> -->
<ul :style="style">
  <!-- @swipleft="changeimage" -->
  <li v-for="(item,index) in arr " :key="index" @click="$router.push('./describe')">
    <img :src="item.url" alt="图片走丢啦">
  </li>
</ul>
<div class="point">
  <p v-for="(item,index) in arr" :key="index"></p>
</div>
</div>
<div class="recently-viewed">
  <p>Recently Viewed</p>
<ul class="view">
<li v-for= "(item,index) in swip2" :key="index" @click="go">
  <img :src="item.url" alt="">
  <i :class="{'icon-shoucang':true,'icon-shoucang1':item.like}" @click.stop="addclass(index)" ></i>
</li>
</ul>
</div>
 <p class="psec">限时秒杀</p>
<div class="sec" @click="$router.push('/seckill')">
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
      n:0,
      distance:-375,
      scrollTop:'',
        arr:[
        {
          url:require("@/assets/img/1.jpg")
        },
        {
          url:require("@/assets/img/2.jpg")
        },
        {
          url:require("@/assets/img/2.jpg")
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
        }
        ],
        style:{transform:'translate(0)'},
       
     


    }
  },
//   computed:{
//     style()
// {return {
//   transform:'translate(${this.distance}px,0)'
// }

// }  },
  methods:{
    addclass(n){
     this.swip2[n].like=!this.swip2[n].like;
   
    },
    go(){
      this.$router.push({path:'/describe'})
    }
  },
  changeimage(){
     this.style={
        transform:'translate(${this.distance}px,0)'
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
  width:18.75rem;
  height:2.5rem;


 li{
  width:3.75rem;
  height:2.5rem;
  list-style:none;
  background-color:red;
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
  background-color:white;
  margin-right:.1rem;
}
}
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
  width:800px;
  position:relative;
  height:1.25rem;
  list-style:none;
  margin-left:10px;

li{
  position:relative;
  width:1.1rem;
  height:1.25rem;
  border:1px solid black;
  border-radius:.05rem;
  margin-right:0.1rem;
  float:left;
  overflow:hidden;
   i{
  font-size: .18rem;
  position:absolute;
  bottom:.04rem;
  right:.04rem;
  color:white;
}
}
}
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