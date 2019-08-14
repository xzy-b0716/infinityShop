<template>
<div class="classify">
<Header :message="message"></Header>

<recommend :recommend="recommend"></recommend>

</div>
</template>

<script>
export default{
    name:"classify",
    data(){
        return{
        

        }
    },
    computed:{
        message:function(){
            return this.$route.query.message

        },
        recommend:function(){
            return this.$route.query.recommend

        },

    }
}

</script>



<style scoped lang="less">


</style>