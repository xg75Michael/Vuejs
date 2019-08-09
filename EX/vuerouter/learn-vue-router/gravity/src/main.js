import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // using element-ui CSS
import locale from 'element-ui/lib/locale/lang/en' // define locale
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



// TODO:
// check vue-resource working -- Axios
// or using some API like Vuex.shopping-cart
// Firebase google to GET Request
// More Components as pages

// start to use vue-resource
// Globally
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI, { locale }); // using element-ui and locale lang

library.add(fab, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
	routes: Routes,
	mode: 'history' // 去掉URL中的#
});

Vue.config.productionTip = false

new Vue({
  	router, // 相当于 router: router
  	render: h => h(App)
  	
}).$mount('#app')
