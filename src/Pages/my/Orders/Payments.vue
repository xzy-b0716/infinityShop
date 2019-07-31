<template>
    <div class="Payment">
        <empty v-show= "count == 0" class="empty"></empty>
        <ul class="detial" v-show= "count>0">
            <li>
                <div class="detial_name">
                    <span class="span1">天猫</span>
                    <span class="span2">等待卖家付款</span>
                </div>
                <div class="detial_content">
                    <div class="top1">
                        <div class="left">
                            <img src="@/assets/image/4.png" >
                        </div>
                        <div class="right">
                            <div class="describe">黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女</div>
                            <div class="classify">
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
                    <button class="button1" @click= "cancel">取消订单</button>
                    <button class="button2">付款</button>
                </footer>
            </li> 
        </ul>
        <div class="Numbers" v-show= "Numshow">
            <div class="numbers">
                <div class="num">
                    <span>取消订单</span>
                    <i class="icon-shanchu1" @click= "closeNum"></i>
                </div>
               <div class="reason">请选择取消订单的原因</div>
               <ul class="causes">
                   <li v-for= "(item,index) in listS" :key="index">{{item.name}}<i class="icon-weigouxuan" :class= "{'icon-duigou' : item.Show}" @click= "changeI(index)"></i></li>
               </ul>
                <div class="define">
                    <button @click= "define">确定取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Empty from './Empty'
export default {
    name: "Payment",
    components:{
        'empty': Empty
    },
    data(){
        return{
            count: 2,
            Numshow: false,
            listS: [{
                name: "我不想买了",
                Show: false
            },
            {
               name: "信息填写错误，重新拍",
                Show: false  
            },
             {
               name: "卖家缺货",
                Show: false  
            },
             {
               name: "同城见面交易",
                Show: false  
            },
             {
               name: "其他原因",
                Show: false  
            }]
        }
    },
    methods:{
        cancel(){
            this.Numshow = true;
        },
        closeNum(){
            this.Numshow = false;
        },
        define(){
            this.Numshow = false;
        },
        changeI(index){
            for(let i=0;i<this.listS.length;i++){
                this.listS[i].Show = false;
            }
            this.listS[index].Show = !this.listS[index].Show;
        }
    }
}
</script>
<style lang="less" scoped>
.Payment{
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
                            background-color: #ccc;
                            height: 0.25rem;
                            width: 1.0rem;
                            line-height: 0.25rem;
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
                padding-left: 45%;
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
                    border: 0.01rem solid #666;
                    color: #666;
                }
                .button2{
                    border: 0.01rem solid #46aaff;
                    color: #46aaff;
                }
            }
        }
    }
     .Numbers{
        background-color: #f3f3f3;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 97;
        .numbers{
            width: 100%;
            height: 4.5rem;
            background-color: #ffffff;
            border-radius: 0.1rem 0.1rem 0 0;
            position: fixed;
            bottom: 0rem;
            left: 0;
            z-index: 1111;
            .define{
              width: 100%;
              height: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              position: fixed;
              bottom: 0.15rem;
               button{
                    width: 90%;
                    height: 0.4rem;
                    border-radius: 0.2rem;
                    font-size: 0.2rem;
                    background-color: #46aaff;
                    color: #fff;
                    border: 0.01rem #fff solid;
                    letter-spacing: 0.02rem;
                }
            }
            .num{
                height: 0.6rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-radius: 0.05rem 0.05rem 0 0;
                font-size: 0.18rem;
                letter-spacing: 0.03rem;
                .icon-shanchu1{
                  font-size: 0.20rem;
                  position: absolute;
                  right: 0.05rem;
                  top: 0.05rem;
                  color: #ccc;
                }
            }
            .reason{
                width: 100%;
                padding: 0 0.2rem;
                font-size: 0.15rem;
                color: #666;
            }
            .causes{
                width: 100%;
                padding: 0.2rem;
                list-style: none;
                li{
                    width: 100%;
                    height: 0.5rem;
                    padding: 0.1rem 0rem;
                    border-bottom: 0.01rem solid #999;
                    font-size: 0.16rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    i{
                        font-size: 0.22rem;
                        color: #999;
                    }
                    .icon-duigou{
                        color: #46aaff;
                    }
                }
            }
        }
    }
}
   
    
</style>