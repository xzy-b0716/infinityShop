<template>
    <div class="Receive">
       <empty v-show= "count == 0" class="empty"></empty>
        <ul class="detial" v-show= "count>0">
            <li>
                <div class="detial_name">
                    <span class="span1">天猫</span>
                    <span class="span2">卖家已发货</span>
                </div>
                <div class="detial_content">
                    <div class="top1">
                        <div class="left">
                            <img src="@/assets/image/4.png" @click="describeJ" alt="图片走丢了">
                        </div>
                        <div class="right">
                            <div class="describe" @click="describeJ">黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女</div>
                            <div class="classify" @click="describeJ">
                                颜色分类：黑色
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="Distribution_mode">配送方式<span>普通配送</span></div> 
                        <div class="discount">优惠信息<span>省五元</span></div>
                    </div>
                </div>
                <div class="detial_pay">
                    <span>共<span>1</span>件</span>
                    <span>小计:￥<span>133</span></span>
                </div>
                <footer>
                    <button class="button1" @click= "cancel">确认收货</button>
                </footer>
            </li> 
        </ul>
    </div>
</template>
<script>
import Empty from './Empty'
export default {
    name: 'Receive',
    components:{
        'empty': Empty
    },
    data(){
        return{
            count: 2
        }
    },
    methods:{
        cancel(){
            this.Numshow = true;
        },
        describeJ(){
            this.$router.push({path:'/Describe'})
        }
    }
}
</script>
<style lang="less" scoped>
    .detial{
        width: 100%;
        padding: 0.1rem 0;
        li{
            width: 95%;
            background-color: #fff;
            margin: 0 auto;
            margin-bottom: 0.1rem;
            border-radius: 0.15rem;
            .detial_name{
                width: 100%;
                height: 0.3rem;
                padding: 0 0.2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.05rem;
                .span1{
                    font-size: 0.2rem;
                }
                .span2{
                    font-size: 0.14rem;
                    color: #46aaff;
                }
            }
            .detial_content{
                width: 100%;
                .top1{
                    width: 100%;
                    height: 1.0rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 0.1rem;
                    .left{
                        margin-top: 0.2rem;
                        img{
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                    .right{
                        height: 1rem;
                        .describe{
                            font-size: 0.15rem;
                            margin-left: 0.1rem;
                        }
                        .classify{
                            font-size: 0.13rem;
                            margin-left: 0.1rem;
                            margin-top: 0.05rem;
                            height: 0.25rem;
                            line-height: 0.25rem;
                            width: 1.5rem;
                            border-radius: 0.05rem;
                            background-color: #f3f3f3;
                            text-align: center;
                        }
                    }
                }
                .bottom{
                    width: 100%;
                    margin-top: 0.1rem;
                    padding: 0.1rem;
                    .Distribution_mode,.discount{
                        height: 0.2rem;
                        font-size: 0.15rem;
                        span{
                            margin-left: 0.1rem;
                        }
                    }
                    
                    .discount{
                        margin-top: 0.1rem;
                    }
                }
            }
            .detial_pay{
                width: 100%;
                font-size: 0.13rem;
                text-align: right;
                padding-right: 0.2rem;
                padding-bottom: 0.2rem;
            }
            footer{
                width: 100%;
                height: 0.4rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding-left: 70%;
                padding-right: 0.2rem;
                button{
                    width: 0.7rem;
                    height: 0.3rem;
                    border-radius: 0.2rem;
                    margin-left: 0.05rem;
                    font-size: 0.14rem;
                    background-color: #fff;
                    color: #666;
                }
                .button1{
                    border: 0.01rem solid #46aaff;
                    color: #46aaff;
                }
            }
        }
    }
</style>