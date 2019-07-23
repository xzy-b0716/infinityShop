<template>
  <div class="collect">
      <span>收藏</span>


  <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
export default {
  name: 'collect',
  data () {
    return {
      n:2
    
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
