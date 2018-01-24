import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
export default {
	data() {
		return {
			config: [{
				arr_type: [],
				arr_theme: []
			}],
			list: []
		}
	},
	mounted() {
		var url = BASE_URL + "/api/gamelist"
		var that = this;
		axios.get(url, {}).then((response) => {
			that.list = response.data.list;
			that.config.arr_type = response.data.config.arr_type;
			that.config.arr_theme = response.data.config.arr_theme;
		}).catch((error) => {
			console.log(error)
		})
	},
	methods: {
		 
	},
	computed: {
		getType(data) {
			return this.config.arr_type[data - 1].text
		}
	},
	components: {

	},
	watch: {

	}
}