// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Es6Promise from 'es6-promise'
import FastClick from 'fastclick'
Es6Promise.polyfill()
FastClick.attach(document.body)
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})