<template>
	<div class="exchange-container">
	  <div class="title">
      兑换记录
    </div>
    <div class="exchange-content">
      <div class="exchange-head">
        <span>共20条记录</span>
        <div class="btn-box">
          <div class="btn">导出记录</div>
        </div>
      </div>
      <div class="exchange-table">
        <div class="thread">
          <span>
            <i class="fa fa-square-o"></i>
          </span>
          <span>币种</span>
          <span>下单时间</span>
          <span>结算时间</span>
          <span>数量</span>
          <span>结算价(元)</span>
          <span>手续费(元)</span>
          <span>结算金额(元)</span>
          <span>结算方式</span>
          <span>订单号</span>
        </div>
        <div class="table">
          <div class="list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>以太经典</span>
            <span>2017-08-21</span>
            <span>2017-08-21</span>
            <span>1000</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>支付宝</span>
            <span>YTC2017082117213498765</span>
          </div>
          <div class="list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>以太经典</span>
            <span>2017-08-21</span>
            <span>2017-08-21</span>
            <span>1000</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>支付宝</span>
            <span>YTC2017082117213498765</span>
          </div>
          <div class="list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>以太经典</span>
            <span>2017-08-21</span>
            <span>2017-08-21</span>
            <span>1000</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>支付宝</span>
            <span>YTC2017082117213498765</span>
          </div>
          <div class="list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>以太经典</span>
            <span>2017-08-21</span>
            <span>2017-08-21</span>
            <span>1000</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>支付宝</span>
            <span>YTC2017082117213498765</span>
          </div>
          <div class="list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>以太经典</span>
            <span>2017-08-21</span>
            <span>2017-08-21</span>
            <span>1000</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>88888.10</span>
            <span>支付宝</span>
            <span>YTC2017082117213498765</span>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<style lang="less" scroped>
  .exchange-container{
    .title{
      font-size: 18px;
      font-weight: normal;
      padding-bottom:8px;
      line-height: 20px;
      border-bottom:1px solid #E3E3E3;
    }
    .exchange-content{
      .exchange-head{
        padding:10px;
        display: flex;
        font-size:14px;
        span{
          flex:1;
          display: flex;
          align-items:center;
        }
      }
      .exchange-table{
        display: inline-block;
        .thread{
          background: #E3E3E3;
        }
        .thread{
          display: block;
          &:after{
            content: '';
            display: block;
            clear: both;
          }
        }
        .table .list{
          cursor: pointer;
          &:hover{
            background: #f6f8fa;
          }
          &:after{
          content: '';
          display: block;
          clear: both;
        }}
        span{
          padding:10px 5px;
          text-align: left;
          white-space: normal;
          float: left;
          &:nth-child(1){
            width: 30px;
            text-align: center;
          }
          &:nth-child(2){
            width: 80px;
          }
          &:nth-child(3){
            width: 80px;
          }
          &:nth-child(4){
            width: 80px;
          }
          &:nth-child(5){
            width: 50px;
          }
          &:nth-child(6){
            width: 80px;
          }
          &:nth-child(7){
            width: 80px;
          }
          &:nth-child(8){
            width: 90px;
          }
          &:nth-child(9){
            width: 80px;
          }
          &:nth-child(10){
            width: 250px;
          }
        }
      }
    }
    .btn-box{
      .btn {
        border: 1px solid #cad2db;
        color: #171717;
        border-radius: 5px;
        padding: 5px 20px;
        cursor: pointer;
        display: inline-block;
        font-size:12px;
        &:hover {
          border-color: transparent;
          background: #43baff;
          color: #fff;
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
