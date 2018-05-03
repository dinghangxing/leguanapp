import * as type from "./type";
export default({
	count({commit}){
		console.log(100);
		commit(type.count);
	}
})
