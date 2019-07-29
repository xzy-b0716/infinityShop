<template>
  <div class="GoodList">
    <Header message="购物车"></Header>
    <top v-show= "count>0"></top>
    <div class="empty" v-show= "count == 0">
      <div class="icon">
         <i class="icon-gouwucheweikong"></i>
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
                        <i class="icon-weigouxuan" @click= "checkOne(index)" :class= "{'icon-duigou': item.isCheck}"></i>
                        <div class="name">{{item.shopname}}</div>
                        <i class="icon-guifanliebiaoxiayibu"></i>
                    </div>
                    <div class="goods-information">
                        <div class="left">
                            <i class="icon-weigouxuan" @click= "checkOne(index)" :class= "{'icon-duigou': item.isCheck}"></i>
                            <img class="img" :src= "item.imgUrl" width="1">
                        </div>
                        <div class="right">
                            <div class="right-top">
                                <div class="price">￥{{item.price}}</div>
                                <div class="describe">{{item.describe}}</div>
                            </div>
                            <div class="right-middle">
                                <div class="color"></div>
                                <a class="color-selection" @click= "changeNum(index)">change</a>
                            </div>
                            <div class="right-bottom">
                                <div class="size">
                                    <div>{{item.size}}</div>
                                    <i class="icon-xia" @click= "changeNum(index)"></i>
                                </div>
                                <div class="number">
                                  <div>QTY:{{item.count}}</div>
                                    <i class="icon-xia" @click= "changeNum(index)"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      <div class="Foot">
        <div class="Foot-left">
            <i class="icon-weigouxuan" @click= "checkAll()" :class= "{'icon-duigou': checkall}"></i><span>全选</span>
        </div>
        <div class="Foot-right">
            <div class="total">合计:￥<span>{{totalprice}}</span></div>
            <button @click= "cauSum">结算<span v-show= "totalnum>0">({{totalnum}})</span></button>
        </div>
      </div>
      <transition name="PopupTS">
        <div class="Popup" v-show= "show1">
          <div class="content">
              您还没有选择商品哦
          </div>
        </div>
      </transition>
    </div>
      <div class="Numbers" v-show= "Numshow">
        <div class="numbers">
           <div class="num">
             <i class="icon-guanbi" @click= "closeNum"></i>
             <div class="num_title">
               数量：
               <div class="num_num">
                 <i class="icon-jianhaob" @click= "decrease"></i>
                 <span>{{this.Numnum}}</span>
                 <i class="icon-jiahaob" @click = "increase"></i>
               </div>
             </div>
           </div>
           <div class="color">
             <div class="num_color">
               颜色：
               <i class="icon-weigouxuan"></i>
             </div>
             <ul class="color_list"></ul>
           </div>
           <div class="size">
             <div class="size_num">尺码：
               <span>M</span>
             </div>
             <ul class="size_left"></ul>
           </div>
           <div class="define">
             <button @click= "define">确定</button>
           </div>
        </div>
    </div>
    <router-view></router-view>
    <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
