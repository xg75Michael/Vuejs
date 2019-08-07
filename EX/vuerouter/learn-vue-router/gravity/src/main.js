import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // using element-ui CSS
import locale from 'element-ui/lib/locale/lang/en' // define locale

// TODO:
// --DONE--take # out of the link: ninja #40
// check vue-resource working -- Axios
// or using some API like Vuex.shopping-cart
// Firebase google to GET Request
// More Components as pages

Vue.use(VueRouter);
Vue.use(ElementUI, { locale }); // using element-ui and locale lang

const router = new VueRouter({
	routes: Routes,
	mode: 'history' // 去掉URL中的#
});

Vue.config.productionTip = false

new Vue({
  	router, // 相当于 router: router
  	render: h => h(App)
  	
}).$mount('#app')
