import Vue from 'vue';
import { InfiniteScroll } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);
Vue.use(InfiniteScroll);
import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
export default {
	data() {
		return {
			list: [],
			pageNum: 1,
			isEnd: false,
			cdk:{
				show:false,
				con:'cdk'				
			},
			cdkLogin:false,
			cdkErr:false
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
		},
		getcdk(gid,pid,gname,pname){
			if(!localStorage.getItem('username')){
				this.cdkErr=true
			}else{
				var opt={
					gid,
					pid,
					gname,
					pname,
					user:localStorage.getItem('username')
				}
				var url = BASE_URL + "/api/getcdk";
				var that = this;
				axios.get(url,{params:opt}).then((response)=>{
					switch(response.data){
						case 2:
							that.cdkErr=true;
							break;
						case 4:
							console.log('服务器错误')
							break;
						default:
							that.cdk.con=response.data;
							that.cdk.show=true;
					}
				})
			}
			
		},
		copycdk(){
			var ta=document.getElementById("copyArea")
			ta.select(); // 选中文本
      		document.execCommand("copy");
      		console.log('copy')
			this.cdk.show=false;
		}
	},
	computed: {

	},
	components: {

	},
	watch: {

	}
}