import router from './router'
import store from './store'

import { getToken } from 'utils/setCookie' // 验权
import { MessageBox } from 'mint-ui'


// register global progress.
const whiteList = ['/login', "/"]// 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) { // 判断是否有token
    next();
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
    	MessageBox.confirm('您需要登陆后才能进行访问，前往登录？').then(action => {
				next('/login')
			});
       // 否则全部重定向到登录页
    }
  }
})

