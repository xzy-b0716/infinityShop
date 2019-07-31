<template>
<div id="setting">
  <Header :message="message"></Header>
  <button type="button" @click="reg">注册</button>
  <router-view></router-view>


</div>
</template>
<script>
export default{
  name:'setting',
  data(){
    return{
      message:"设置"
    }
  },
  methods:{
    reg(){
      this.$router.push("reg")
    }
  }

}
</script>
<style scoped lang='less'>
#setting{
  width:100%;
  button{
    display:block;
    width:80%;
    height:.5rem;
    color:white;
    background-color:#46aaff;
    margin:0 auto;
    margin-top:.12rem;
  }
}
</style>