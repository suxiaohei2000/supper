<template>
	<div class="package-container">
	  <div class="title">
      钱包地址
    </div>
    <div class="package-content">
      <div class="package-box">
        <div class="box-head">
          <span>
            BTC钱包
          </span>
          <div class="btn-box">
            <div class="btn">兑换</div>
          </div>
        </div>
        <div class="box-content">
          <div class="box-content-title">
            可用余额
          </div>
          <div class="balance-box">
            <span><b>110</b> BTC</span>
            <span><a href="/my/exchange">兑换记录</a></span>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<style lang="less" scroped>
  .package-container{
    .title{
      font-size: 18px;
      font-weight: normal;
      padding-bottom:8px;
      line-height: 20px;
      border-bottom:1px solid #E3E3E3;
    }
    .package-content{
      padding-top:10px;
      .package-box{
        border-radius: 3px;
        border:1px solid #E3E3E3;
        .box-head{
          padding:10px;
          background: #f6f8fa;
          display: flex;
          font-size:14px;
          span{
            flex:1;
            display: flex;
            align-items:center;
          }
        }
        .box-content{
          padding:10px;
          .box-content-title{
            margin-bottom:10px;
          }
          .balance-box{
            &:after{
              content:'';
              clear: both;
              display: block;
            }
            span:first-child{
              float: left;
              b{
                font-weight: 600;
                font-size:16px;
              }
            }
            span:last-child{
              float: right;
            }
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
