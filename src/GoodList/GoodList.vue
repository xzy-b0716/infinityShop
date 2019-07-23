<template>
  <div class="GoodList">
    <Header message="购物车"></Header>
    <top v-show= "count>0"></top>
    <div class="empty">
      <div class="icon">
         <i class="icongouwucheweikong"></i>
      </div>
      <div class="word">
        <span class="span1">购物车空空如也</span><br>
        <span class="span2">要是宝贝到手了，那就赶紧享用吧~</span>
      </div>
      <button class="button">去逛逛</button>
    </div>
    <div class="goods" v-show= "count>0">
      <ul class="list-ul">
            <li class="list-item" v-for = "(item, index) in list" :key= "index" >
                <div class="goods-list">
                    <div class="service-information">
                        <i class="iconweigouxuan" @click= "checkOne(index)" :class= '{iconduigou: item.isCheck}'></i>
                        <div class="name">{{item.shopname}}</div>
                        <i class="iconguifanliebiaoxiayibu"></i>
                    </div>
                    <div class="goods-information">
                        <div class="left">
                            <i class="iconweigouxuan" @click= "checkOne(index)" :class= '{iconduigou: item.isCheck}'></i>
                            <img class="img" :src= "item.imgUrl" width="1">
                        </div>
                        <div class="right">
                            <div class="right-top">
                                <div class="price">￥{{item.price}}</div>
                                <div class="describe">{{item.describe}}</div>
                            </div>
                            <div class="right-middle">
                                <div class="color"></div>
                                <a class="color-selection">change</a>
                            </div>
                            <div class="right-bottom">
                                <div class="size">
                                    <div>{{item.size}}</div>
                                    <i class="iconxia"></i>
                                </div>
                                <div class="number">
                                  <div>QTY:{{item.count}}</div>
                                    <i class="iconxia" @click= "changeNum(index)"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="delete">
                    <i class="iconshanchu1"></i>
                </div>
            </li>
        </ul>
      <div class="Foot">
        <div class="Foot-left">
            <i class="check-all iconweigouxuan" @click= "checkAll()" :class= '{iconduigou: checkall}'></i><span>全选</span>
        </div>
        <div class="Foot-right">
            <div class="total">合计:￥<span>{{totalprice}}</span></div>
            <button @click= "cauSum">结算<span v-show= "totalnum>0">({{totalnum}})</span></button>
        </div>
      </div>
      <transition name="PopupTS">
        <div class="Popup" v-show= "show1">
          <div class="content">
              <span>您还没有选择商品哦</span>
          </div>
        </div>
      </transition>
      <div class="Numbers" v-show= "Numshow">
        <div class="numbers">
            <div class="title">
                数量 :
                <i class="iconshanchu1" @click= "CloseNum"></i>
            </div>
            <ul class="num_ul">
                <li class="num_list" :class= "{broadside: Numnum==n}" v-for= "(n,num) in listNum" :key= "num" @click= "changeClass(num)">
                    <span>{{n}}</span>
                </li>
            </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Top from './Top'
