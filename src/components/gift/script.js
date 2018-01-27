import Vue from 'vue';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
export default {
	data() {
		return {
			list: [],
			pageNum: 1,
			isEnd: false
		}
	},
	mounted() {
		var url = BASE_URL + "/api/giftlist?pageNum=1"
		var that = this;
		axios.get(url, {}).then((response) => {
			that.list = response.data.list;
		}).catch((error) => {
			console.log(error)
		})
	},
	methods: {
		addList() {
			var that = this;
			this.pageNum += 1;
			var url = BASE_URL + "/api/giftlist?pageNum=" + this.pageNum;
			axios.get(url, {}).then((response) => {
				that.list = that.list.concat(response.data.list);
				if(response.data.page.pageNum == response.data.page.pageMax) {
					this.isEnd = true;
				}
			}).catch((error) => {
				console.log(error)
			})
		}
	},
	computed: {

	},
	components: {

	},
	watch: {

	}
}