import Vue from 'vue';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
export default {
	data() {
		return {
			
		}
	},
	mounted() {

	},
	methods: {
		tiao(){
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