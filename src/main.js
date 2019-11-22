import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//引用全局数据文件
import global_ from '@/util/Global'
Vue.prototype.GLOBAL = global_

//cookie插件
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
