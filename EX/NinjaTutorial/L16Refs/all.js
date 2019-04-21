new Vue({
	el: '#vue-app',
	data: {
		output: 'What is your fav food?'
	},
	methods: {
		readRefs: function () {
			console.log(this.$refs.input.value);
			this.output = this.$refs.input.value;
			console.log(this.$refs.test.innerText);
		}
	}
})