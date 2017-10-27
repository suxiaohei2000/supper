/**
 * Created by RJS on 2017/7/19.
 */
import $$ from './cookie'
import des from './des/des'
// 版本号
export const version='1.0.0';

export function setCookie (cname, cvalue, options) {
	$$.cookie(cname, cvalue, options)
}
export function getCookie (cname) {
	return $$.cookie(cname)
}
export function delCookie (cname) {
	return $$.removeCookie(cname)
}
export function clearCookie(){
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i =  keys.length; i--;){
	        $$.removeCookie(keys[i])
        }
    }
}
export function formatAccount (value, type) {
	var fValue = "";
	value=String(value);
	if (type == "account") {
		fValue = value.replace(/\s/g, "").replace(/([0-9a-zA-Z]{4})(?=[0-9a-zA-Z])/g, "$1 ").trim();
	}
	if (type == "mobile") {
		fValue = value.replace(/\D|\s/g, "").replace(/(\d{3})(\d{0,4})/, "$1 $2 ").trim();
	}
	if (type == "IDAccount") {
		fValue = value.replace(/\s/g, "").replace(/(\d{6})(\d{0,4})(\d{0,4})/, "$1 $2 $3 ").trim();
	}
	if (type == "amount") {
		var rex = /\d{1,3}(?=(\d{3})+$)/g;
		fValue = value.replace(/,/g, "").replace(/^(-?)(\d+)((\.\d+)?)$/, function (s, s1, s2, s3) {
			return s1 + s2.replace(rex, "$&,") + s3;
		});
	}
	return fValue;
}
export function unFormatAccount (value, type) {
	var fValue = "";
	if (type == "account") {
		fValue = value.replace(/\s/g, "");
	}
	if (type == "mobile") {
		fValue = value.replace(/\D|\s/g, "");
	}
	if (type == "IDAccount") {
		fValue = value.replace(/\s/g, "");
	}
	if (type == "amount") {
		fValue = value.replace(/,/g, "")
	}
	return fValue;
}
//格式化时间
export function formatDate(value, formatString) {
	var date = new Date();
	if (value) {
		//兼容safari
		value=value.replace(/-/g,'/');
		date = new Date(value);
	}

	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (typeof formatString == "string") {
		formatString = formatString.replace(/yyyy|YYYY/i, year)
			.replace(/MM/i, month > 9 ? month : ["0", month].join(""))
			.replace(/dd|DD/i, day > 9 ? day : ["0", day].join(""))
			.replace(/HH|hh/i, hours > 9 ? hours : ["0", hours].join(""))
			.replace(/mm/i, minutes > 9 ? minutes : ["0", minutes].join(""))
			.replace(/ss/i, seconds > 9 ? seconds : ["0", seconds].join(""));
		return formatString;
	} else {
		return date.toLocaleString();
	}

}
export const session_storage={
	set:(name,value)=> {
		const type=(typeof value).toLowerCase();
		if(type!=='object'){
			value=value;
		}else{
			let storage_value=session_storage.get(name);
			value=Object.assign({},storage_value,value);
			value=JSON.stringify(value);
		}
		window.sessionStorage.setItem(name,value)
	},
	get:name=>{
		let value=window.sessionStorage.getItem(name)||'';
		try {
			value=JSON.parse(value);
		}catch(err) {
			return value;
		}
		return value
	},
    remove:name=>{
	    window.sessionStorage.removeItem(name);
    }
}

//检查手机号码格式
export function checkMobieFormat(val){
    let reg = /^1(3|4|5|7|8)\d{9}$/;
    if (reg.test(val)) {
        return true;
    } else {
        return false;
    }
}

//密码限制
export const pwdReg=/[0-9a-zA-Z_]{6,16}/;
export function isEmptyObject(obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}



//ajax传递参数加密
export function ajaxParamEncrypt(param) {
    var md5 = require('./des/md5.js');
    var encryptParam = {
        "data": des.encryptByDES(JSON.stringify(param)), //des加密data
        "key": des.encryptByRSA(des.config.key), //rsa加密key
        "timestamp": new Date().getTime()
    };
    encryptParam["sign"] = md5(des.genSignData(encryptParam));
    return encryptParam;
}
