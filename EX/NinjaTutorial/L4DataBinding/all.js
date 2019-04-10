new Vue({
	el: '#vue-app',
	data: {
		name: 'Michael',
		job: 'Ninja',
		website: 'https://www.google.com',
		websiteTag: '<a href="https://www.google.com">The websiteTag using v-html</a>'
	},
	methods: {
		greet: function (time) {
			return 'Good' + time + ' ' + this.name;
		}
	}
})