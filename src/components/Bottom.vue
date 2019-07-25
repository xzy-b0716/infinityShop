<template>
  <div class="bottom">
<i :class="{'icon-shouye':true,'checked':arr[0]}" @click="go('/')"></i>
<i :class="{'icon-sousuo':true,'checked':arr[1]}" @click="go('/search')"></i>
<i :class="{'icon-shoucang':true,'checked':arr[2]}" @click="go('/collect')"></i>
<i :class="{'icon-gouwuche':true,'checked':arr[3]}" @click="go('/cardlist')"></i>
<i :class="{'icon-wode':true,'checked':arr[4]}" @click="go('/my')"></i>

  </div>
</template>

<script>
export default {
  name: 'bottom',
  props:["n"],
  data () {
    return {
    arr:[true,false,false,false,false],
    m:this.n
    }
   
  },
  methods:{
    go(route){
this.$router.push(route);

        },
   changeArr(){
    this.arr=[false,false,false,false,false];
this.arr[this.m]=true;  
    }
    }, 
  
created(){
this.changeArr();
  }
}

</script>

<style scoped>
.bottom{
  width:100%;
  display:flex;
  height:0.6rem; 
  justify-content: space-around;
  align-items: center;
  border:1px solid #cccccccc;
  background-color:#FFFFFF;
}
i{
  padding:0.05rem;
  font-size:0.3rem;
}
.checked{
background-color:cornflowerblue;
border-radius:50%;
} 


</style>
