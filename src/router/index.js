import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const Index = () => import('views/index/');
const Home = () => import('views/index/Home');
const Main = () => import('views/main/');
const UserCenter = () => import('views/main/usercenter');
const Media = () => import('views/main/usercenter/media');
const Advert = () => import('views/main/usercenter/advert');
const MainDetail = () => import('views/main/MainDetail');
const MediaOrder = () => import('views/main/usercenter/media/MediaOrder');
const Login = () => import('views/login/');

export default new Router({
  routes: [
    { path: '*', redirect:"/"},
    { 
    	path: '/',
    	name: 'Index',
    	component: Index,
    	children:[
    		{ path: '/', name: 'Home', component: Home }
    	]
    },
    { 
    	path: '/main', name: 'Main', component: Main,
    	children:[
    		{ path: 'userCenter', name: 'UserCenter', component: UserCenter,
    			children:[
		    		{ path: 'media', name: 'Media', component: Media},
		    		{ path: 'advert', name: 'Advert', component: Advert},
		    	]
    		},
    		{ path: '*', redirect:"/"}
    	]
    },
    { 
    	path:"/mainDetail",name:"MainDetail",component:MainDetail,
    	children:[
    		{ path: 'mediaOrder', name: 'MediaOrder', component: MediaOrder},
    	]
    },
    { path: "/login", name: "Login", component:Login,}
  ]
})
