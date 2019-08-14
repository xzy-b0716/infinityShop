<template>
  <div class="comment">
        <Header class="header" :message="message"></Header>
        <div class="commentheader">
         <ul>
           <li>质量不错</li>
            <li>价格便宜</li>
             <li>非常好看</li>
         </ul>
        </div>
        <ul class=ul>
    <li v-for="(item,index) in datas" :key="index">
       <p class="username">
           <i class="icon-zuanshi"></i>
           {{item.user.userName}}</p>
       <p class="usercomment">{{item.producDiscussComment}}</p> 
    </li>
  </ul>
      </div>  
</template>

<script>
export default {
    name:"comment",
    // props:["datas"],
    data(){
        return{
            message:"宝贝评价",           
        }
    },
    computed:{
      datas(){
        return this.$route.query.datas
      }
    }
    
}
</script>

<style lang="less" scoped>
.header{
  font-size:.3rem;
}
.commentheader{
  width:100%;
  padding:3% 5%;
  ul{
    list-style:none;
    display:flex;
    li{
      text-align:center;
      line-height:.3rem;
      width:.8rem;
      height:.3rem;
      border-radius:.1rem;
      background-color:rgba(0, 174, 255, 0.274);
      margin-right:.15rem;
      color:black;
    }
  }

}

    .ul{
    
        list-style:none;
        li{
          width:95%;
          padding:.1rem;
          margin:auto;
          border-radius:.1rem;         
          margin-bottom: .1rem;
          background-color:rgba(192, 192, 192, 0.15);
           .username
            {
                line-height:.4rem; 
                .icon-zuanshi{
                    font-size:16px;
                    color:#FF126A;
                }           
        }
        .usercomment{
            display:inline-block;
            padding-bottom: .1rem;

        }
       
    }
}

</style>


