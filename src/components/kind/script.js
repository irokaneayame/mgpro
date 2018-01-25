import axios from 'axios'
import { BASE_URL } from "@/common/base.js"
import Vue from 'vue'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
export default {
  data() {
    return {
      config: {
        arr_type: [],
        arr_theme: []
      },
      list: [],
      searchOpt: {pageNum:1},
      isEnd: 0
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
      this.searchOpt.pageNum=1;
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
      this.searchOpt.pageNum+=1;
      axios.get(url, {
        params: this.searchOpt
      }).then((response) => {
        that.list = that.list.concat(response.data.list);
        that.isEnd = response.data.isEnd;
      }).catch((error) => {
        console.log(error)
      })
    },
    clearInput(){
    	this.searchOpt.name=""
    	this.getList()
    }
  },
  computed: {
    
  },
  components: {

  },
  watch: {

  }
}