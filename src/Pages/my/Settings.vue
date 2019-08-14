<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-01 02:15:40
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-14 18:42:20
 -->
<template>
<div id="Details">
  <Header :message="message"></Header>
  <div class="main">
    <ul class="userlist"> 
      <li>密码</li>
      <li><input type="text" v-model="password" readonly @click="changepwd"/></li>
      <li class="icon-guifanliebiaoxiayibu"></li>
    </ul>
    <ul class="userlist"> 
      <li>邮箱</li>
      <li><input type="text" placeholder="修改邮箱" v-model="email"/></li>
      <li class="icon-guifanliebiaoxiayibu"></li>
    </ul>
    <ul class="userlist"> 
      <li>手机号码</li>
      <li><input type="text" placeholder="修改手机号码" v-model="tel"/></li>
      <li class="icon-guifanliebiaoxiayibu"></li>
    </ul>
    <ul class="userlist"> 
      <li>生日</li>
      <li>
        <input type="text" placeholder="请输入生日" v-model="selectedValue" readonly @click="openPicker"/>
      </li>
      <li class="icon-guifanliebiaoxiayibu"></li>
    </ul>

    <ul class="nametime">
      <li>会员名</li>
      <li><input type="text" :value="vipname" readonly/></li>
    </ul>
     <ul class="nametime">
      <li>注册时间</li>
      <li><input type="text" :value="regtime" readonly/></li>
    </ul>
    <button class="btn" @click="save">保存</button>
  </div>
  <!-- 日期选择 -->
  <mt-datetime-picker
    ref="picker"
    type="date"
    v-model="pickerValue"
    :startDate="startDate"
    :endDate="new Date()"
    year-format="{value} 年" 
    month-format="{value} 月" 
    date-format="{value} 日" 
    @confirm="handleConfirm">
  </mt-datetime-picker>
    
</div>
</template>
<script>
import {formatDate} from '@/assets/js/formatdate.js'
export default{
  name:"Details",
  data(){
    return{
      message:"设置",
      password:"",
      email:"",
      tel:"",
      vipname:"lxp",
      regtime:"2019-07-06",
      pickerValue:"", // 默认是当前日期
      selectedValue:"",
      startDate:new Date('1968-01-01'),
      birthday:""
      
        

      
    }
  },
  methods:{
    openPicker() {
        // 打开时间选择器，如果已经选过日期，再次打开选择器时日期回显
        if(this.selectedValue){
          this.pickerValue=this.selectedValue;
        }else{
          this.pickerValue=new Date();
          
        }
        this.$refs.picker.open();
      },
      handleConfirm(){
    
        this.selectedValue = formatDate(this.pickerValue);
      
      },
      changepwd(){
        this.$router.push('changepwd');
      },
      save(){
        // axios.post
        console.log(2);

      }
   
   
  }
  // created(){
  // //  console.log(window.localStorage.time)
  //   this.selectedValue=JSON.parse(window.localStorage.time) ;
  // }
}
</script>
<style scoped lang="less">
#Details{
  font-size:.2rem;
  .main{
    width:100%;
    .btn{
      width:80%;
    height:.4rem;
    border-radius: 5px;
    color:white;
    font-size:.18rem;
    background-color:#46aaff;
    display:block;
    margin:0 auto;
    border:0;
    outline:none;
    margin-top:.3rem;
     
      
    }
    .userlist{
      width:100%;
      list-style:none;
      height:.5rem;
      font-size:.20rem;
      display:flex;
      align-items: center;
      justify-content:space-between;
      border-bottom:1px solid silver;
       :nth-child(1){
        margin-left:5%;
      }
      :nth-child(2){
        width:50%;
        height:100%;
        margin-left:10%;
        input{
          width:100%;
          height:100%;
          text-align:right;
          border:0;
          outline:none;
        }
      }
      :nth-child(3){
        font-size:.3rem;
      }
    }
    .vipname{
      width:100%;
      list-style:none;
      height:.5rem;
      font-size:.20rem;
      display:flex;
      align-items: center;
      justify-content:space-between;
      border-bottom:1px solid silver;
       :nth-child(1){
        margin-left:5%;
      }
      :nth-child(2){
        width:50%;
        height:100%;
        margin-right:15%;
        input{
          width:100%;
          height:100%;
          text-align:right;
          border:0;
          outline:none;
          font-size:.2rem;
        }
      }
    }  
    .nametime{
      width:100%;
      list-style:none;
      height:.5rem;
      font-size:.20rem;
      display:flex;
      align-items: center;
      justify-content:space-between;
      border-bottom:1px solid silver;
       :nth-child(1){
        margin-left:5%;
      }
      :nth-child(2){
        width:50%;
        height:100%;
        margin-right:5%;
        input{
          width:100%;
          height:100%;
          text-align:right;
          border:0;
          outline:none;
          font-size:.2rem;
          
        }
      }
    }
  }

}


</style>

