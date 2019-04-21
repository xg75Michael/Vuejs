Vue.component('greetingtag', {
	template: `<p>Hi there, this is a {{ name }}<button @click="changeName">Change Name</button></p>`,
	data: function () {
		return {
			name: 'Michael'
		}
	},
	methods: {
		changeName: function () {
			this.name = 'Ninja';
		}
	}
})

new Vue({
	el: '#vue-app-one'
});


new Vue({
	el: '#vue-app-two'
});