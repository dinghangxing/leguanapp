import {count} from "./type"
import getters from "./getters"
const state={
	num:0
}

const mutations={
	count(state){
		state.num++;
	}
}

export default{
	state,
	mutations,
	getters
}
