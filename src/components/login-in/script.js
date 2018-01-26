export default {
	data() {
		return {
			name:''
		}
	},
	mounted() {
		var value = localStorage.getItem('username');
		this.name = value
	},
	methods: {
		quit() {
			localStorage.removeItem('username');
			this.$router.push('/home')
		}
	},
	computed: {

	},
	components: {

	},
	watch: {

	}
}