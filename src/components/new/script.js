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
			giftlist: [],
			gamelist: [],
			pageNum: 1,
			isEnd: false,
			lenth: 3,
			color: ['#e65022', '#ec7450', '#eea44c']
		}
	},
	mounted() {
		var that = this;
		var url = BASE_URL + '/api/catelist';
		axios.get(url, {}).then((response) => {
			that.giftlist = response.data.list
		}).catch((error) => {
			console.log(error)
		})
		var url2 = BASE_URL + '/api/gamelist?pageSize=12';
		axios.get(url2, {}).then((response) => {
			that.gamelist = response.data.list
		}).catch((error) => {
			console.log(error)
		})
	},
	methods: {
		bianse(index){
			if(index<3){
				return this.color[index]
			}else{
				return '#fff'
			}
		},
		textcolor(index){
			if(index<3){
				return '#fff'
			}else{
				return '#adadad'
			}
		},
		chan(index) {
			if(index == 'more') {
				this.$router.push('/kind')
			} else {
				let url = this.gamelist[index].SITE;
				location.href = url;
			}
		},
		change(act) {
			this.tem = act;
		},
		load() {
			var that = this;
			this.pageNum += 1;
			var url = BASE_URL + '/api/catelist?pageNum=' + this.pageNum;
			axios.get(url, {}).then((response) => {
				that.giftlist = that.giftlist.concat(response.data.list)
				if(that.giftlist.length == response.data.page.itemSum) {
					that.isEnd = true
				}
			}).catch((error) => {
				console.log(error)
			})
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