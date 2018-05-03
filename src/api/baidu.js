import fetch from "utils/fetch"
export function getSearchCont(wd){
	return fetch({
	    url: '/s', // 假地址 自行替换
	    method: 'get',
	    params:{ wd }
	})
}