export default {
  name: 'GoodList',
  components: {
    "top": Top
  },
  data () {
    return { 
      Numshow: false,
      show1: false,
      count: 1,
      totalprice: 0,
      totalnum: 0,
      checkall: false,
      Index: '',
      Numnum: '',
      listNum: [1,2,3,4,5,6,7,8,9,10],
      list: [{
          price: 10,
          count: 3,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"
            
        },
        {
          price: 15,
          count: 5,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"
            
        },
        {
          price: 3,
          count: 6,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"   
        },
        {
          price: 3,
          count: 6,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"   
        },
        {
          price: 3,
          count: 6,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"   
        }
        ]
    }
  },
  methods: {
    getTotal(){
      this.totalprice = 0;
      this.totalnum = 0;
      for(let i=0;i<this.list.length;i++){
        var _d = this.list[i];
        if(_d.isCheck){
          this.totalprice += _d['price']*_d['count'];
          this.totalnum += _d['count']
        }
      }
    },
    checkOne(index){
      if(this.list[index].isCheck == true){
        this.list[index].isCheck = false;
      }else{
        this.list[index].isCheck = true;
      }
      this.getTotal();
    },
    checkAll(){
      if(this.checkall){
        for(let i=0;i<this.list.length;i++){
          this.list[i].isCheck = false;
        }
        this.checkall = false;
      }else{
        for(let i=0;i<this.list.length;i++){
          this.list[i].isCheck = true;
        }
        this.checkall = true;
      }
      this.getTotal();
    },
    cauSum(){
      var that = this;
      setTimeout(function(){
        that.show1 = false
      },2000)
      if(this.totalnum === 0){
        this.show1 = true;
      }
    },
    changeNum(index){
      this.Numshow = true;
      this.Numnum = this.list[index].count;
    },
    CloseNum(){
      this.Numshow = false;
    },
    changeClass(n){ 
      this.Numnum = this.listNum[n];
    }
  }
}
</script>
<style scoped lang="less">
    @width: 100%;
    @color: #fff;
    Header{
      width: @width;
    }
    .empty{
      width: 100%;
      font-size: 0.19rem;
      margin-top: 1rem;
      display: none;
      .icon{
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
        background-color: #fcca47;
        border-radius: 50%;
        line-height: 1rem;
        margin-bottom: 0.2rem;
      }
      .icongouwucheweikong{
        font-size: 0.6rem;
        display: inline-block;
        color: #fff;
      }
      .word{
        margin-top: 0.2rem;
        margin-bottom: 0.1rem;
      }
      span{
        display: inline-block;
        margin-bottom: 0.1rem;
      }
      .span2{
        color: #b7b7b7;
      }
      .button{
        width: 90%;
        height: 0.4rem;
        background-color: #46aaff;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.2rem;
      }
    } 
    .goods{
        overflow: auto;
        position: absolute;
        top: 0.9rem;
        bottom: 1.1rem;
       .list-ul{
        .list-item{
            @color: #ccc;
            height: 1.6rem;
            position: relative;
            border-bottom: 0.01rem #b2b2b2 solid;
            .goods-list{
                padding: 0.1rem;
                .service-information{
                    height: 0.3rem;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .iconweigouxuan,.iconduigou{
                        font-size: 0.25rem;
                        color: @color;
                    }
                    .name{
                        font-size: 0.16rem;
                        margin: 0 0.1rem 0 0.15rem;
                    }
                    .iconguifanliebiaoxiayibu{
                        color: @color;
                        font-size: 0.22rem;
                    }
                }
                .goods-information{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 1.2rem;
                    .left{
                        width: 1.3rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .iconweigouxuan{
                            font-size: 0.25rem;
                            color: @color;
                        }
                        .img{
                            display: block;
                            width: 1rem;
                            height: 1.1rem;
                            border-radius: 0.05rem;
                            box-shadow: 0 0.02rem 0.02rem #ccc;
                        }
                    }
                    .right{
                        height: 1.2rem;
                        margin-left: 0.2rem;
                        .right-top{
                            width: 1.8rem;
                            text-align: left;
                            .describe{
                                width: 1.8rem;
                                height: 0.4rem;
                                line-height: 0.2rem;
                                font-size: 0.13rem;
                                overflow: hidden;
                            }
                        }
                        .right-middle{
                            height: 0.2rem;
                            display: flex;
                            align-items: center;
                            .color{
                                width: 0.2rem;
                                height: 0.2rem;
                                border-radius: 50%;
                                background-color: green;
                            }
                            .color-selection{
                                margin-left: 0.15rem;
                            }
                        }
                        .right-bottom{
                            height: 0.4rem;
                            width: 2rem;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .size, .number{
                              padding-left: 0.05rem;
                              width: 0.9rem;
                              height: 0.3rem;
                              box-shadow: 0 0.02rem 0.02rem #ccc;
                              border-radius: 0.05rem;
                              display: flex;
                              justify-content: space-between;
                              align-items: center;
                              .message{
                                  width: 0.6rem;
                                  font-size: 0.14rem;
                                  text-align: left;
                                  padding-left: 0.05rem;
                              }
                              .iconxia{
                                  width: 0.3rem;
                                  height: 0.3rem;
                                  line-height: 0.3rem;
                                  text-align: center;
                                  background-color: #46aaff;
                                  border-radius: 0 0.05rem 0.05rem 0;
                                  font-size: 0.2rem;
                                  color: #fff;
                              }
                          }
                        }
                    }
                }
            }
        .delete{
            width: 0.5rem;
            height: 1.6rem;
            line-height: 1.6rem;
            text-align: center;
            background-color: #ff3b2f;
            box-shadow: 0 0.03rem 0.03rem @color;
            position: absolute;
            top: 0;
            right: -0.55rem;
            .iconshanchu1{
                font-size: 0.25rem;
                color: #fff;
            }
        }
			}   
  }
}
    .Foot{
          height: 0.6rem;
          width: 100%;
          border-top: 0.01rem solid #b7b7b7;
          position: fixed;
          bottom: 0.5rem;
          left: 0;
          background-color: #81d654;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          .Foot-left .check-all{
              font-size: 0.22rem;
              color: @color;
              margin-left: 0.2rem;
          }
          .Foot-left span{
              font-size: 0.17rem;
              color: @color;
          }
          .Foot-right{
              width: 2rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-right: 0.2rem;
              font-size: 0.18rem;
              .total{
                  color: @color;
                  span{
                      color: @color;
                  }
              }
              button span{
                color: @color;
                margin-left: 0.05rem;
                font-size: 0.16rem;
              }
          }
    }
    button{
      border: 0.01rem solid @color;
      width: 0.9rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      margin-left: 0.05rem;
      font-size: 0.2rem;
      color: @color;
      background-color: #81d654;
      box-shadow: inset 0 0 0.03rem @color;
    }
    button:active{
        box-shadow: inset 0 0 0.05rem #999;
    }
     .Popup{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease-in;
        .content{
            background-color: rgba(0,0,0,0.5);
            width: 1.6rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            border-radius: 0.1rem;
            span{
                font-size: 0.14rem;
                color: #fff;
            }
        }
     } 
    .PopupTS-enter-active {
      animation-name: enterIn;
      animation-duration: 0.3s;
      animation-fill-mode: both;
    }
    .PopupTS-leave-active {
      animation-name: enterOut;
      animation-duration: 0.3s;
      animation-fill-mode: both;
    }
    @keyframes enterIn {
      0% {opacity: 0;}
      to {opacity: 0.5;}
    }
    @keyframes enterOut {
      0% {opacity: 0.5;}
      to {opacity: 0;}
    }
    .Numbers{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 97;
        display: flex;
        justify-content: center;
        align-items: center;
        .numbers{
            width: 2rem;
            height: 5rem;
            background-color: #ffffff;
            border-radius: 0.05rem;
            position: relative;
            .title{
                height: 0.5rem;
                padding-left: 0.5rem;
                padding-right: 0.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.2rem;
                background-color: #f0f2f1;
                border-radius: 0.05rem 0.05rem 0 0;
                display: absolute;
                left: 0;
                top: 0;
            }
            .num_ul{
                width: 100%;
                height: 4.5rem;
                position: absolute;
                top: 0.5rem;
                left: 0;
                overflow: auto;
                .num_list{
                    height: 0.5rem; 
                    border-top: 0.01rem #e9ebea solid;
                    line-height: 0.5rem;
                    text-align: center;
                }
                .broadside{
                    border-left: 0.06rem solid #46aaff;
                    font-size: 0.22rem;
                }
            }
           
        }
    }
    
</style>
