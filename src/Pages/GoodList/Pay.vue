<template>
    <div class="Pay">
        <Header message="确认订单"></Header>
        <div class="content">
            <div class="address">
                <div class="left">
                    <i class="icon-dingwei"></i>
                </div>
                <div class="right">
                    <div class="conter">
                        <div class="name">侯阮悦<span class="number">15114903704</span></div>
                        <div class="location">陕西省西安市长安区子午大道春天花园</div>
                        <span class="span1">收货不变时，可选择免费暂存服务</span>
                    </div>
                    <i class="icon-guifanliebiaoxiayibu" @click="addressJ"></i>
                </div>
            </div>
            <div class="Payment_methods">
                <div class="left">支付方式</div>
                <div class="right">
                    <span>{{message}}</span>
                    <i class="icon-guifanliebiaoxiayibu"  @click= "show1=!show1"></i>
                </div>
            </div>
            <ul class="detial">
                <li>
                    <div class="detial_name">天猫</div>
                    <div class="detial_content">
                        <div class="top">
                            <div class="left">
                                <img src="../../assets/image/4.png" alt="图片走丢了" @click="describeJ">
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
                           <div class="order_remarks">订单备注<input type="text" placeholder="选填:请和商家商量一致"></div>
                        </div>
                    </div>
                    <div class="detial_pay">
                        <span>共<span>1</span>件</span>
                        <span>小计:￥<span>133</span></span>
                    </div>
                </li>
            </ul>
            
            <div class="bill">
                <i class="icon-weigouxuan" :class= "{'icon-duigou': show}" @click= "show=!show"></i>匿名购买
            </div>
        </div>
        <transition name="slide">
            <div class="pay_methods" v-show= "show1">
                <div class="methods">
                    <div class="top">
                        支付方式
                        <i class="icon-guanbi" @click= "show1=!show1"></i>
                    </div>
                    <ul class="bottom">
                        <li v-for= "(item,index) in list_pay" :key= "index" @click= "changepay(index)" :class= "{'bottom_active': isShow==index}" exact>{{item}}</li>
                    </ul>
                    
                </div>
                
            </div>
        </transition>
        <footer>
            <div class="total">
                ￥<span>{{totalprice}}</span>
            </div>
            <button>提交订单</button>
        </footer>
    </div>
</template>
<script>
export default {
    name: "Pay",
    data(){
        return{
            isShow: 0,
            show: false,
            show1: false,
            totalprice: 0,
            Totalnum: 0,
            message: "在线支付",
            list_pay:["在线支付","货到付款","公司转账"]
        }
        
    },
    methods: {
        changepay(index){
            this.message = this.list_pay[index];
            this.isShow = index;
        },
        addressJ(){
            this.$router.push({path:'/Address'})
        },
        describeJ(){
            this.$router.push({path:'/Describe'})
        }
    }
}
</script>
<style lang="less" scoped>
    .content{
        width: 100%;
        position: fixed;
        top: 0.5rem;
        bottom: 0.6rem;
        overflow: auto;
        background-color: #f3f3f3;
        .address{
            background-color: #fff;
            width: 95%;
            height: 1rem;
            display: flex;
            border-radius: 0.15rem;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            margin-top: 0.2rem;
            .left{
                width: 0.5rem;
                height: 0.5rem;
                line-height: 0.5rem;
                text-align: center;
                border-radius: 50%;
                background-color: #46aaff;
                margin-left: 0.13rem;
                font-size: 0.4rem;
                .icon-dingwei{
                    font-size: 0.4rem;
                    color: #fff;
                }
            }
            .right{
                width: 80%;
                height: 100%;
                font-size: 0.15rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .conter{
                    width: 90%;
                    height: 100%;
                    .name{
                        font-size: 0.2rem;
                        .number{
                            font-size: 0.16rem;
                            color: #999;
                            margin-left: 0.1rem;
                        }
                    }
                    .location{
                        font-size: 0.15rem;
                        height: 0.4rem;
                        width: 100%;
                        line-height: 0.4rem;
                    }
                    .span1{
                        color: #46aaff;
                    }
                    
                }
                .icon-guifanliebiaoxiayibu{
                    width: 10%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.25rem;
                }
            }
        }
        .Payment_methods{
            width: 95%;
            background-color: #fff;
            margin: 0.1rem auto;
            border-radius: 0.15rem;
            font-size: 0.15rem;
            padding: 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
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
                    font-size: 0.2rem;
                    display: flex;
                    padding-left: 0.2rem;
                    margin-bottom: 0.05rem;
                }
                .detial_content{
                    width: 100%;
                    .top{
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
                                background-color: #f3f3f3;
                                height: 0.25rem;
                                width: 1.5rem;
                                line-height: 0.25rem;
                                text-align: center;
                                border-radius: 0.05rem;
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
                        .order_remarks{
                            margin-top: 0.1rem;
                            height: 0.3rem;
                            font-size: 0.15rem;
                            input{
                                background:none;  
	                            outline:none;  
                                border:0px;
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
            }
        }
        .bill{
            width: 95%;
            padding: 0.1rem 0.2rem;
            background-color: #fff;
            margin: 0 auto;
            border-radius: 0.15rem;
            font-size: 0.16rem;
            margin-bottom: 0.1rem;
            display: flex;
            align-items: center;
            i{
                font-size: 0.23rem;
                margin-right: 0.08rem;
            }
            .icon-duigou{
                color: #46aaff;
            }
        }
    }
    .pay_methods{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 97;
        .methods{
            width: 100%;
            height: 4.5rem;
            background-color: #ffffff;
            border-radius: 0.1rem 0.1rem 0 0;
            position: fixed;
            bottom: 0rem;
            left: 0;
            z-index: 1111;
            padding: 0.2rem;
            .top{
                font-size: 0.25rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                i{
                    font-size: 0.28rem;
                    color: #ccc;
                }
            }
            .bottom{
                width: 100%;
                margin-top: 0.2rem;
                height: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                .bottom_active{
                    border: 0.01rem solid #46aaff;
                    color: #46aaff;
                }
                li{
                    font-size: 0.16rem;
                    width: 1rem;
                    height: 0.4rem;
                    border-radius: 0.2rem;
                    line-height: 0.4rem;
                    text-align: center;
                    border: 0.01rem #ccc solid;
                }
                
            }
           
        }
    }
    .slide-enter-active {
      animation-name: slideInUp;
      animation-duration: 0.3s;
      animation-fill-mode: both;
    }
    .slide-leave-active {
      animation-name: slideOutDown;
      animation-duration: 0.3s;
      animation-fill-mode: both;
    }
    @keyframes slideInUp {
      0% {
          transform: translate3d(0, 100%, 0);
          visibility: visible;
      }

      to {
          transform: translateZ(0);
      }
    }
    @keyframes slideOutDown {
      0% {
          transform: translateZ(0);
      }

      to {
          visibility: hidden;
          transform: translate3d(0, 100%, 0);
      }
    }
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .total{
            font-size: 0.25rem;
            color: #46aaff;
        }
        button{
            border: 0.01rem solid #ccc;
            margin: 0;
            padding: 0;
            border: 1px solid transparent;
            outline: none;
            width: 1.2rem;
            height: 0.4rem;
            background-color: #46aaff;
            border-radius: 0.2rem;
            font-size: 0.19rem;
            color: #fff;
        }
    }
</style>