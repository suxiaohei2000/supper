<template>
  <div class="home-container">
    <div class="slider-container" :style="sliderH">
      <div class="slider-content">
        <div class="slider-item">
          <div class="slider-item-title">
            最便捷的兑换平台
          </div>
          <div class="slider-item-info">
            快速 安全 私密
          </div>
          <div class="slider-button">
            <div class="btn active" @click="start">开始</div>
            <!--<div class="btn">帮助</div>-->
          </div>
        </div>
      
      </div>
     
    </div>
    <div class="slider-footer">
      <div class="slider-title">核心优势</div>
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
      <div class="slider-title black">支持8种货币</div>
      <p class="text-center">支持比特币、以太坊、以太经典、莱特币等8大主流币种，一键卖出，轻松收益</p>
      <div class="home-page-2-content">
        <div>
          <div class="hover">
            <div class="hover-content">
              <span>BTC</span>
              <span>比特币</span>
            </div>
           
          </div>
          <img src="../assets/images/pge-2-1.jpg" alt="">
        </div>
        <div>
          <div class="hover">
            <div class="hover-content">
              <span>LTC</span>
              <span>莱特币</span>
            </div>
            
          </div>
          <img src="../assets/images/pge-2-2.jpg" alt="">
        </div>
        <div>
          <div class="hover">
            <div class="hover-content">
              <span>ETH</span>
              <span>以太坊</span>
            </div>
            
          </div>
          <img src="../assets/images/pge-2-3.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="home-page-2-footer">
      <div class="slider-title">联系我们</div>
      <span>QQ群：681207350</span>
    </div>
    <div class="home-page-3">
      <div class="home-page-3-content">
        <div class="home-page-title">
          FAQ
        </div>
        <ul>
          <li>
            <span>免费吗</span>
            <span>只需要3%的手续费，便可以轻松兑换现金</span>
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
          还有问题？请加QQ群：681207350
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scroped>
  .home-container {
    min-width: 1200px;
    position: relative;
    margin-top:-62px !important;
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
        text-align: center;
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
            font-size: 72px;
            line-height: 100px;
          }
          .slider-item-info {
            font-size: 20px;
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
                background: #43baff;
                border-color: transparent;
              }
              &:hover{
                opacity:.9;
              }
              
            }
          }
        }
      }
      
    }
    .slider-title{
      font-size:30px;
      padding:10px 0;
      text-align: center;
      color:#fff;
      display: block;
      position: relative;
      letter-spacing: 0.2em;
      &:after{
        content: '';
        height:5px;
        width: 80px;
        background: #fff;
        display: block;
        margin:20px auto;
      }
      &.black{
        color:#000;
        &:after{
          background: #000;
        }
      }
    }
    .slider-footer {
      width: 100%;
      padding: 20px 0 40px;
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
      padding:60px 0 40px;
      &>p{
        font-size:16px;
      }
      .home-page-2-content{
        display: flex;
        margin-top:20px;
        &>div{
          flex: 1;
          position: relative;
         font-size:0;
          img{
            width: 100%;
            display: block;
          }
          .hover{
            display: none;
            position: absolute;
            top:0;
            left:0;
            height:100%;
            width: 100%;
            text-align: center;
            background: rgba(0,0,0,.5);
            cursor: pointer;
            
            &:after{
              content: '';
              display: inline-block;
              vertical-align: middle;
              height:100%;
            }
            .hover-content{
              display: inline-block;
              vertical-align: middle;
              font-size:14px;
              color:#fff;
              span{
                display: block;
                line-height:20px;
                font-weight: 600;
              }
            }
          }
          &:hover{
            .hover{
              display: block;
            }
          }
        }
      }
    }
    .home-page-2-footer {
      background-image: url(../assets/images/connect_bg.jpg);
      -moz-background-size: cover;
      -o-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      padding: 60px 0;
      text-align: center;
      &:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        font-size: 16px;
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
            &:first-child{
              padding-right:15%;
            }
            &:last-child{
              padding-left:15%;
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
    
  }
</style>
<script>
  export default {
    name: "",
    data() {
      return {
        sliderH:{
        }
      };
    },
    
    created() {
    },
    
    mounted() {
      var height=document.body.clientHeight
      this.sliderH=Object.assign({},this.sliderH,{height:height+'px'})
    },
    methods:{
      start:function () {
        this.$router.push('/mart')
      }
    }
  };
</script>
