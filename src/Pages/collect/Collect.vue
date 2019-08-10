<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-07-25 12:21:00
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-10 01:42:29
 -->
<template>
  <div id="collect">
    <Header :message="msg"></Header>
    <ul>
      <li v-for="(list,index) in lists" :key="index" @click="details">
         <img :src="list.url">
         <div class="right">
           <p>{{list.words}}</p>
           <span class="price">￥{{list.price}}</span>
           <button class="like" @click.stop="btnclick">找相似</button>
         </div>
      </li>
    </ul>
     

  <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
export default {
  name: 'collect',
  data () {
    return {
      n:2,
      msg:"喜欢",
      lists:[
        {
          url:require('../../assets/img/5.jpg'),
          words:"毛衣女新款甜美慵懒风少女心毛针织衫暮光之色衣服春秋柔软",
          price:178
        },
        {
          url:require('../../assets/img/5.jpg'),
          words:"毛衣女新款甜美慵懒风少女心毛针织衫暮光之色衣服春秋柔软",
          price:178
        },
        {
          url:require('../../assets/img/5.jpg'),
          words:"毛衣女新款甜美慵懒风少女心毛针织衫暮光之色衣服春秋柔软",
          price:178
        },
        {
          url:require('../../assets/img/5.jpg'),
          words:"毛衣女新款甜美慵懒风少女心毛针织衫暮光之色衣服春秋柔软",
          price:178
        },
        {
          url:require('../../assets/img/5.jpg'),
          words:"毛衣女新款甜美慵懒风少女心毛针织衫暮光之色衣服春秋柔软",
          price:178
        }
      ]
    
    }
  },
  methods:{
    details(){
      this.$router.push('describe');
    },
    btnclick(){
      this.$router.push('similar');
    }

  }
}
</script>

<style scoped lang="less">
#collect{
  background-color:rgba(212, 212, 204, 0.233);
  padding-bottom:.6rem;
  
  ul{
    width:100%;
    list-style:none;
    li{
      width:95%;
      display:flex;
      margin:auto;
      height:1.35rem;
      border-radius:.1rem;
      margin-bottom:.1rem;
      overflow:hidden;
      background:white;
      padding:.02rem;
      img{
        widows: 1.3rem;
        height:1.3rem;
      }
      .right{
        position:relative;
        padding:.1rem;
        width:2.2rem;
        height:1.35rem;
        p{
        color:black;
        font-size:.18rem;
        text-align: left;
        margin-top:.05rem;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
      }
      .price{
        color:black;
        font-size:.22rem;
        position:absolute;
        left:.1rem;
        bottom:.2rem;
      }
      .like{
        width:.7rem;
        height:.3rem;
        border:none;
        outline:none;
        border-radius:.2rem;
        background-color:transparent;
        border:1px solid#46aaff;
        color:#46aaff;
        font-size:.15rem;
        position:absolute;
        right:.1rem;
        bottom:.1rem;

      }
      }
      



    }
  }
  .bottom{
    position:fixed;
    bottom:0;

}
}


</style>
