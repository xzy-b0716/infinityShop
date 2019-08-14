<template>
  <div id="searchresult"> 
<recommend :recommend="recommend"></recommend>
  </div>
</template>

<script>

export default {
  name: 'searchresult',
  data(){
    return{
     
     
  
}
  },
  computed:{
      recommend:function(){
          return this.$route.query.recommend
      }
  }}
</script>

<style lang="less" scoped>


</style>
