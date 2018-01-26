import Vue from 'vue'
import { Field, Button, Toast } from 'mint-ui';
import axios from 'axios'
import { BASE_URL } from '@/common/base'
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

export default {
	data() {
		return {
			phone: '18813007814',
			password: 'abcdefg',
			phoneState: "",
			passwordState: ""
		}
	},
	mounted() {

	},
	methods: {
		login() {
			var that = this;
			if(this.phone == "") {
				this.phoneState = 'warning';
				if(this.password == "") {
					this.passwordState = 'warning';
				} else {
					this.passwordState = '';
				}
			} else {
				this.phoneState = '';
				if(this.password == "") {
					this.passwordState = 'warning';
				} else {
					this.passwordState = '';
					var url = BASE_URL + '/api/login';
					axios.post(url, {
						phone: that.phone,
						password: that.password
					}).then((response) => {
						console.log(response)
						switch(response.data) {
							case 0:
								that.phoneState = 'error';
								break;
							case 2:
								that.phoneState = 'success';
								that.passwordState = 'error';
								break;
							case 4:
								that.phoneState = '';
								that.passwordState = '';
								alert('未知原因报错')
								break;
							default:
								that.phoneState = 'success';
								that.passwordState = 'success';
								localStorage.setItem('username', that.phone);
								that.$router.push('/home')
						}
					}).catch((error) => {
						console.log(error)
						alert('服务器可能在开小车')
					})
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