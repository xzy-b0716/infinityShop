<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2019-08-01 02:15:40
 * @LastEditors: Seven
 * @LastEditTime: 2019-08-14 01:45:11
 -->
<template>
<div id="Details">
  <Header :message="message"></Header>
  <div class="main">
    <ul class="head">
      <li>头像</li>
      <li>
        <img :src="head?head:url1" alt="" />
        <input type="file" name="" accept="image/*" @change="headChange" id="imgehead"/>
      </li>
    </ul>
    
    <ul class="back">
      <li>背景图片</li>
      <li>
        <img :src="back?back:url2" alt="" />
        <input type="file" name="" accept="image/*" @change="backChange"/>
      </li>
    </ul>
    <ul class="nickname"> 
      <li>昵称</li>
      <li><input type="text" placeholder="请输入昵称" :value="nickname"/></li>
      <li class="icon-guifanliebiaoxiayibu"></li>
    </ul>
    <ul class="nickname">
      <li>性别</li>
      <li>
        <input type="text" placeholder="请选择性别" readonly
        @click="actionsheet" :value="sex"/>
        </li>
      <li class="icon-guifanliebiaoxiayibu"></li>
    </ul>
    <button class="btn" @click="save">保存</button>

  </div>
    <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
  </mt-actionsheet>

  
  
    
</div>
</template>
<script>
export default{
  name:"Details",
  data(){
    
    return{
      head:"",
      back:"",
      message:"个人信息",
      sex:"",
      nickname:"Jennifer",
      url1:require('@/assets/img/2.png'),
      url2:require('@/assets/img/3.png'),
      actions:[
        {
          name:"男",
          method:this.clickAction
        },
        {
          name:"女",
          method:this.clickAction
        } 
      ],
      //actionsheet默认不显示，操作sheetVisible控制显隐
      sheetVisible:false,
      
      
      
      
    }
  },
  
  methods:{
    actionsheet:function(){
      //打开actionsheet
      this.sheetVisible=true;
    },
    clickAction(e){
      console.log(e);
      this.sex=e.name;
    },
    //头像选择
    headChange(e){
      var that=this;
      var file=e.target.files[0];
      var reader=new FileReader();
      reader.onload=function(e){
        that.head=e.target.result;
      }
      reader.readAsDataURL(file);
    },
    backChange(e){
      var that=this;
      var file=e.target.files[0];
      var reader=new FileReader();
      reader.onload=function(e){
        that.back=e.target.result;
      }
      reader.readAsDataURL(file);
    },
    save(){
      
      // var param=new FormData();
      // param.append('picfile',file,file.name);
      // // data.append('file',this.head);
      // // data.appendTo('file',this.back);
      // let config={
      //   headers:{'Content-Type':'multipart/form-data'}
      // };
      // axios.post('url/',param,config).then(response=>{
      //   console.log(response)
      // })
      
    }
    
  }
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
    .head{
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
        width:.4rem;
        height:.4rem;
        margin-right:10%;
        position:relative;
        z-index:1;
        img{
          width:100%;
          height:100%;
          border-radius:100%;
        }
        input{
          width:100%;
          height:100%;
          position:absolute;
          z-index:1;
          left:0;
          top:0;
          opacity:0;
        }
      }
    }
    .back{
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
        width:.4rem;
        height:.4rem;
        margin-right:10%;
        position:relative;
        z-index:1;
        img{
          width:100%;
          height:100%;
          border-radius:100%;
        }
        input{
          width:100%;
          height:100%;
          position:absolute;
          z-index:1;
          left:0;
          top:0;
          opacity:0;
        }
      }
    }
    .nickname{
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
      
  }

}


</style>

