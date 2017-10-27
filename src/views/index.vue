<template>
  <div class="home-container">
    <div class="slider-container">
      <div class="slider-content">
        <div class="slider-item">
          <div class="slider-item-title">
            最便捷的兑换平台
          </div>
          <div class="slider-item-info">
            快速提现，挖矿洗白白
          </div>
          <div class="slider-button">
            <div class="btn active">开始</div>
            <div class="btn">帮助</div>
          </div>
        </div>
      
      </div>
      <div class="slider-footer">
        <div class="slider-footer-content">
          <div class="slider-footer-item">
            <i class="fa fa-shopping-cart fa-3x"></i>
            <div class="item-info">
              <span>快速</span>
              <span>30分钟拿到现金</span>
            </div>
          </div>
          <div class="slider-footer-item">
            <i class="fa fa-lock fa-3x"></i>
            <div class="item-info">
              <span>安全</span>
              <span>google、FB顶级安全大神照顾你的生意</span>
            </div>
          </div>
          <div class="slider-footer-item">
            <i class="fa fa-reply fa-3x"></i>
            <div class="item-info">
              <span>私密</span>
              <span>1v1专属私密连接</span>
            </div>
          </div>
        </div>
      </div>
      <div class="home-page-2">
        <img src="../assets/images/home-page-2.png" alt="">
      </div>
      <div class="home-page-2-footer">
        <span> 欢迎来到xx，最新最快最安全，QQ群：xxxxxx</span>
      </div>
      <div class="home-page-3">
        <div class="home-page-3-content">
          <div class="home-page-title">
            FAQ
          </div>
         <ul>
           <li>
             <span>免费吗</span>
             <span>只需要5%的手续费，便可以轻松兑换现金</span>
           </li>
           <li>
             <span>服务稳定么？</span>
             <span>兑换服务部署于全球各地，7*24小时稳定服务</span>
           </li>
         </ul>
          <ul>
            <li>
              <span>支持哪几种货币？</span>
              <span>目前支持比特币、以太坊、以太经典、莱特币等8大主流币种，未来会逐步增加，尽请关注</span>
            </li>
            <li>
              <span>实时提款么？</span>
              <span>我们最短会在30分钟内完成。不过，由于外汇交易需要一定的时间，也有可能需要在3日内完成。</span>
            </li>
          </ul>
          <p >
            还有问题？请加QQ群：******888
          </p>
        </div>
      </div>
      <footer>
        <div class="footer-nav">
          <div class="footer-nav-box">
            <div class="nav-box-left">
              <div class="nav_log">
                <div class="log">
                  <img src="/static/images/log.png" alt="">
                </div>
                <span>超级鸡</span>
              </div>
              <p>最新最快最安全的兑换平台</p>
            </div>
            <ul class="nav-box-right">
              <li>
                <span>交易中心</span>
                <span>我的账户</span>
                <span>我的订单</span>
              </li>
              <li>
                <span>帮助中心</span>
                <span>FAQ</span>
                <span>技术支持</span>
              </li>
              <li>
                <span>关于我们</span>
                <span>我们是谁</span>
                <span>联系我们</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>
            <span>Copyright 2017.All rights reserved.</span>
            <span>China: +86 2 33 44 55 66    US: +11 222 333 444    support@shark.com</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style lang="less" scroped>
  .home-container {
    min-width: 1200px;
    position: relative;
    .slider-container {
      height: 800px;
      width: 100%;
      background: url("../assets/images/slider02.jpg") no-repeat;
      background-position: top center;
      background-size: cover;
      .slider-content {
        width: 1200px;
        height: 100%;
        margin: auto;
        position: relative;
        &:after {
          content: '';
          height: 100%;
          display: inline-block;
          vertical-align: middle;
        }
        .slider-item {
          display: inline-block;
          vertical-align: middle;
          color: #fff;
          .slider-item-title {
            font-weight: 600;
            font-size: 60px;
            line-height: 100px;
          }
          .slider-item-info {
            font-size: 30px;
            line-height: 50px;
          }
          .slider-button {
            margin-top: 20px;
            .btn {
              border: 1px solid #fff;
              border-radius: 5px;
              width: 100px;
              font-size: 18px;
              text-align: center;
              padding: 10px 0;
              display: inline-block;
              cursor: pointer;
              & + .btn {
                margin-left: 20px;
              }
              &.active {
                background: #ff7043;
                border-color: transparent;
              }
              
            }
          }
        }
      }
    }
    .slider-footer {
      width: 100%;
      padding: 20px 0;
      background: #171717;
      .slider-footer-content {
        width: 1000px;
        margin: auto;
        vertical-align: middle;
        color: #fff;
        overflow: hidden;
        .slider-footer-item {
          display: inline-block;
          width: 350px;
          float: left;
          &:last-child {
            margin-left: 50px;
            width: 200px;
          }
          i, .item-info {
            display: inline-block;
            vertical-align: middle;
          }
          .item-info {
            margin-left: 10px;
            span {
              display: block;
              &:first-child {
                font-size: 14px;
                padding-bottom: 4px;
              }
            }
          }
        }
      }
    }
    .home-page-2 {
      width: 1200px;
      margin: auto;
      img {
        width: 100%;
      }
    }
    .home-page-2-footer {
      height: 60px;
      background: #171717;
      text-align: center;
      &:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        vertical-align: middle;
      }
    }
    .home-page-3 {
      overflow: hidden;
      background: #efefef;
      padding:20px 0;
      .home-page-3-content{
        width: 1000px;
        margin:auto;
        .home-page-title{
          font-size:22px;
          text-align: center;
        }
        ul{
          margin-top:20px;
          &+ul{
            margin-top:30px;
          }
          li{
            width: 49%;
            display: inline-block;
            vertical-align: top;
            &:last-child{
              padding-left:19%;
            }
            span{
              display: block;
              font-size:14px;
              line-height:20px;
              &:last-child{
                font-size:12px;
                color:#777;
                padding-top:10px;
              }
              
            }
          }
        }
        p{
          font-size:12px;
          text-align: center;
          color: #666;
          margin-top:30px;
        }
      }
    }
    footer{
      width: 100%;
      overflow: hidden;
      background: #fff;
      .footer-nav-box{
        width: 1200px;
        margin:auto;
        overflow: hidden;
        .nav-box-left{
          float: left;
          .nav_log{
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
          p{
            font-size:12px;
            color:#777777;
          }
        }
        .nav-box-right{
          float: right;
          width: 610px;
          padding-top:10px;
          li{
            width: 200px;
            font-size:12px;
            cursor: pointer;
            color:#777777;
            display: inline-block;
            span{
              display: block;
              margin-bottom:10px;
              
              &:first-child{
                font-size: 14px;
                color: #333333;
              }
            }
          }
        }
      }
      .footer-bottom{
        background: #171717;
        color:#fff;
        overflow: hidden;
        &>div{
          width: 1200px;
          margin:auto;
          padding:10px 0 20px;
          span{
            float: left;
            &:last-child{
              float: right;
            }
          }
        }
      }
    }
  }
</style>
<script>
  export default {
    name: "",
    data() {
      return {};
    },
    
    created() {
    },
    
    mounted() {
    }
  };
</script>
