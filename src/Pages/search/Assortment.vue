<template>
<div class="assortment">
     <ul class="classify">
    <li class="women" :class= "{'active' : Show1}"  @click="changeShow1">Women</li>
    <li class="men" :class= "{'active' :Show2}" @click="changeShow2">Men</li>
  </ul>
<ul class="classifyitem" @click="toRecommend">
  <li v-for="(item,index) in arr" :key="index" :data-index="index">
    <img :src="item.url" alt="" :data-index="index">
    </li>
</ul>
</div>
</template>

<script>
export default{
    name:"assortment",
    data(){
        return{
  arr:'',
  arr1:[{
   url:require('@/assets/img/1-1.png'),
   number:1,
   name:"Jeans&Trousers"
 },
 {
   url:require('@/assets/img/1-2.png'),
   number:2,
   name:"Accessories"
 },
  {
   url:require('@/assets/img/1-3.png'),
   number:3,
    name:"Shoes"
 },
  {
   url:require('@/assets/img/1-4.png'),
   number:4,
   name:"T-shirt"
 },
  {
   url:require('@/assets/img/1-5.png'),
   number:5,
   name:"Sportswear"
 },
   {
   url:require('@/assets/img/1-6.png'),
   number:6,
   name:"Hoodies&Sweatshirts"
 },
   {
   url:require('@/assets/img/1-7.png'),
   number:7,
   name:"Jackets"
 },

 ],
 arr2:[{
   url:require('@/assets/img/1-1.png'),
   number:8,
   name:"短袖"
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
      Show2:false,
      searchRecommend:null,
      index:'',
      msg:''

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
    },
        toRecommend(ev){  
      var dom=ev.target;
      this.index=dom.getAttribute("data-index");
      this.msg=this.arr[this.index].name;
       this.$axios.get("../../static/search.json?number="+this.arr[this.index].number)
         .then((data)=>{
           return eval(data.data)
         })
         .then((data)=>{
           this.searchRecommend=data;
           this.$router.push({path:'/classify',query:{recommend:this.searchRecommend,message:this.msg}})
         })
     
    },
    },
      created(){
    this.arr=this.arr1;
  }
}
</script>

<style scoped lang="less">
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