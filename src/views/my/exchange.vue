<template>
  <div class="exchange-container">
    <div class="title">
      兑换记录
    </div>
    <div class="exchange-content">
      <div class="exchange-head">
        <span><span v-if="pageRowCount">共{{pageRowCount}}条记录</span></span>
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
          <span>兑换量</span>
          <span>结算方式</span>
          <span>订单号</span>
          <span>钱包</span>
        </div>
        <div class="table" v-if="list&&list.length>0">
         <!-- <div class="list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>11</span>
            <span>11</span>
            <span>11</span>
            <span>支付宝</span>
            <span>11</span>
            <span style="text-align: center">
              <div class="btn-box">
                <div class="btn">查看</div>
              </div>
            </span>
          </div>-->
          <div class="list" v-for="(item,index) in list">
            <span>
              <i class="fa fa-square-o"></i>
            </span>
            <span>{{item.tradeType | tradeTypeFilter}}</span>
            <span>{{item.createTime | timeFilter}}</span>
            <span>{{item.tradeCnt}}</span>
            <span>支付宝</span>
            <span>{{item.tradeNo}}</span>
            <span>
              <div class="btn-box" @click="handleLookWallet(index)" v-if="!item.show">
                <div class="btn">查看</div>
              </div>
              <span v-else>{{item.userWalletAddress}}</span>
            </span>
          </div>
        </div>
        <div class="table" style="text-align: center;padding:10px;" v-if="list&&list.length<1">暂无记录</div>
      </div>
      <div class="page-container">
        <page v-if="list&&totalPage>1" :totalPage=totalPage :perPageNumber="perPageNumber" :getList=getList></page>
      </div>
    </div>
  </div>
</template>
<style lang="less" scroped>
  .exchange-container {
    .title {
      font-size: 18px;
      font-weight: normal;
      padding-bottom: 8px;
      line-height: 20px;
      border-bottom: 1px solid #E3E3E3;
    }
    .exchange-content {
      .exchange-head {
        padding: 10px;
        display: flex;
        font-size: 14px;
        span {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }
      .exchange-table {
        display: inline-block;
        .thread {
          background: #E3E3E3;
        }
        .thread {
          display: block;
          &:after {
            content: '';
            display: block;
            clear: both;
          }
        }
        .table .list {
          cursor: pointer;
          &:hover {
            background: #f6f8fa;
          }
          &:after {
            content: '';
            display: inline-block;
            clear: both;
            height: 100%;
            vertical-align: middle;
            
          }
        }
        span {
          padding: 12px 5px;
          text-align: left;
          white-space: nowrap;
          vertical-align: middle;
          display: inline-block;
          &:nth-child(1) {
            width: 30px;
            text-align: center;
          }
          &:nth-child(2) {
            width: 80px;
          }
          &:nth-child(3) {
            width: 140px;
          }
          &:nth-child(4) {
            width: 120px;
          }
          &:nth-child(5) {
            width: 120px;
          }
          &:nth-child(6) {
            width: 200px;
          }
          &:nth-child(7) {
            padding: 5px;
            width: 200px;
          }
        }
      }
    }
    .btn-box {
      .btn {
        border: 1px solid #cad2db;
        color: #171717;
        border-radius: 5px;
        padding: 5px 20px;
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
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
  import API from "../../api";
  import Page from "../../components/page.vue";
  import * as $$ from "../../assets/js/common";
  
  export default {
    name: "",
    components: {
      page: Page
    },
    data() {
      return {
        totalPage: 1,
        perPageNumber: 10,
        pageRowCount: "",
        list: ""
      };
    },
    
    created() {
    },
    
    mounted() {
      this.getList(1, this.perPageNumber);
    },
    methods: {
      getList: function (currentPage, number) {
        var _this = this;
        API.getOrderList({
          currentPage: currentPage,
          number: number
        }).then(function (data) {
          data = data || {};
          var page = data.page || {};
          _this.totalPage = page.itotalPageCount;
          _this.pageRowCount = page.itotalRowCount;
          _this.list = data.list || [];
        }).catch(function (err) {
          _this.list=[]
          alert(err.msg || "网络异常");
        });
        
      },
      handleLookWallet:function (index) {
        this.list[index].show=1
      }
    },
    filters: {
      tradeTypeFilter: function (val) {
        var text = "";
        switch (val) {
          case "ETH":
            text = "以太坊";
            break;
          case "BTC":
            text = "比特币";
            break;
          default:
            text = "";
        }
        return text;
      },
      timeFilter: function (val) {
        return $$.formatDate(val, "YYYY-MM-DD hh:mm:ss");
      }
    }
  };
</script>
