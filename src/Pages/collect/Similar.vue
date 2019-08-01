<template>
  <div id="similar">
    <Header :message="msg" class="header"></Header>
    <recommend></recommend>

  
  </div>
</template>

<script>
export default {
  name: 'similar',
  data () {
    return {
      msg:"找相似"
      
    }
  },
  methods:{
    details(){
      this.$router.push('describe');
    }

  }
}
</script>

<style scoped lang="less">

 


</style>
