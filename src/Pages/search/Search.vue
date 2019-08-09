<template>
  <div class="search">
  <div class="sousuokuang">     
      <input class="kuang" v-model="search" type="text" placeholder="请输入搜索词"/>   
       <i class='icon-sousuo'></i>   
      </div>
 <ul class="classify">
    <li class="women" :class= "{'active' : Show1}"  @click="changeShow1">Women</li>
    <li class="men" :class= "{'active' :Show2}" @click="changeShow2">Men</li>
  </ul>
<ul class="classifyitem">

<li>  <img :src="arr[0].url" alt=""> </li>
<li>  <img :src="arr[1].url" alt=""> </li>
<li>  <img :src="arr[2].url" alt=""> </li>
<li>  <img :src="arr[3].url" alt=""> </li>
<li>  <img :src="arr[4].url" alt=""> </li>
<li>  <img :src="arr[5].url" alt=""> </li>
<li>  <img :src="arr[6].url" alt=""> </li>
</ul>

  
  <bottom class="bottom" :n="n"></bottom>




  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
  n:1,
  search:"",
  arr:[{
   url:require('@/assets/img/1-1.png'),
   number:1
 },
 {
   url:require('@/assets/img/1-2.png'),
   number:2
 },
  {
   url:require('@/assets/img/1-3.png'),
   number:3
 },
  {
   url:require('@/assets/img/1-4.png'),
   number:4
 },
  {
   url:require('@/assets/img/1-5.png'),
   number:5
 },
   {
   url:require('@/assets/img/1-6.png'),
   number:6
 },
   {
   url:require('@/assets/img/1-7.png'),
   number:7
 },

 ],
  arr1:[{
   url:require('@/assets/img/1-1.png'),
   number:8
 },
 {
   url:require('@/assets/img/1-2.png'),
   number:9
 },
  {
   url:require('@/assets/img/1-3.png'),
   number:10
 },
  {
   url:require('@/assets/img/1-4.png'),
   number:11
 },
  {
   url:require('@/assets/img/1-5.png'),
   number:12
 },
   {
   url:require('@/assets/img/1-6.png'),
   number:13
 },
   {
   url:require('@/assets/img/1-7.png'),
   number:14
 },

 ],
 arr2:[{
   url:require('@/assets/img/1-1.png'),
   number:8
 },
 {
   url:require('@/assets/img/1-2.png'),
   number:9
 },
  {
   url:require('@/assets/img/1-3.png'),
   number:10
 },
  {
   url:require('@/assets/img/1-4.png'),
   number:11
 },
  {
   url:require('@/assets/img/1-5.png'),
   number:12
 },
   {
   url:require('@/assets/img/1-6.png'),
   number:13
 },
   {
   url:require('@/assets/img/1-7.png'),
   number:14
 },

 ],
      Show1: true,
      Show2:false
    }
  },
  methods:{
    changeShow1(){
      this.Show1 = true;
      this.Show2 = false;
      this.arr=this.arr1;
    },
      changeShow2(){
      this.Show2 = true;
      this.Show1=false;
        this.arr=this.arr2;
    }
  }
 

  
}
</script>

<style scoped lang="less">
.bottom{
    position:fixed;
    bottom:0;

}
.search{
 
    padding-top:.1rem;
    padding-bottom:.65rem;
    overflow:hidden;
}
.sousuokuang{
     background:#F3F3F3;
    margin:auto;
    position:relative;  
    width:3.6rem; 
    border-radius: 10px;
    overflow:hidden;
    margin-bottom:.1rem;
input{
    background:#F3F3F3;
    padding-left:0.1rem; 
    border:none;
    height:0.38rem;
    line-height: 0.38rem;
    width:3.3rem;
    font-size:16px;
    overflow:hidden;
    }
    input:focus{
      outline:none;
    }
.icon-sousuo{
  position:absolute;
  font-size:24px;
  right:7px;
  bottom:7px;
}
}
.classify{
  width: 100%;
  height: 0.55rem;
  border-top:0.01rem solid #b7b7b7;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .active{
    border-bottom:0.05rem solid #46aaff;
    color: #000;
  }
  li{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
    font-size: 0.2rem;
    border-right:0.01rem solid #b7b7b7;
   
  }
}



.classifyitem{
  list-style:none;
  overflow:hidden;

li:nth-of-type(3n+1){
width:100%;
height:1.6rem;
float:left;
}
li:nth-of-type(2){
width:50%;
height:1.6rem;
float:left;
}
li:nth-of-type(3){
width:50%;
height:1.6rem;
float:left;
}
li:nth-of-type(5){
width:50%;
height:1.6rem;
float:left;
}
li:nth-of-type(6){
width:50%;
height:1.6rem;
float:left;
}
}
img{
  width:100%;
  height:100%;
}


</style>
