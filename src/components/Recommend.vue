<template>
  <div id="recommend"> 
    <ul>
    <li v-for="(item,index) in arr" :key="index" @click="$router.push('./describe')">
      <img :src="item.url" alt="图片走丢啦">
    <p>{{item.name}}</p>
    <p>￥{{item.price}}</p>
    </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'recommend',
  data(){
    return{
      arr:[
        {
          url:'./../static/img/1.png',
          name:'女鞋秋季新款',
          price:178
        },
         {
          url:'./../static/img/2.png',
          name:'韩衣都舍秋装新款',
          price:128.4
        },
         {
          url:'./../static/img/3.png',
          name:'气质女包',
          price:199
        },
         {
          url:'./../static/img/4.png',
          name:'新款帽子',
          price:359
        }

      ]
    }
  }
  
}

</script>

<style lang="less" scoped>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    margin:0;
    padding:0;
    box-sizing:border-box; 
}
#recommend{
  width:100%;
  padding:3%;
  font-size:16px;
 
  ul{
  width:100%;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  }
  li{
    width:1.65rem;
    overflow:hidden;
    margin-bottom:.1rem;
    border-radius:.05rem;
   
    img{
      width:1.65rem;
      height:1.9rem;
       border-radius:.05rem;
    }
  }

    
}


</style>
