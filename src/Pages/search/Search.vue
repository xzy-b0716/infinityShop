<template>
  <div class="search">
  <div class="sousuokuang">     
  <input class="kuang" v-model="search" type="text" placeholder="请输入搜索词"/>   
  <i class='icon-sousuo' @click="toRecommend1"></i>   
  </div>
  <router-view></router-view>  
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
  searchRecommend:null,
    }
  },
  methods:{
     toRecommend1(){
       if(this.search==""){
         this.$toast("请输入搜索词")
       }else{
         this.$axios.get("../../static/search.json",{
           search:this.search
         })
         .then((data)=>{
           return eval(data.data)
         })
         .then((data)=>{
           this.searchRecommend=data;
           this.$router.push({path:'/searchresult',query:{recommend:this.searchRecommend}})
         })
       }
      
     }
  },

 

  
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


</style>
