export default {
	data() {
		return {}
	},
	mounted() {
		/**
		 * 如果用户是登录的状态
		 * this.$router.push("/user/login")
		 * 如果未登录
		 * this.$router.push("/user/noLogin")
		 */
		if(localStorage.getItem("username")) {
			this.$router.push("/user/login-in")
		} else {
			this.$router.push("/user/login")
		}
	},
	methods: {

	},
	computed: {

	},
	components: {

	},
	watch: {

	}
}