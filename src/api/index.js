/**
 * Created by RJS on 2017/7/13.
 */
var qs = require('qs');
import axios from "axios";
import md5 from '../assets/js/des/md5'
import * as $$ from '../assets/js/common'

let baseURL = '/platform/web';

axios.defaults.baseURL = baseURL;

//控制loading的数组
let axiosLoadingStateArr = [];

// http request 拦截器 在请求发出之前进行一些操作
/*axios.interceptors.request.use(
    config => {
        let session_token = encodeURI($$.getCookie('sessionToken') || '');
        let timestamp = new Date().getTime();
        let sign = md5(session_token + timestamp);
        return config
    },
    err => {
        return Promise.reject(err)
    }
);*/
// 子类的拦截器，对结果是否正常做出判断
axios.interceptors.response.use(
    response => {
        let data = response.data;
        let status = response.status;
        let code = data.code;
        if (status === 200 || status === 304) {
            switch (code) {
                case 0:
                    return data.value;
                    break;
                default:
                    return Promise.reject(data);
            }
        } else {
            return Promise.reject(data);
        }
    },
    error => {
    }
);

let API = {
    login(params) {
        return axiosAction({
            url: "/account/login",
            params: params,
            type:'get'
        });
    },
    register(params) {
        return axiosAction({
            url: "/account/add",
            params: params,
        });
    },

};

//发出请求
function axiosAction(actionParams) {
    var axiosUrl = actionParams.url;
    var axiosParams = actionParams.params;
    var needEncrypt = actionParams.needEncrypt;
    var type=actionParams.type

    if (!axiosUrl) {
        return;
    }
    //是否加密
    if (needEncrypt) {
        axiosParams = $$.ajaxParamEncrypt(axiosParams);
    }
    if(type=='get'){
      return axios.get(axiosUrl+'?'+qs.stringify(axiosParams))
    }
    return axios.post(axiosUrl, axiosParams)
}


export default API

