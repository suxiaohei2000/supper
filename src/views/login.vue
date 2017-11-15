<template>
	<div class="login-container">
    <div class="login-content">
      <div class="log">
        <a href="/"><img src="/static/images/logo.png" alt="51兑换"></a>
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
        <div class="message-box">{{errMsg}}</div>
        <div class="btn-box">
          <div class="btn" @click="login"  >{{loginTxt}}</div>
        </div>
        <div class="login-footer">
         <!-- <a href="#">忘记密码</a>-->
          <a href="/#/register">马上注册</a>
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
      .message-box {
        padding: 10px 0;
        text-align: left;
        color: #ff001f;
      }
      .btn-box {
        overflow: hidden;
        margin-bottom: 15px;
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
        a {
          float: left;
          color: #171717;
          &:last-child {
            float: right;
            
          }
          &:hover {
            opacity: .8;
          }
        }
      }
    }
  }
</style>
<script>
  import {setCookie} from '../assets/js/common';
  import API from '../api'
	export default {
		name: '',
		data() {
			return {
        errMsg:'',
        userAccount:'',
        password:'',
        loginTxt:'登  录',
        status:1
      }
		},
		
		created() {
		},
		
		mounted() {
		},
		methods:{
		  login:function () {
		    var _this=this;
		    if(!this.status){
		      return
        }
		    if(!this.userAccount){
		      this.errMsg='帐号不能为空'
		      return ;
        }
        if(!this.password){
          this.errMsg='密码不能为空'
          return ;
        }
        this.loginTxt='登录中...';
        this.status=0;
        API.login({
          userAccount:this.userAccount,
          password:this.password,
          platform:'2',
        }).then(function (data) {
          _this.loginTxt='登  录';
          _this.status=1;
          setCookie('wms_user_identity',data.identity);
          setCookie('wms_user_id',data.userId);
          setCookie('wms_account',data.userAccount);
          setCookie('wms_login_source',data.platform);
          setCookie('userName',data.userName);
          var route=_this.$route;
          var query=route.query;
          let redirect=query.redirect||'/';
          _this.$router.replace({
            path:decodeURIComponent(redirect)
          })
        }).catch(function (data) {
          console.log(data)
          _this.status=1;
          _this.loginTxt='登  录';
          _this.errMsg=data.msg||'登录失败'
        })
        
       
      }
    }
	}
</script>
