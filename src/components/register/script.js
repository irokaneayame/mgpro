import Vue from 'vue'
import { Field, Button, Toast } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

import axios from "axios"
import { BASE_URL } from "@/common/base.js"

export default {
	data() {
		return {
			password: "",
			phone: "",
			captcha: "",
			phoneState: "",
			passwordState: "",
			aginpass: '',
			aginState: '',
			code: "",
			arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f']
		}
	},
	mounted() {
		for(var i = 0; i < 4; i++) {
			this.code += this.arr[Math.floor(Math.random() * this.arr.length)]
		}
	},
	methods: {
		changeCode() {
			var str = '';
			for(var i = 0; i < 4; i++) {
				str += this.arr[Math.floor(Math.random() * this.arr.length)]
			}
			this.code = str;
		},
		register() {
			var that = this;
			if(this.phone == "") {
				this.phoneState = "error";
				Toast({
					message: '用户名不能为空',
					position: 'bottom',
					duration: 2000
				});
			} else {
				if(this.password == "") {
					this.passwordState = "error";
					Toast({
						message: '密码不能为空',
						position: 'bottom',
						duration: 2000
					});
				} else {
					console.log(this.aginpass)
					if(this.aginpass == "") {
						this.aginState = "error";
						Toast({
							message: '请确认密码',
							position: 'bottom',
							duration: 2000
						});
					} else {
						if(this.captcha == "") {
							Toast({
								message: '验证码不能为空',
								position: 'bottom',
								duration: 2000
							});
						} else {
							if(this.password == this.aginpass) {
								this.aginState = "success";
								if(this.captcha == this.code) {
									var url = BASE_URL + "/api/register";
									axios.post(url, {
										phone: that.phone,
										password: that.password
									}).then((response) => {
										switch(response.data) {
											case 0:
												Toast({
													message: '用户名重复',
													position: 'bottom',
													duration: 2000
												});
												that.phoneState = "warning"
												break;
											case 1:
												Toast({
													message: '注册成功',
													position: 'bottom',
													duration: 2000
												});
												that.phoneState = "success"
												that.passwordState = "success"
												that.phoneState = "success"
												this.$router.push('/login')
												break;
											default:
												Toast({
													message: '注册失败',
													position: 'bottom',
													duration: 2000
												});
												that.phoneState = "warning"
										}
									}).catch((error) => {
										console.log(error)
									})
								} else {
									Toast({
										message: '验证码错误',
										position: 'bottom',
										duration: 2000
									});
								}
							} else {
								this.aginState = "error";
								Toast({
									message: '密码不一样',
									position: 'bottom',
									duration: 2000
								});
							}

						}
					}

				}
			}
		}
	},
	computed: {

	},
	components: {

	},
	watch: {
		
	}
}