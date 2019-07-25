<template>
  <div class="home">
      <mt-swipe :auto="4000" class="mt-swipe">
  <mt-swipe-item class="mt-swipe-item">
      <img :src="arr[0].url" alt="图片走丢啦">
  </mt-swipe-item>
  <mt-swipe-item class="mt-swipe-item">
       <img :src="arr[1].url" alt="图片走丢啦">
  </mt-swipe-item>
  <mt-swipe-item class="mt-swipe-item">
       <img :src="arr[2].url" alt="图片走丢啦">
  </mt-swipe-item>
</mt-swipe>
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
$(function(){
$(".a").on("tap",function(){
  $(this).hide();
});
})

export default {
  name: 'Home',
  data () {
    return {
      n:0,
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
      this.$router.push("/describe")
    }
  },
      beforeRouteEnter (to, from, next) {
    next(vm => {
      document.body.scrollTop = vm.scrollTop
    })
  },
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  }

  
 
 
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

.mt-swipe{
    width:100%;
    height:2.5rem;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 0.1rem;

}
.mt-swipe-item{
  width:100%;
  height:100%;

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