<template>
	<div class="login-container">
    <div class="login-content">
      <div class="log">
        <img src="/static/images/log.png" alt="超级鸡">
      </div>
      <div class="form-content">
        <div class="input-box">
          <i class="fa fa-user"></i>
          <input type="text" placeholder="请输入电子邮件">
        </div>
        <div class="input-box">
          <i class="fa fa-lock"></i>
          <input type="password" placeholder="请输入密码">
        </div>
        <div class="input-box sms-box">
          <input type="password" placeholder="请输入图片验证码">
          <span class="sms-img">
            <img src="../assets/images/sms.png" alt="">
          </span>
        </div>
        <div class="message-box">错误信息</div>
        <div class="btn-box">
          <div class="btn">注册</div>
        </div>
        <div class="login-footer">
          <a href="/login">已有账户登录</a>
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
	export default {
		name: '',
		data() {
			return {}
		},
		
		created() {
		},
		
		mounted() {
		}
	}
</script>
