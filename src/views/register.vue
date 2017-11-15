<template>
	<div class="login-container">
    <div class="login-content">
      <div class="log">
        <img src="/static/images/logo.png" alt="51兑换">
      </div>
      <div class="form-content">
        <div class="input-box">
          <i class="fa fa-user"></i>
          <input type="text" placeholder="请输入电子邮件" v-model="userAccount">
        </div>
        <div class="input-box">
          <i class="fa fa-lock"></i>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="input-box">
          <i class="fa fa-lock"></i>
          <input type="password" placeholder="请再次输入密码" v-model="confirmPass">
        </div>
        <!--<div class="input-box sms-box">
          <input type="password" placeholder="请输入图片验证码">
          <span class="sms-img">
            <img src="../assets/images/sms.png" alt="">
          </span>
        </div>-->
        <div class="message-box">{{errMsg}}</div>
        <div class="btn-box">
          <div class="btn" @click="register">{{registerTxt}}</div>
        </div>
        <div class="login-footer">
          <a href="/#/login">已有账户登录</a>
        </div>
      </div>
    </div>
	</div>
</template>
<style lang="less" scroped>
  .login-container {
    width: 100%;
    height: 100%;
    background: url("../assets/images/background.png") repeat;
    position: relative;
    .login-content {
      width: 350px;
      position: absolute;
      top: 20%;
      left: 0;
      right: 0;
      margin: auto;
      padding: 20px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 5px #c7c5c5;
      transform: translateY(50%);
      .log {
        width: 65px;
        height: 65px;
        margin: 0 auto 20px;
        img {
          width: 100%;
        }
      }
      .input-box {
        width: 100%;
        position: relative;
        & + .input-box {
          margin-top: 20px;
        }
        input {
          width: 100%;
          height: 36px;
          background: #fff;
          border: 1px solid #cad2db;
          border-radius: 4px;
          padding-left: 30px;
        }
        i {
          position: absolute;
          height: 15px;
          top: 0;
          bottom: 0;
          margin: auto;
          left: 10px;
          font-size: 16px;
        }
      }
      .sms-box{
        display: flex;
        input{
          width: 60%;
          display: inline-block;
          vertical-align: middle;
          margin-right:20px;
        }
        span{
          flex: 1;
          display: inline-block;
          vertical-align: middle;
          img{
            width:100%;
          }
          
        }
      }
      .message-box {
        padding: 10px 0;
        line-height: 20px;
        text-align: left;
        color: #ff001f;
      }
      .btn-box {
        overflow: hidden;
        margin: 15px 0;
        .btn {
          background: #0190dc;
          font-size: 16px;
          text-align: center;
          line-height: 40px;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background: #00a0dc;
          }
        }
      }
      .login-footer {
        overflow: hidden;
        text-align: right;
        a {
          display: inline-block;
         
          color: #171717;
          &:hover {
            opacity: .8;
          }
        }
      }
    }
  }
</style>
<script>
  var startTime=new Date().getTime();
  import API from '../api'
  import * as $$ from '../assets/js/common'
	export default {
		name: '',
		data() {
			return {
        userAccount:'',
        password:'',
        confirmPass:'',
        errMsg:'',
        registerTxt:'注册'
      }
		},
		
		created() {
		},
		
		mounted() {
		},
    methods:{
		  register:function () {
		    var _this=this;
		    var endTime=new Date().getTime();
		    if(endTime-startTime<2000){
		      return;
        }
        if(!$$.checkEmail(this.userAccount)){
		      this.errMsg='帐号必须是正确的邮箱地址';
		      return ;
        }
        if(!$$.pwdReg.test(this.password)){
          this.errMsg='请输入至少6-16位字母和数字组合的密码';
          return ;
        }
        if(this.password!=this.confirmPass){
          this.errMsg='两次输入密码不一致';
          return ;
        }
        this.registerTxt='注册中...';
        API.register({
          userAccount:this.userAccount,
          password:this.password,
          confirmPass:this.confirmPass
        }).then(function (data) {
          _this.registerTxt='注册';
          alert('注册成功')
          _this.$router.replace({
            name:'index'
          })
        }).catch(data=>{
          _this.registerTxt='注册';
          _this.errMsg=data.msg||'注册失败';
        })
      }
    }
	}
</script>
