import axios from 'axios'
import { BASE_URL } from '@/common/base'
export default {
	data() {
		return {
			name: '',
			list: []
		}
	},
	mounted() {
		var value = localStorage.getItem('username');
		this.name = value;
		var url = BASE_URL + '/api/mycdk';
		var that = this;
		axios.get(url, {
			params: {
				user: that.name
			}
		}).then((response) => {
			that.list = response.data;
			console.log(that.list)
		}).catch((error) => {
			console.log(error)
		})
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