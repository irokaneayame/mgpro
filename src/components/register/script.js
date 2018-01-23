import Vue from 'vue'
import { Field, Button, Toast } from 'mint-ui';

Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

import axios from "axios"
import { BASE_URL } from "@/common/base.js"

export default {
	data() {
		return {
			password: "abcdefg",
			phone: "18813007814",
			captcha: "1111",
			phoneState: "",
			passwordState: "",
			msg: "发送验证码",
			timer: "",
			codeState: false,
			registerState: "default"
		}
	},
	mounted() {

	},
	methods: {
		validatePhone(phone) {
			if(phone == "18813007814") {
				this.phoneState = "success"
			} else {
				this.phoneState = "error"
			}
		},
		validatePassword(password) {
			if(this.phone == "") {
				this.phoneState = "error"
			}
			if(password == "abcdefg") {
				this.passwordState = "success"
			} else {
				this.passwordState = "error"
			}
		},
		sendCode() {
			var num = 5;
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				if(num == 0) {
					num = 5;
					clearInterval(this.timer);
					this.msg = "发送验证码";
					this.codeState = false
				} else {
					this.msg = num + "s后重新发送";
					this.codeState = true
				}
				num--;
			}, 1000)
			//向后端请求数据

		},
		register() {
			var that = this;
			if(this.phone == "") {
				this.phoneState = "error"
			} else {
				if(this.password == "") {
					this.passwordState = "error"
				} else {
					if(this.captcha == "") {
						Toast({
							message: '验证码不能为空',
							position: 'bottom',
							duration: 2000
						});
					} else {
						//提交数据到服务器，进行验证
						var url = BASE_URL + "/api/register"
						axios.post(url, {
							params: {
								phone: that.phone,
								password: that.password
							}
						}).then((response) => {
							if(response == 0) {
								console.log('用户名已存在')
							} else {
								console.log('注册成功')
							}
							console.log(response)
						}).catch((error) => {
							console.log(error)
						})
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
		phone(newVal, oldVal) {
			if(newVal == "") {
				this.registerState = "default"
			} else {
				this.registerState = "primary"
				this.validatePhone(newVal)
			}

		},
		password(newVal, oldVal) {
			this.validatePassword(newVal)
		}
	}
}