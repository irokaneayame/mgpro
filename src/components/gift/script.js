import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
export default {
	data() {
		return {
			list: []
		}
	},
	mounted() {
		var url = BASE_URL + "/api/giftlist"
		var that = this;
		axios.get(url, {}).then((response) => {
			that.list = response.data.list;
		}).catch((error) => {
			console.log(error)
		})
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