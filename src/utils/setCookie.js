import Cookies from 'js-cookie'

const TokenKey = 'LG-Token'




export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token);
 
}
export function setUserInfo(res) {
	return Cookies.set("user", res);
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
