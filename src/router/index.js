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
			path: '/kindlist/:classID',
			name: 'kindlist',
			components: {
				header: Header,
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
			path: '/gift',
			name: 'gift',
			components: {
				header: Header,
				content: Gift,
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
					components: {
						header: Header,
						content: LoginIn,
						footer: Footer
					}
				},
				{
					path: 'register',
					name: 'register',
					components: {
						header: Header,
						content: Register,
						footer: Footer
					}
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