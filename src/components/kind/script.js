import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
import Vue from 'vue'
import { Button } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Radio } from 'mint-ui';

Vue.component(Radio.name, Radio);
Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);
Vue.component(Button.name, Button);
export default {
  data() {
    return {
      config: {
        arr_type: [],
        arr_theme: []
      },
      list: [],
      searchOpt: {
        pageNum: 1,
        type: 0,
        theme: 0
      },
      isEnd: 0,
      typePop: false,
      themePop: false,
      typeText:'全部',
      themeText:'全部'
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
    getList() {
      var url = BASE_URL + "/api/gamelist";
      var that = this;
      this.searchOpt.pageNum = 1;
      axios.get(url, {
        params: this.searchOpt
      }).then((response) => {
        that.list = response.data.list;
        that.isEnd = response.data.isEnd;
      }).catch((error) => {
        console.log(error)
      })
    },
    addList() {
      var url = BASE_URL + "/api/gamelist";
      var that = this;
      this.searchOpt.pageNum += 1;
      axios.get(url, {
        params: this.searchOpt
      }).then((response) => {
        that.list = that.list.concat(response.data.list);
        that.isEnd = response.data.isEnd;
      }).catch((error) => {
        console.log(error)
      })
    },
    clearInput() {
      this.searchOpt.name = ""
      this.getList()
    },
    showType() {
      this.typePop = true
    },
    showTheme() {
      this.themePop = true
    },
    checkType(){
    	this.typePop = false;
    },
    checkTheme(){
    	this.themePop = false;
    }
  },
  computed: {
    typeArr() {
      var arr = ['全部']
      this.config.arr_type.map((item, index) => {
        arr.push(item.text)
      })
      return arr
    },
    themeArr(){
    	var arr = ['全部']
      this.config.arr_theme.map((item, index) => {
        arr.push(item.text)
      })
      return arr
    },
  },
  components: {

  },
  watch: {
  	typeText(oldVal,newVal){
  		this.config.arr_type.map((item,index)=>{
  			if(item.text===newVal){
  				console.log(item)
  				this.searchOpt.type=item.id;
  				this.getList()
  			}
  		})
  	}
  }
}