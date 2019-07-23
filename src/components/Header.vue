<template>
    <div class="Header">
        <i class="iconshangyibu"></i>
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
    }
}
</script>
<style scoped lang="less">
    .Header{
        padding: 0;
        margin: 0;
        width: 100%;
        height: 0.5rem;
        color: #353838;
        border-bottom: 0.01rem solid #b7b7b7;
        line-height: 0.5rem;
        font-size: 0.23rem;
        display: flex;
        justify-content: space-between;;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 66;
    }
    .iconshangyibu{
        width: 0.5rem;
        font-size: 0.28rem;
    }
    .control{
        width: 0.5rem;
        font-size: 0.16rem
    }
    
</style>