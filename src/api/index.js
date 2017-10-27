/**
 * Created by RJS on 2017/7/13.
 */
import axios from "axios";
import md5 from '../assets/js/des/md5'
import * as $$ from '../assets/js/common'

let baseURL = '/japi';

axios.defaults.baseURL = baseURL;

//控制loading的数组
let axiosLoadingStateArr = [];

const headers = {
    'appversion': '',
    'channel': '',
    'clientip': '',
    'height': '',
    'imei': '',
    'macaddress': '',
    'networktype': '',
    'osversion': '',
    'phonemodel': '',
    'platform': 'WAP',
    'serviceprovider': '',
    'sessiontoken': '',
    'sign': '',
    'timestamp': '',
    'width': '',
};
// http request 拦截器 在请求发出之前进行一些操作
axios.interceptors.request.use(
    config => {
        let session_token = encodeURI($$.getCookie('sessionToken') || '');
        let timestamp = new Date().getTime();
        let sign = md5(session_token + timestamp);
        let requestHeaders = Object.assign({}, headers, {
            sessiontoken: session_token,
            sign: sign,
            timestamp: timestamp
        });
        if ($$.is_weixn()) {
            requestHeaders.channel = 'wechat'
        }
        for (let key in requestHeaders) {
            let item = requestHeaders[key];
            config.headers.common[key] = item;
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
);
// 子类的拦截器，对结果是否正常做出判断
axios.interceptors.response.use(
    response => {
        let data = response.data;
        let status = response.status;
        let dataStatus = data.status;
        let backUrl = window.location.pathname + window.location.search;

        judgeHideLoading(response.config.url);//判断是否最后一个结束的请求，若是的话，隐藏loading

        if (status === 200 || status === 304) {
            switch (dataStatus) {
                case 1:
                    return data;
                    break;
                case 1000:
                case 1002:
                    $$.delCookie('sessionToken', {path: '/'});
                    let url = '/login?redirect=' + backUrl;
                    if ($$.is_weixn()) {
                        url = $$.WXauthoroize(backUrl)
                    }
                    window.location.replace(url);
                    break;
                default:
                    return Promise.reject(response);
            }
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response) {
            judgeHideLoading(error.response.config.url);//判断是否最后一个结束的请求，若是的话，隐藏loading
        } else {
            $$.loading.hide();
            axiosLoadingStateArr = [];
        }
    }
);

let API = {
    login(params) {
        return axiosAction({
            url: "/v2/user/login.json",
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    register(params) {
        return axiosAction({
            url: "/v2/user/register.json",
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    setSms(params) {
        return axiosAction({
            url: "/v2/user/sendSmsCode.json",
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //校验验证码
    checkSmsCode(params) {
        return axiosAction({url: "/v1/user/checkSmsCode.json", params: params, needLoading: true, needEncrypt: false});
    },
    getBalance() {
        return axiosAction({
            url: '/v1/mine/balance.json',
            params: {},
            needLoading: false,
            needEncrypt: false
        });
    },
    // 体验金
    getExperience() {
        return axiosAction({
            url: '/v1/mine/experience.json',
            params: {},
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询体验金明细
    getExperienceList(params) {
        let flag = false;
        if (params.pageNo == 1) {
            flag = true;
        }
        return axiosAction({
            url: "/v1/mine/experienceMoney.json",
            params: params,
            needLoading: flag,
            needEncrypt: false
        });
    },
    //使用体验金
    useExperience(params) {
        return axiosAction({url: "/v1/mine/useExperience.json", params: params, needLoading: true, needEncrypt: false});
    },
    //购买记录
    getBuyPurchase(params) {
        return axiosAction({url: '/v1/buy/purchase.json', params: params, needLoading: true, needEncrypt: false});
    },
    //购买活期明细
    getBuyPurchaseDetail(params) {
        let flag = false;
        if (params.pageNo == 1) {
            flag = true;
        }
        return axiosAction({
            url: '/v1/buy/current/purchaseDetail.json',
            params: params,
            needLoading: flag,
            needEncrypt: false
        });
    },
    //查询累计收益
    getCurrentQueryEarnings(params) {
        return axiosAction({
            url: '/v1/buy/current/queryEarnings.json',
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    //查询7日年化
    getCurrentQuerySevenRate(params) {
        return axiosAction({
            url: '/v1/buy/current/querySevenRate.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //购买定期明细
    getBuyRegularPurchaseDetail(params) {
        return axiosAction({
            url: '/v1/buy/regular/purchaseDetail.json',
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    // 购买定期投资明细
    getBuyRegularInvestPurchaseDetail(params) {
        return axiosAction({
            url: '/v1/buy/regular/invest/purchaseDetail.json',
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    // 查询借款信息
    getBorrow(params) {
        return axiosAction({
            url: '/v1/borrow/borrow.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    getBorrowRepayDetail(params) {
        return axiosAction({
            url: '/v1/borrow/repayDetail.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询提前结清
    getQuerySettle(params) {
        return axiosAction({
            url: '/v1/borrow/advance/querySettle.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //确认提前结清
    sendAdvanceSettle(params) {
        return axiosAction({
            url: '/v1/borrow/advance/settle.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //实名验证
    checkidcard(params) {
        return axiosAction({
            url: '/v2/user/checkidcard.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //查询用户信息
    getUserCardInfo(params) {
        return axiosAction({
            url: '/v1/user/getUserCardInfo.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询用户状态
    getUserStatus(params) {
        return axiosAction({
            url: '/v1/user/getUserStatus.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //重置登录密码
    resetLoginPwd(params) {
        return axiosAction({
            url: '/v2/user/resetPwd.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    // 忘记交易密码
    resetPayPassword(params) {
        return axiosAction({
            url: '/v2/user/resetPayPassword.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    // 修改交易密码
    changePayPassword(params) {
        return axiosAction({
            url: '/v2/user/changePayPassword.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //设置交易密码
    setPayPassword(params) {
        return axiosAction({
            url: '/v2/user/setPayPassword.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //校验支付密码
    checkPayPwd(params) {
        return axiosAction({
            url: '/v2/user/checkPayPwd.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //首页
    getProductIndex() {
        return axiosAction({
            url: '/v1/product/index.json',
            params: {},
            needLoading: false,
            needEncrypt: false
        });
    },
    //查询产品列表
    getProductList() {
        return axiosAction({
            url: '/v1/product/productList.json',
            params: {},
            needLoading: true,
            needEncrypt: false
        });
    },
    //微信 获取绑定信息
    getWXBindInfo(params) {
        return axiosAction({
            url: '/v2/weixin/getBindInfo.json',
            params: params,
            needLoading: false,
            needEncrypt: true
        });
    },
    //微信登录
    WXLogin(params) {
        return axiosAction({
            url: '/v2/user/wx/login.json',
            params: params,
            needLoading: false,
            needEncrypt: true
        });
    },
    //微信注册
    WXRegister(params) {
        return axiosAction({
            url: '/v2/user/wx/register.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //微信绑定手机号码检查
    WXcheckRegisterUser(params) {
        return axiosAction({
            url: '/v2/user/wx/checkRegisterUser.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    // 获取微信分享
    getWXShareSign(params) {
        return axiosAction({
            url: '/v1/weixin/getShareSign.json',
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },

    //意见反馈
    setAdvice(params) {
        return axiosAction({
            url: '/v1/mine/advice.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //资金流明细
    getMoneyFlow(params) {
        let flag = false;
        if (params.pageNo == 1) {
            flag = true;
        }
        return axiosAction({
            url: '/v1/mine/moneyFlow.json',
            params: params,
            needLoading: flag,
            needEncrypt: false
        });
    },
    //活期转入转出明细
    getRollOutDetail(params) {
        let flag = false;
        if (params.pageNo == 1) {
            flag = true;
        }
        return axiosAction({
            url: '/v1/buy/current/rollOutDetail.json',
            params: params,
            needLoading: flag,
            needEncrypt: false
        });
    },
    checkRealIdcard(params) {
        return axiosAction({
            url: '/v2/user/checkRealIdcard.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //查询66钱包
    queryCurrent(params) {
        return axiosAction({
            url: "/v1/product/queryCurrent.json",
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    //查询所有定期产品信息
    queryAllRegularProduct(params) {
        return axiosAction({
            url: "/v1/product/queryAllRegularProduct.json",
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    //查询66钱包加入信息
    queryJoinCurrent(params) {
        return axiosAction({
            url: "/v1/product/queryJoinCurrent.json",
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    //查询66钱包可转出金额
    queryCurrentMoney(params) {
        return axiosAction({
            url: "/v1/product/queryCurrentMoney.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //66钱包转出到余额
    drawAccount(params) {
        return axiosAction({
            url: "/v1/product/current/drawAccount.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //66钱包转出到定期
    drawRegular(params) {
        return axiosAction({
            url: "/v1/product/current/drawRegular.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    // 加入
    join(params) {
        return axiosAction({
            url: "/v1/product/join.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询66定存加入信息
    queryJoinRegular(params) {
        return axiosAction({
            url: "/v1/product/queryJoinRegular.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询产品配置
    queryProductConf(params) {
        return axiosAction({
            url: "/v1/product/queryProductConf.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询备付金
    queryProvisionCash(params) {
        return axiosAction({
            url: "/v1/product/queryProvisionCash.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //提现
    extractCash(params) {
        return axiosAction({
            url: "/v1/finance/extractCash.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询用户风险评估等级
    getRiskLevel(params) {
        return axiosAction({
            url: '/v1/user/queryRiskLevel.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //保存风险评估答案
    saveRiskAnswer(params) {
        return axiosAction({
            url: '/v1/user/saveRiskAnswer.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //风险评估问题列表
    getRiskQuestionList(params) {
        return axiosAction({
            url: '/v1/user/riskQuestionList.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询绑定银行卡
    bindBankInfo(params) {
        return axiosAction({
            url: "/v1/mine/bindBankInfo.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //更改银行卡
    changeBankCard(params) {
        return axiosAction({
            url: '/v2/bank/changeBankCard.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //绑定银行卡
    addBankCard(params) {
        return axiosAction({
            url: '/v2/bank/addBankCard.json',
            params: params,
            needLoading: true,
            needEncrypt: true
        });
    },
    //银行列表
    bankList(params) {
        return axiosAction({
            url: '/v1/bank/bankList.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询是否首投
    queryFirstInvest(params) {
        return axiosAction({
            url: '/v1/product/queryFirstInvest.json',
            params: params,
            needLoading: false,
            needEncrypt: false
        });
    },
    //帮助首页
    helpCenter(params) {
        return axiosAction({
            url: '/v1/help/helpCenter.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //帮助下级列表
    questionTypeList(params) {
        return axiosAction({
            url: '/v1/help/questionTypeList.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //帮助文章列表
    artlist(params) {
        return axiosAction({
            url: '/v1/help/artlist.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //帮助详情
    artdetail(params) {
        return axiosAction({
            url: '/v1/help/artdetail.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询备付金
    queryProvisionCash(params) {
        return axiosAction({
            url: '/v1/product/queryProvisionCash.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //充值渠道列表
    rechargeList() {
        return axiosAction({
            url: "/v1/finance/rechargeList.json",
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //获取充值渠道
    getRechargePayWay(params) {
        return axiosAction({
            url: '/v1/finance/getRechargePayWay.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //联动确认充值
    lianDongRecharge(params) {
        return axiosAction({
            url: '/v1/finance/recharge.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //联动充值发送验证码
    lianDongGetSms(params) {
        return axiosAction({
            url: '/v1/finance/getRechargeMsgCode.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //连连下单
    lianlianRecharge(params) {
        return axiosAction({
            url: '/v1/finance/getRechargePostInfo.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //查询66钱包转出页数据
    queryCurrentDraw(params) {
        return axiosAction({
            url: '/v1/product/queryCurrentDraw.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    },
    //产品协议接口
    queryProtocol(params) {
        return axiosAction({
            url: '/v1/product/queryProtocol.json',
            params: params,
            needLoading: true,
            needEncrypt: false
        });
    }

};

//发出请求
function axiosAction(actionParams) {

    var axiosUrl = actionParams.url;
    var needLoading = actionParams.needLoading;
    var axiosParams = actionParams.params;
    var needEncrypt = actionParams.needEncrypt;

    if (!axiosUrl) {
        return;
    }

    //是否出现loading
    needLoading = needLoading == undefined ? true : needLoading;
    if (needLoading) {
        axiosLoadingStateArr.push({
            url: baseURL + axiosUrl,
            value: 2
        });
        $$.loading.show();
    } else {
        axiosLoadingStateArr.push({
            url: baseURL + axiosUrl,
            value: 1
        });
    }

    //是否加密
    if (needEncrypt) {
        axiosParams = $$.ajaxParamEncrypt(axiosParams);
    }

    return axios.post(axiosUrl, axiosParams)
}


//判断是否消失loading
function judgeHideLoading(axiosUrl) {
    if (axiosLoadingStateArr.length > 0) {
        var flag = true;
        axiosLoadingStateArr.forEach(function (obj) {
            var key = obj.url;
            if (key == axiosUrl) {
                obj.value = 1;
            }
            let value = obj.value;
            if (value == 2) {
                flag = false;
            }
        });
        if (flag) {
            $$.loading.hide();
            axiosLoadingStateArr = [];
        }
    } else {
        $$.loading.hide();
        axiosLoadingStateArr = [];
    }
}

export default API

