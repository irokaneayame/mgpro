import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/components/home"
import Kind from "@/components/kind"
import Gift from "@/components/gift"
import User from "@/components/user"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UserHeader from "@/components/userHeader"
import DetailFooter from "@/components/detailFooter"
import LoginIn from "@/components/login-in"
import Register from "@/components/register"
import Login from "@/components/login"
import LoginHeader from "@/components/loginHeader"
import RegisterHeader from "@/components/registerHeader"
export default new Router({
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			components: {
				header: Header,
				content: Home,
				footer: Footer
			}
		},
		{
			path: '/kind',
			name: 'kind',
			components: {
				header: Header,
				content: Kind,
				footer: Footer
			}
		},
		{
			path: '/gift',
			name: 'gift',
			components: {
				header: Header,
				content: Gift,
				footer: Footer
			}

		},
		{
			path: '/login',
			name: 'login',
			components: {
				header: LoginHeader,
				content: Login,
				footer: Footer
			}
		},
		{
			path: '/register',
			name: 'register',
			components: {
				header: RegisterHeader,
				content: Register,
				footer: Footer
			}
		},
		{
			path: '/user',
			name: 'user',
			components: {
				header: Header,
				content: User,
				footer: Footer
			},
			children: [{
				path: 'login-in',
				name: 'login-in',
				component: LoginIn
			}]
		},
		{
			path: '/detail/:goodsID',
			name: 'detail',
			components: {
				header: UserHeader,
				content: User,
				footer: DetailFooter
			}
		}
	]
})