import Top from './Top'
import Pay from './Pay'
export default {
  name: 'GoodList',
  components: {
    "top": Top,
    "pay": Pay
  },
  data () {
    return { 
      n:3,
      Numshow: false,
      show1: false,
      count: 2,
      totalprice: 0,
      totalnum: 0,
      checkall: false,
      Index: '',
      Numnum: '',
      list: [{
          id: 0,
          price: 10,
          count: 3,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女",
          
        },
        {
          id: 1,
          price: 15,
          count: 5,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"
        },
        {
          id: 2,
          price: 3,
          count: 6,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"  
        },
        {
          id: 3,
          price: 3,
          count: 6,
          size: "M",
          isCheck: false,
          imgUrl: require('../assets/image/4.png'),
          shopname: "韩舍家",
          describe: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女"  
        },
        {
          id: 4,
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
      }else{
        this.$router.push({path: '/Pay'});
      }
    },
    changeNum(index){
      this.Numshow = true;
      this.Index = this.list[index].id;
      this.Numnum = this.list[index].count;
    },
    decrease(){
      if(this.Numnum>1){
        this.Numnum --;
      }else{
        this.Numnum = 1;
      }
    },
    increase(){
      this.Numnum ++;
    },
    define(){
      this.list[this.Index].count = this.Numnum;
      this.Numshow = false;
    },
    closeNum(){
      this.Numshow = false;
    }
  }
}
</script>
<style scoped lang="less">
    .bottom{
        position:fixed;
        bottom:0;
    }
    @width: 100%;
    @color: #fff;
    Header{
      position: fixed;
      top: 0;
      left: 0;
    }
    top{
        position: fixed;
        top: 0.4rem;
        left: 0;
    }
    .empty{
      width: 100%;
      font-size: 0.19rem;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 1rem;
        height: 1rem;
        background-color: #fcca47;
        border-radius: 50%;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon-gouwucheweikong{
        font-size: 0.6rem;
        display: inline-block;
        color: #fff;
      }
      .word{
        margin-top: 0.2rem;
        margin-bottom: 0.1rem;
        text-align: center;
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
        overflow-y: auto;
        position: fixed;
        top: 0.7rem;
        bottom: 1.1em;
        width: 100%;
       .list-ul{
        .list-item{
            @color: #ccc;
            height: 1.7rem;
            position: relative;
            border-bottom: 0.01rem #b2b2b2 solid;
            .goods-list{
                padding: 0.1rem;
                .service-information{
                    height: 0.3rem;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .icon-weigouxuan,.icon-duigou{
                        font-size: 0.25rem;
                        color: @color;
                    }
                    .icon-duigou{
                        font-size: 0.25rem;
                        color: #46aaff;
                    }
                    .name{
                        font-size: 0.16rem;
                        margin: 0 0.1rem 0 0.15rem;
                    }
                    .icon-guifanliebiaoxiayibu{
                        color: @color;
                        font-size: 0.22rem;
                    }
                }
                .goods-information{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 1.2rem;
                    width: 100%;
                    .left{
                        width: 1.3rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .icon-weigouxuan{
                            font-size: 0.25rem;
                            color: @color;
                        }
                        .icon-duigou{
                          color: #46aaff;
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
                            .price{
                              width: 1.8rem;
                              font-size:0.18rem;
                            }
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
                                font-size: 0.14rem;
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
                              font-size: 0.15rem;
                              .icon-xia{
                                  width: 0.3rem;
                                  height: 0.3rem;
                                  line-height: 0.3rem;
                                  text-align: center;
                                  background-color: #46aaff;
                                  border-radius: 0 0.05rem 0.05rem 0;
                                  color: #fff;
                                  margin: 0;
                              }
                          }
                        }
                    }
                }
            }
			}   
  }
}
    .Foot{
          height: 0.5rem;
          width: 100%;
          border-top: 0.01rem solid #b7b7b7;
          position: fixed;
          bottom: 0.59rem;
          left: 0;
          background-color: #46aaff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          .Foot-left{
            height: 0.5rem;
            width: 1rem;
            padding-left: 0.1rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 0.22rem;
            color: @color;
            .icon-weigouxuan{
              font-size: 0.25rem;
              color: @color;
            }
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
      background-color: #46aaff;
      box-shadow: inset 0 0 0.03rem @color;
    }
    button:active{
        box-shadow: inset 0 0 0.05rem #999;
    }
    button:focus{
        outline: none;
        border-color: transparent;
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
            font-size: 0.14rem;
            color: #fff;
            
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
              height: 0.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              button{
                width: 90%;
              }
            }
            .num{
                height: 1rem;
                position: relative;
                border-radius: 0.05rem 0.05rem 0 0;
                border-bottom: 0.01rem solid #ccc;
                .num_title{
                  position: absolute;
                  left: 0.2rem;
                  top: 0.4rem;
                  width: 1.8rem;
                  height: 0.5rem;
                  display: flex;
                  font-size: 0.20rem;
                  justify-content: space-between;
                  align-items: center;
                  .num_num{
                    width: 1rem;
                    height: 0.3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 0.01rem #ccc solid;
                    span{
                      width: 0.4rem;
                      height: 0.3rem;
                      line-height: 0.3rem;
                      text-align: center;
                      border-left: 0.01rem #ccc solid;
                      border-right: 0.01rem #ccc solid;
                      font-size: 0.18rem;
                    }
                    i{
                      height: 0.3rem;
                      width: 0.3rem;
                      text-align: center;
                      line-height: 0.3rem;
                      font-size: 0.20rem;
                      margin: 0;
                    }
                  }
                }
                .icon-guanbi{
                  font-size: 0.22rem;
                  width: 0.3rem;
                  height: 0.3rem;
                  position: absolute;
                  right: 0.1rem;
                  top: 0.1rem;
                  text-align: center;
                  line-height: 0.3rem;
                  color: #ccc;
                }
            }
            .color{
              width: 100%;
              height: 1.5rem;
              border-bottom: 0.01rem solid #ccc;
              padding-left: 0.2rem;
              .num_color{
                width: 1.8rem;
                height: 0.7rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.2rem;
                .icon-weigouxuan{
                  width: 1rem;
                  font-size: 0.25rem;
                  display: inline-block;
                  height: 0.3rem;
                  text-align: center;
                  line-height: 0.3rem;
                }
              }
            }
            .size{
              width: 100%;
              height: 1.5rem;
              padding-left: 0.2rem;
              border-bottom: 0.01rem solid #ccc;
              .size_num{
                width: 1.8rem;
                height: 0.7rem;
                font-size: 0.2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span{
                  width: 1rem;
                  height: 0.7rem;
                  line-height: 0.7rem;
                  text-align: center;
                }
              }
            }
            
        }
    }
    
</style>
