new Vue({
	el: '#vue-app',
	data: {
		name: 'Michael',
		job: 'Ninja'
	},
	methods: {
		greet: function (time) {
			return 'Good' + time + ' ' + this.name;
		}
	}
})