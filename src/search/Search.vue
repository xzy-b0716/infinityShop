<template>
  <div class="search">
  <div class="sousuokuang">
      <i class='icon-sousuo'></i>
      <input type="text" placeholder="search"/>      
      </div>
  <ul class="classify"></ul>
  <bottom class="bottom" :n="n"></bottom>




  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
  n:1
    }
  }

  
}
</script>

<style scoped>
.bottom{
    position:fixed;
    bottom:0;

}
.search{
    padding-top:10px;
}

.sousuokuang{
    padding-left: 5px;
    align-items: center;
    display:flex;
    margin:auto;
    width:3.5rem;
    height:0.38rem;
    border-radius: 10px;
    background-color:#46AAFF; 
    }
input{
    padding-left:0.1rem;
    border-radius: 10px;
    border:none;
    height:0.34rem;
    line-height: 0.38rem;
    width:3.2rem;
    font-size:16px;
    background-color:#46AAFF;
    outline:none;
    color:white;
    }
i{
  font-size:24px;
  /* color:#D2D2D2; */
}
.classify{
  margin-top: 5px;
  height:100px;
  border:1px solid black;

}
</style>
