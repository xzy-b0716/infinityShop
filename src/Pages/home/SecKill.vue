<template>
<div class="seckill">
  <Header class="header" :message="message"></Header>
   <div class="img">
     <img src="@/assets/img/5.png" alt="图片走丢啦">
   </div>
  <ul>
    <li v-for="(item,index) in seclist" :key="index" @click="$router.push('./secdescribe')">
      <img :src="item.url" alt="图片走丢啦">      
      <div>
        <p>{{item.name}}</p>
        <span class="span1">￥{{item.price}}</span>
        <span class="span2">￥{{item.price1}}</span>
        <button>马上抢</button>

        </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    name:'seckill',
    data() {
    return {
      message:'限时秒杀',
         seclist:[
          {
            url:"../../static/img/6.jpg",
          name:'欧莱雅护发精油两支',
          price:119,
          price1:178
          },
           {
             url:"../../static/img/6.jpg",
          name:'雾色梦境哑光唇油',
           price:39.8,
            price1:50
          },
           {
             url:"../../static/img/6.jpg",
          name:'抢半价反季羊毛绒',
           price:39,
            price1:78
          },
           {
             url:"../../static/img/6.jpg",
          name:'抢半价反季羊毛绒',
           price:39,
            price1:89
          },
           {
             url:"../../static/img/6.jpg",
          name:'抢半价反季羊毛绒',
           price:39,
            price1:89
          },
           {
             url:"../../static/img/6.jpg",
          name:'抢半价反季羊毛绒',
           price:39,
            price1:89
          },
           {
             url:"../../static/img/6.jpg",
          name:'抢半价反季羊毛绒',
           price:39,
            price1:89
          },


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
.header{
  font-size:.3rem;
  margin-bottom:.1rem;
}
.img{
  width:90%;
  margin:auto;
  overflow:hidden;
  height:2rem;
  margin-bottom:.1rem;
  border-radius:.03rem;
  img{
    width:100%;
    height:100%;

  }
}

.seckill{
   background: #EBEEF5;
  width:100%;
  margin:0;
  ul{
    padding:0;
    width:100%;
    li{
      width:95%;
      margin:auto;
      display:flex;
      height:1.35rem; 
      border-radius:.08rem;
      // border:1px solid black;
      margin-bottom:.1rem;
      overflow:hidden;
      background:white;
      padding:.02rem;

      img{  
        width:1.30rem;
        height:1.30rem;
      }
      div{
        position:relative;
         width:2.2rem;
         font-size:0.2rem;
         height:1.35rem;
         padding:.1rem;
           font-weight:bold;
         p{
          text-align: left;
           line-height:.2rem;
           margin-top:.05rem;

         }
         .span1{         
           position:absolute;
           left:.1rem;
           bottom:.3rem;
           font-size:.2rem;
          
         }
         .span2{         
           position:absolute;
           left:.1rem;
           bottom:.1rem;
           text-decoration:line-through;
           color:#cccccc;
           font-weight:normal;
           font-size:0.14rem;
          
         }
         button{
           border:none;
           border-radius:.05rem;
           background:#46aaff;
           width:1rem;
           height:.4rem;
           position:absolute;
           right:.1rem;
           bottom:.15rem;
           color:#f3f3f3;

         }
       
        

      }
    }

  }
}
    </style>
    
    
    

