<template>
    <div class="Header">
        <i class="icon-shangyibu" @click= "back"></i>
        <span>{{message}}</span>
        <div class="control" @click="show=!show"></div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: ['message'],
    data() {
        return {
            show: true
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped lang="less">
    .Header{
        width: 100%;
        height: 0.5rem;
        color: #f3f3f3;
        border-bottom: 0.01rem solid #b7b7b7;
        line-height: 0.5rem;
        font-size: 0.23rem;
        display: flex;
        justify-content: space-between;
        z-index: 66;
        background:#46aaff;
    }
    .icon-shangyibu{
        width: 0.5rem;
        font-size: 0.28rem;
    }
    .control{
        width: 0.5rem;
        font-size: 0.16rem
    }
    
</style>