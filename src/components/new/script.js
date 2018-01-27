import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import axios from 'axios'
import { BASE_URL } from '@/common/base'
export default {
	data() {
		return {
			tem: 'kai',
			list: []
		}
	},
	mounted() {
		var that = this;
		var url = BASE_URL + '/api/catelist';
		axios.get(url, {}).then((response) => {
			that.list=response.data.list
		}).catch((error) => {
			console.log(error)
		})
	},
	methods: {
		change(act) {
			this.tem = act
		}
	},
	computed: {

	},
	computed: {

	},
	components: {

	},
	watch: {

	}
}