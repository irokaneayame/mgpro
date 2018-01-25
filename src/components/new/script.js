import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
	data() {
		return {
			tem: 'kai'
		}
	},
	mounted() {

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