import fetch from "utils/fetch"
import Md5 from "js-md5"
let Base64 = require('js-base64').Base64;

export function loginBy(tel,pwd){
	const pwds=Base64.encode(Md5(pwd));
	const data = {
	    tel,
	    pwd: pwds
	}
	return fetch({
	    url: '/lgh_uc/user/base/login', // 假地址 自行替换
	    method: 'post',
	    data
	})
}