<template>
  <div id="app">   
 <router-view></router-view>

  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components:{
    "home":Home
  }
  
}
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


</style>
