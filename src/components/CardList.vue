<template>
  <div class="cardlist">
  <span>购物车</span>


  <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
export default {
  name: 'cardlist',
  data () {
    return {
      n:3
    
    }
  }
}
</script>

<style scoped>
.bottom{
    position:fixed;
    bottom:0;

}

</style>
