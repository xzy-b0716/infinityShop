<template>
  <div class="GoodList">
    <Header message="购物车"></Header>
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
    <div class="goods" v-show= "count>0" style="overflow-x:hidden">
      <div style="overflow-x:visible">
        <ul class="list-ul">
          <li class="list-item" v-for = "(item, index) in list" :key= "index" data-type="0">
              <div class="goods-list" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
                  <div class="service-information">
                      <i class="icon-weigouxuan" @click= "checkOne(index)" :class= "{'icon-duigou': item.ischecked}"></i>
                      <div class="name" @click= "Jdescribe">{{item.shopname}}</div>
                      <i class="icon-guifanliebiaoxiayibu" @click= "Jdescribe"></i>
                  </div>
                  <div class="goods-information">
                      <div class="left">
                          <i class="icon-weigouxuan" @click= "checkOne(index)" :class= "{'icon-duigou': item.ischecked}"></i>
                          <img class="img" :src= "item.productPicture" width="1" @click= "Jdescribe">
                      </div>
                      <div class="right">
                          <div class="right-top">
                              <div class="price">￥{{item.productPrice}}</div>
                              <div class="describe" @click= "Jdescribe">{{item.productName | snippet}}</div>
                          </div>
                          <div class="right-middle">
                              <div class="color"></div>
                              <a class="color-selection" @click= "changeNum(index)">change</a>
                          </div>
                          <div class="right-bottom">
                              <div class="size">
                                  <div>{{item.cpProductSize}}</div>
                                  <i class="icon-xia" @click= "changeNum(index)"></i>
                              </div>
                              <div class="number">
                                <div>QTY:{{item.quantity}}</div>
                                  <i class="icon-xia" @click= "changeNum(index)"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="delete" @click="deleteItem" :data-index= "index">删除</div>
          </li>
            
      </ul>
      </div>
      
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
    <transition name="slide">
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
               颜色分类：
             </div>
             <ul class="color_list">
               <li v-for="(items,index) in colors" :key="index" class="colors" @click= "Size__Color(index)" :class= "{'Size_Color': Color == index}">
                 {{items}}
               </li>
             </ul>
           </div>
           <div class="size">
             <div class="size_num">尺码分类：
             </div>
             <ul class="size_left">
               <li v-for="(items,index) in sizes" :key="index" class="sizes" :class= "{'Size_Color': SizeColor == index}" @click= "Size_Color(index)">
                 {{items}}
               </li>
             </ul>
           </div>
           <div class="define">
             <button @click= "define">确定</button>
           </div>
        </div>
    </div>
    </transition>
    <router-view></router-view>
    <bottom class="bottom" :n="n"></bottom>
  </div>
</template>

<script>
import Pay from './Pay'

