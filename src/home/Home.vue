<template>
  <div class="home">
<div class="swiper">
<ul>
  <li v-for="(item,index) in arr " :key="index">
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
<li v-for= "(item,index) in swip2" :key="index">
  <img :src="item.url" alt="">
  <i :class="{'icon-shoucang':true,'icon-shoucang1':item.like}" @click.stop="addclass(index)" ></i>
</li>
</ul>
</div>
<p class="a" @click="go">hahahaha</p>
<bottom class="bottom" :n="n"></bottom>




  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      n:0,
      scrollTop:'',
        arr:[{
          url:require("../assets/img/1.jpg")
        },{
          url:require("../assets/img/2.jpg")
        },{
          url:require("../assets/img/3.jpg")
        }],
        like:false,
        swip2:[
          {
          url:"./../static/img/5.jpg",
          like:false
        },
        {
          url:"./../static/img/5.jpg",
          like:false
        },
        {
          url:"./../static/img/5.jpg",
          like:false
        },
         {
          url:"./../static/img/5.jpg",
          like:false
        }
        ]

     


    }
  },
  methods:{
    addclass(n){
     this.swip2[n].like=!this.swip2[n].like;
   
    },
    go(){
      this.$router.push({path:'/describe'})
    }
  },
//       beforeRouteEnter (to, from, next) {
//  document.body.scrollTop = 0;
//    next();
//   },
  // beforeRouteLeave (to, from, next) {
  //   this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //   next()
  // }

  
 
 
}
</script>

<style scoped>
.home{
  padding-bottom:.6rem;
}
.bottom{
    position:fixed;
    bottom:0;

}

.swiper{
  position:relative;
    height:2.5rem;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 0.1rem;
    overflow:hidden;
}
.swiper ul{
  width:18.75rem;
  height:2.5rem;

}
.swiper ul li{
  width:3.75rem;
  height:2.5rem;
  list-style:none;
  background-color:red;
  float:left;


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

}
.point p{
  width:.4rem;
  height:.08rem;
  border-radius:.08rem;
  background-color:white;
  margin-right:.1rem;

}


img{
  width:100%;
  height:100%;
}
.recently-viewed{
  width:100%;
  height:2.0rem;
  overflow: hidden;
}
.view{
  width:800px;
  position:relative;
  height:1.6rem;
  list-style:none;
  margin-left:10px;
}
p{
  height:0.4rem;
  line-height:0.4rem;
  color:black;
  margin-bottom:5px;
  padding-left:15px;
  font-size:0.16rem;
}

.view li{
  position:relative;
  width:1.1rem;
  height:1.4rem;
  border:1px solid black;
  border-radius:5px;
  margin-right:0.1rem;
  margin-bottom: .2rem;
  float:left;
}
.view i{
  font-size: 25px;
  position:absolute;
  bottom:3px;
  right:3px;
}
.icon-shoucang1{
  color:red;

}
.a{
  margin-top:500px;
  height:80px;
  background-color:red;

}


</style>