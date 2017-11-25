<template>
  <div class="nav-container">
    <header :class="navActive">
      <nav class="nav_bar">
        <a class="nav_log" href="/">
          <div class="log"><img src="/static/images/logo.png" alt=""></div>
          <span>51兑换</span>
        </a>
        <ul class="nav_menu">
          <!--<li :class="active=='index'?'active':''"><a href="/#/index">首页</a></li>-->
          <li :class="active=='mart'?'active':''"><a href="/#/mart">交易中心</a></li>
          <li ><a href="javascript:void(0)">QQ群：681207350</a></li>
         <!-- <li><a href="#">帮助中心</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">技术支持</a></li>-->
        </ul>
        <div class="nav-other-box">
          <li :class="active=='login'?'active':''" v-if="!sessionToken"><a href="/#/login">登录</a></li>
          <li :class="active.split('-')[0]=='my'?'active':''" v-else><a href="/#/my/profile">个人中心</a></li>
          <li :class="active=='register'?'active':''" ><a href="/#/register">注册</a></li>
        </div>
      </nav>
    </header>
  </div>
 
  
</template>
<style lang="less" scroped>
  .nav-container{
    position: fixed;
    top:0;
    left:0;
    z-index:10;
    width: 100%;
    header{
      width: 100%;
      background: rgba(13, 13, 13, 0.6);
      color:#fff;
      &.nav-active{
        background: rgba(13, 13, 13, 1);
      }
    }
    .nav_bar {
      width: 1200px;
      height:62px;
      margin:auto;
      overflow: hidden;
      position: relative;
      text-align: center;
      .nav_log{
        position: absolute;
        left:10px;
        padding:10px 0;
        span{
          display: inline-block;
          vertical-align: middle;
          font-size:20px;
        }
        .log{
          width: 40px;
          height:40px;
          display: inline-block;
          vertical-align: middle;
          margin-right:15px;
          img {
            width: 100%;
            height:100%;
          }
        }
      
      }
      .nav_menu{
        display: inline-block;
        height:100%;
        
      }
      li{
        float: left;
        line-height:20px;
        font-size:14px;
        cursor: pointer;
        border-bottom:2px solid transparent;
        color:#fff;
        a{
          padding:20px 15px;
          color:inherit;
          display: block;
        }
        &.active{
          color:#fff;
          border-bottom:2px solid #fff;
        }
        &:hover{
          color:rgba(255,255,255,.8)
        }
      }
      .nav-other-box{
        position: absolute;
        right:0;
        top:0;
      }
    }
  }
 
</style>
<script>
  import {getCookie} from '../assets/js/common'
  export default {
    name: "nav",
    data() {
      return {
        active:'',
        sessionToken:'',
        navActive:''
      };
    },
    
    created() {
    },
    mounted() {
      var _this=this;
      var route=this.$route
      var name=route.name;
      this.active=name;
      var sessionToken=getCookie('wms_user_identity');
      this.sessionToken=sessionToken;
      //滚动
      
      window.onscroll=function () {
        var sTop=document.body.scrollTop
        if(sTop>60){
          _this.navActive='nav-active';
        }else{
          _this.navActive=''
        }
      }
    }
  };
</script>
