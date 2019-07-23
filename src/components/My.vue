<template>
  <div class="my">
 <span>我的</span>
  

  <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
    n:4
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
