<template>
    <div class="Orders">
        <Header message="我的订单"></Header>
        <div class="top">
            <ul>
                <li v-for= "(item,index) in listA" :key="index"
                :class= "{'active':index == Index}" @click= "change(index)">{{item.name}}</li>
                
            </ul>
        </div>
        <div class="content">
            <Total :is= "CurrentComp"></Total>
        </div>
    </div>
</template>
<script>
import Deliver from './Deliver'
import Payments from './Payments'
import Receive from './Receive'
import Total from './Total'
export default {
    name: "Orders",
    components:{
        Deliver,
        Payments,
        Receive,
        Total
    },
    data(){
        return{
            CurrentComp: 'Total',
            Show1: true,
            listA:[{
                name: '全部',
                Url: '/Total',
                comp: 'Total'
            },
            {
                name: '待付款',
                Url: '/Payments',
                comp: 'Payments'
            },
            {
                name: '待发货',
                Url: '/Deliver',
                comp: 'Deliver'
            },
            {
                name: '待收货',
                Url: '/Receive',
                comp: 'Receive'
            }],
            Index: 0
        }
    },
    methods: {
        change(index){
             this.Index = index;
             this.CurrentComp = this.listA[index].comp;
            // this.$router.push({path: this.listA[index].Url});
        }
    }
}
</script>
<style lang="less" scoped>
    .top{
        width: 100%;
        z-index: 99;
        height: 0.6rem;
        line-height: 0.6rem;
        position: fixed;
        top: 0.5rem;
        ul{
            width: 100%;
            padding: 0.1rem 0.15rem 0.05rem 0.15rem; 
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f3f3f3;
            li{
                height: 0.4rem;
                font-size: 0.17rem;
                line-height: 0.4rem;
            }
            .active{
                border-bottom: 0.02rem #46aaff solid;
                color: #46aaff;
            }
        }
    }
    .content{
        width: 100%;
        position: fixed;
        top: 0.9rem;
        bottom: 0;
        overflow: auto;
        background-color: #f3f3f3;
        padding-top: 0.1rem;
        
    }
    

    
</style>