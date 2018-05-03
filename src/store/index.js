import Vue from "vue"
import Vuex from "vuex"
import actions from './actions'
import mutations from './mutations'
console.log(Vuex)
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
})
