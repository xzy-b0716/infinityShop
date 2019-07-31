<template>
    <div class="Empty">
        <div class="icon">
            <i class="icon-dingdan"></i>
        </div>
        <p>您还没有相关订单</p>
    </div>
</template>
<script>
export default {
    name: 'Empty',
}
</script>
<style lang="less" scoped>
    .Empty{
        width: 100%;
        height: 3rem;
        position: fixed;
        top: 0.9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        .icon{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: #46aaff;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon-dingdan{
                font-size: 0.5rem;
                color: #fff;
            }
        }
        p{
            margin-top: 0.2rem;
        }
    }
</style>