export default {
  name: 'GoodList',
  components: {
    "pay": Pay
  },
  data () {
    return { 
      n:3,
      Numshow: false,
      show1: false,
      count: 3,
      totalprice: 0,
      totalnum: 0,
      checkall: false,
      Index: '',
      Numnum: '',
      startX : 0 ,
      endX : 0 ,
      index1: '',
      SizeColor: 0,
      Color: 0,
      colors: ["red","purple","green","pink"],
      sizes: ["S","M","L","XL"],
      list: [{
          productId: 0,
          productPrice: 10,
          quantity: 3,
          cpProductSize: "M",
          ischecked: false,
          cpProductColor: "red",
          productPicture: require('../../assets/image/4.png'),
          shopname: "韩舍家",
          productName: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女",
        },
        {
          productId: 1,
          productPrice: 15,
          quantity: 5,
          cpProductSize: "M",
          ischecked: false,
          cpProductColor: "red",
          productPicture: require('../../assets/image/4.png'),
          shopname: "韩舍家",
          productName: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女",
        },
        {
          productId: 2,
          productPrice: 3,
          quantity: 6,
          cpProductSize: "M",
          ischecked: false,
          cpProductColor: "red",
          productPicture: require('../../assets/image/4.png'),
          shopname: "韩舍家",
          productName: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女",
        },
        {
          productId: 3,
          productPrice: 3,
          quantity: 6,
          cpProductSize: "M",
          ischecked: false,
          cpProductColor: "red",
          productPicture: require('../../assets/image/4.png'),
          shopname: "韩舍家",
          productName: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女",
        },
        {
          productId: 4,
          productPrice: 3,
          quantity: 6,
          cpProductSize: "M",
          ischecked: false,
          cpProductColor: "red",
          productPicture: require('../../assets/image/4.png'),
          shopname: "韩舍家",
          productName: "黑色洋装小个子短款连衣裙荷叶边显瘦2019新款优雅小香风小礼服女",
        }
        ]
    }
  },
  
  filters:{
    snippet(value){
    return value.slice(0,25)+"...";
    }
  },

  methods: {
    getTotal(){
      this.totalprice = 0;
      this.totalnum = 0;
      for(let i=0;i<this.list.length;i++){
        var _d = this.list[i];
        if(_d.ischecked){
          this.totalprice += _d['productPrice']*_d['quantity'];
          this.totalnum += _d['quantity']
        }
      }
    },
    checkOne(index){
      if(this.list[index].ischecked == true){
        this.list[index].ischecked = false;
      }else{
        this.list[index].ischecked = true;
      }
      this.getTotal();
    },
    checkAll(){
      if(this.checkall){
        for(let i=0;i<this.list.length;i++){
          this.list[i].ischecked = false;
        }
        this.checkall = false;
      }else{
        for(let i=0;i<this.list.length;i++){
          this.list[i].ischecked = true;
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
      this.Index = this.list[index].productId;
      this.Numnum = this.list[index].quantity;
    },
    Size_Color(index){
      this.SizeColor = index;
    },
    Size__Color(index){
      this.Color = index;
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
    },
    Jdescribe(){
      this.$router.push({path: '/describe'});
    },
    skip(){
  if( this.checkSlide() ){
  this.restSlide();
      }else{
  // alert('You click the slide!')
      }
 },
 //滑动开始
 touchStart(e){
   // 记录初始位置
  this.startX = e.touches[0].clientX;
 },
 //滑动结束
 touchEnd(e){
            // 当前滑动的父级元素
  let parentElement = e.currentTarget.parentElement;
  
  
  // 记录结束位置
  this.endX = e.changedTouches[0].clientX;
            // 左滑
  if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
  this.restSlide();
  parentElement.dataset.type = 1;
  }
            // 右滑
  if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
  this.restSlide();
  parentElement.dataset.type = 0;
  }
  this.startX = 0;
  this.endX = 0;
 },
    //判断当前是否有滑块处于滑动状态
    checkSlide(){
  let listItems = document.querySelectorAll('.list-item');
  for( let i = 0 ; i < listItems.length ; i++){
  if( listItems[i].dataset.type == 1 ) {
   return true;
        }
  }
  return false;
    },
 //复位滑动状态
 restSlide(){
  let listItems = document.querySelectorAll('.list-item');
             // 复位
  for( let i = 0 ; i < listItems.length ; i++){
  listItems[i].dataset.type = 0;
  }
 },
 //删除
 deleteItem(e){
   // 当前索引
  let index = e.currentTarget.dataset.index;
  // 复位
  this.restSlide();
  // 删除
  this.list.splice(index,1);
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
        top: 0.5rem;
        bottom: 1.1rem;
        width: 100%;
       .list-ul{
        width: 100%;
        .list-item{
            @color: #ccc;
            width: 100%;
            height: 1.7rem;
            position: relative;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            border-bottom: 0.01rem #b2b2b2 solid;
            .goods-list{
                padding: 0.1rem;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
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
                                display: flex;
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
             .delete{
                  width: 0.8rem;
                  height: 1.7rem;
                  line-height: 1.7rem;
                  background: #e01212;
                  font-size: .20rem;
                  color: #fff;
                  text-align: center;
                  position: absolute;
                  right: -0.8rem;
                  top: 0;
              }
      }  
        .list-item[data-type="0"]{
          transform: translate3d(0,0,0);
        }
        .list-item[data-type="1"]{
          transform: translate3d(-0.8rem,0,0);
        } 
        .list-item:after{
          content: " ";
          position: absolute;
          left: 0.2rem;
          bottom: 0;
          right: 0;
          height: 0.01rem;
          border-bottom: 0.01rem solid #ccc;
          color: #ccc;
          -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          z-index: 2;
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
              width: 100%;
              position: fixed;
              bottom: 0rem;
              left: 0;
              height: 0.6rem;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 0;
              button{
                width: 95%;
                margin-left: 0;
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
              height: 1rem;
              border-bottom: 0.01rem solid #ccc;
              padding: 0 0.2rem;
              .num_color{
                width: 1.8rem;
                height: 0.3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.2rem;
                }
              .color_list{
                list-style: none;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 0.1rem;
                .colors{
                  height: 0.3rem;
                  width: 0.7rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #f3f3f3;
                  border-radius: 0.1rem;
                  font-size: 0.16rem;
                  // color: #666;
                  
                }
              }
            }
            .size{
              width: 100%;
              height: 1rem;
              padding: 0 0.2rem;
              border-bottom: 0.01rem solid #ccc;
              .size_num{
                width: 1.8rem;
                height: 0.4rem;
                font-size: 0.2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .size_left{
                list-style: none;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .sizes{
                  height: 0.3rem;
                  width: 0.7rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #f3f3f3;
                  border-radius: 0.1rem;
                  font-size: 0.18rem;
                  // color: #666;
                }
              }
            }
             .Size_Color{
                border: 0.02rem #46aaff solid;
                color: #46aaff; 
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

</style>
