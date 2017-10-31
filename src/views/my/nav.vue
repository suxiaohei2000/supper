<template>
	<div class="nav_container">
    <header>
      <div class="header-content">
        <span></span>
        <span>有钱人</span>
      </div>
    </header>
    <ul>
      <li :class="active=='my-profile'?'active':''">
        <a href="/#/my/profile">
          <i class="fa fa-user-o"></i>
          <span>基本资料</span>
        </a>
        
      </li>
      <li :class="active=='my-package'?'active':''">
        <a href="/#/my/package">
          <i class="fa fa-credit-card"></i>
          <span >钱包地址</span>
        </a>
        
      </li>
      <li :class="active=='my-exchange'?'active':''">
        <a href="/#/my/exchange">
          <i class="fa fa-cc-paypal"></i>
          <span >兑换记录</span>
        </a>
        
      </li>
      <li :class="active=='my-payment'?'active':''">
        <a href="/#/my/payment">
          <i class="fa fa-money"></i>
          <span>结款记录</span>
        </a>
        
      </li>
      <li :class="active=='my-password'?'active':''">
        <a href="/#/my/password">
          <i class="fa fa-lock"></i>
          <span>修改密码</span>
        </a>
        
      </li>
    </ul>
    <div class="logout" @click="loginOut">
      <i class="fa fa-sign-out"></i>
      <span>退出</span>
    </div>
	  
	</div>
</template>
<style lang="less" scroped>
  .nav_container{
    border:1px solid #E3E3E3;
    border-radius: 5px;
    header{
      display: block;
      text-align: center;
      margin:0 10px 10px;
      border-bottom: 1px dotted #E3E3E3;
      .header-content{
        display: inline-block;
        padding:10px 0;
        span{
          display: inline-block;
          vertical-align: middle;
          &:first-child{
            height:50px;
            width: 50px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-image:url("../../assets/images/head_img.png");
          }
          &+span{
            margin-left:10px;
          }
        }
      }
    }
    ul{
      margin-bottom:10px;
      font-size:14px;
      li{
        height:40px;
        line-height: 40px;
        padding-left:20px;
        border-bottom:1px solid #E3E3E3;
        border-left:2px solid transparent;
        cursor: pointer;
        a{
          display: block;
        }
        &:hover,&.active{
          background: #eeeeee;
          border-left:2px solid #00a0dc;
        }
        &:last-child{
          border-bottom:none;
        }
        i{
          width: 20px;
          margin-right:10px;
        }
      }
    }
    .logout{
      line-height: 40px;
      padding-left:22px;
      border-top:1px dotted #E3E3E3;
      cursor: pointer;
      i{
        margin-right:10px;
      }
      &:hover{
        background: #eeeeee;
      }
    }
    
   
  }
</style>
<script>
  import {delCookie} from '../../assets/js/common'
	export default {
		name: '',
		data() {
			return {
			  active:''
      }
		},
		created() {
		},
		
		mounted() {
		  var route=this.$route
      var name=route.name;
		  this.active=name;
		},
    methods:{
      loginOut:function () {
        delCookie('sessionToken');
        window.location.href='/'
      }
    }
	}
</script>
