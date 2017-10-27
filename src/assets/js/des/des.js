//js拼装工具:http://www.css88.com/tool/html2js/
import jsencrypt from 'jsencrypt';

var CryptoJS = require('./tripledes.js');
var des = {};
var JSEncrypt = jsencrypt.JSEncrypt;
des = {
    config: {
        "key": "qwerrewq", //des key
        //公钥
        "public_key": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmp9TZ1MpKMOu" +
        "jTALSL4mo8mWCtriAhOimedabCFNxNktKZVPxzU8ChNvK5yYDsWe9WL84IPFK6ktTixni" +
        "QN4Flc9tGAy8P/p0W8Gd2vMcixHwR5XH0VQif3mF1OQrvpiEeuwpevXRagu8kZGcPTgJX9SY9QonkuAqyATfJBn7twIDAQAB",
       /* "PRIVATE_KEY": "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAKan1NnUykow"
        + "66NMAtIviajyZYK2uICE6KZ51psIU3E2S0plU/HNTwKE28rnJgOxZ71Yvzgg8UrqS1OLGeJA3gWVz20YDLw/+nRbwZ3a8xyLEfBHlcfRVCJ/eYXU5Cu+mIR67Cl69dFqC7yRkZw9OAlf1Jj1CieS4CrIBN8kGfu3AgMBAAECgYAcWywlUEaHLyG47EMCnmIO5AePoSVtgK/RO6PfRyBjf/h5lRoeZ2+NHywCryfRswrStdn7Y+eKdqkQcveZfq4H/2g4Uwphb3FAY/Jw/VRMPvUiEFUWkvpRloipMvBTEXpUEPOZN5BvU/F0/L9urVVSTFDadIiMffpkC9vbZrTwAQJBAP7Om3iPjhd/imSJ"
        + "COLbBIecFHXdmwdcPwfamPg6mEEebuSi3fr5cRFmnUPnaxOdxSfN6PHzmHW0"
        + "qhvYj5WP07cCQQCnb5KHku7kHqDXXBlHZ+1UWq0ooiNIcbBAlfR4WUU1lmyo"
        + "oxnihxyLObpyLkHbqWGLRE+asyzSCE7fL+Lc1xgBAkEA5KAW6XbNBJKAZzJ5"
        + "kar4hoDp7tO2zUTcnTxrcpaIlC0tTOJBkHYOGJHc29ehwMkX5F4h/C4Yhsxi"
        + "sXd/Za/WQwJAMOmGC7bftKJB6EfOVq7EhPTsSsd6uSoFDAkCXrntXucvnN/w"
        + "qt0/eGiHz901ff7wMOfmvVGEUWL973MkudDYAQJAeVZXLaOG9STXh0Ccs5ZJ"
        + "vw7UCQBtXrG33XijM+XdwuU/ZVZkesXxXgr+oeeK+kwq6rpjQjN3pEuo8BgX" + "LYz7zA=="*/
    },

    //RSA 加密
    encryptByRSA: function (str) {
        var crypt = new JSEncrypt();
        crypt.setPublicKey(des.config.public_key);
        return crypt.encrypt(str);
    },
    /*//RSA解密
    decryptByRSA: function (str) {
        var crypt = new JSEncrypt();
        crypt.setPrivateKey(des.config.PRIVATE_KEY);
        return crypt.decrypt(str);
    },*/
    //DES  加密
    encryptByDES: function (message) {
        this.randomKey();
        var keyHex = CryptoJS.enc.Utf8.parse(des.config.key);
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    randomKey: function () {
        var baseStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var randomStr = "";
        for (var i = 0; i < 8; i++) {
            randomStr += baseStr[Math.floor(Math.random() * baseStr.length)]
        }
        this.config.key = randomStr;
    }
}

des.genSignData = function (jsonObject) {
    var content = "";
    var keys = []; //keys
    for (var target in jsonObject) {
        keys.push(target);
    }
    keys = keys.sort(); //排序


    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = jsonObject[key];
        if (typeof(value) == 'object') {
            var $keys = [];
            var $str = "{"
            for (var $k in value) {
                $str += $k + "=" + value[$k] + ", ";
            }
            value = $str.substring(0, $str.length - 2) + "}";
        }
        if ("sign" == key) {
            continue;
        }
        // 空串不参与签名
        if (value == null || value == undefined || value == "") {
            continue;
        }
        content += (i == 0 ? "" : "&") + key + "=" + value;
    }
    if (content != null && content != "" && content.substr(0, 1) == "&") {
        content = content.substr(1, content.length)
    }
    return content;
}

export default des