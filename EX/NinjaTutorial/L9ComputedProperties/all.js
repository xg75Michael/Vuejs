new Vue({
	el: '#vue-app',
	data: {
		age: 20,
		a: 0,
		b: 0
		
	},
	// methods: {
	// 	addToA: function () {
	// 		console.log('addToA runs');
	// 		return this.a + this.age;
	// 	},
	// 	addToB: function () {
	// 		console.log('addToB runs');
	// 		return this.b + this.age;
	// 	}
	// },
	//Computed only runs when it is fired.
	computed: {
		addToA: function () {
			console.log('addToA runs');
			return this.a + this.age;
		},
		addToB: function () {
			console.log('addToB runs');
			return this.b + this.age;
		}
	}
});