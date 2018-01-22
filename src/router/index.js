import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Header from '@/components/header'
import Footer from '@/components/footer'
import Home from '@/components/home'
import Kind from '@/components/kind'
import Cart from '@/components/cart'
import User from '@/components/user'

export default new Router({
	routes: [{
		path: '/',
		redirect: '/home',
		component: HelloWorld
	}, {
		path: '/home',
		name: 'home',
		component: Home
	}, {
		path: '/kind',
		name: 'kind',
		component: Kind
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/user',
		name: 'user',
		component: User
	}]
})