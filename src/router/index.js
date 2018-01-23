import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/components/home"
import Kind from "@/components/kind"
import Cart from "@/components/cart"
import User from "@/components/user"
import HomeHeader from "@/components/homeHeader"
import KindHeader from "@/components/kindHeader"
import CartHeader from "@/components/cartHeader"
import UserHeader from "@/components/userHeader"
import Footer from "@/components/footer"
import DetailFooter from "@/components/detailFooter"
import LoginUp from "@/components/login-up"
import LoginIn from "@/components/login-in"
import Register from "@/components/register"
import Login from "@/components/login"
export default new Router({
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/kind",
			redirect: "/kindlist/20008833"
		},
		{
			path: '/home',
			name: 'home',
			components: {
				header: HomeHeader,
				content: Home,
				footer: Footer
			}
		},
		{
			path: '/kind',
			name: 'kind',
			components: {
				header: KindHeader,
				content: Kind,
				footer: Footer
			}
		},
		{
			path: '/kindlist/:classID',
			name: 'kindlist',
			components: {
				header: KindHeader,
				content: Kind,
				footer: Footer
			},
			props: {
				header: false,
				content: true,
				footer: false
			}
		},
		{
			path: '/cart',
			name: 'cart',
			components: {
				header: CartHeader,
				content: Cart,
				footer: Footer
			}
		},
		{
			path: '/user',
			name: 'user',
			components: {
				header: UserHeader,
				content: User,
				footer: Footer
			},
			children: [{
					path: 'login-up',
					name: 'login-up',
					component: LoginUp
				},
				{
					path: 'login-in',
					name: 'login-in',
					component: LoginIn
				},
				{
					path: 'register',
					name: 'register',
					component: Register
				},
				{
					path: 'login',
					name: 'login',
					component: Login
				}
			]
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