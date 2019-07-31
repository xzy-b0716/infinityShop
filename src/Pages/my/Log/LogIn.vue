<template>
<div id="add">
  <Header :message="message"></Header>
  
  
  
  


</div>

</template>
<script>
export default{
  name:"add",
  data(){
    return{
      message:"登录",
    }  
  },
  methods:{
    save(){
      alert(1);
    }

  }
}
</script>
<style scoped lang="less">

</style>