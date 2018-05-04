import { loginBy } from 'api/login'
import { getToken, setToken, removeToken, setUserInfo } from 'utils/setCookie'

const user = {
  state: {
    token: getToken()
    
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
   
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
    	console.log(100)
      const tel = userInfo.phone.trim();
      return new Promise((resolve, reject) => {
        loginBy(tel, userInfo.password).then(response => {
          console.log(response);
          setToken(response.reObj.token);
          setUserInfo(JSON.stringify(response.reObj));
          commit('SET_TOKEN', response.reObj.token);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
	
  }
  
  
}

export default user
