<template>
  <div class="search">
  <div class="sousuokuang">
      <i class='icon-sousuo'></i>
      <input type="text" placeholder="search"/>      
  </div>
  <ul class="classify">
    <li class="women" :class= "{'active' : isShow}"  @click="changeShow">Women</li>
    <li class="men" :class= "{'active' : !isShow}" @click="changeShow">Men</li>
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
      isShow: true
    }
  },
  methods:{
    changeShow(){
      this.isShow = !this.isShow;
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
    padding-top:0.1rem;
}

.sousuokuang{
    padding-left: 0.05rem;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:auto;
    width:3.5rem;
    height:0.38rem;
    border-radius: 0.1rem;
    background-color:#f3f3f3; 
    }
input{
    padding-left:0.1rem;
    border-radius: 0.1rem;
    border:none;
    height:0.34rem;
    line-height: 0.38rem;
    width:3.2rem;
    font-size:0.16rem;
    background-color:#f3f3f3;
    outline:none;
    color:#929292;
    }
i{
  font-size:0.24rem;
  /* color:#D2D2D2; */
}
.classify{
  width: 100%;
  margin-top: 0.05rem;
  height: 0.55rem;
  border-top:0.01rem solid #b7b7b7;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .active{
    border-bottom:0.03rem solid #46aaff;
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
    // border-bottom:0.03rem solid transparent;
  }
}
</style>
