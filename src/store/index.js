import Vue from "vue"
import Vuex from "vuex"
import actions from './actions'
import mutations from './mutations'
import user from './modules/user'

console.log(user)
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		mutations,
		user
	},
	actions
})
