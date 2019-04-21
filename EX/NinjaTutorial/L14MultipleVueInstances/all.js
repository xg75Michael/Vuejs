var appone = new Vue({
	el: '#vue-app-one',
	data: {
		title: 'Vue App One'
	},
	methods: {

	},
	computed: {
		greet: function () {
			return 'Hello from app one!';
		}
	}
});


var apptwo = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'Vue App Two'
	},
	methods: {
		changeTitleOne: function () {
			appone.title = "Title changed by AppTwo"
		}
	},
	computed: {
		greet: function () {
			return 'You dudes, this is app 2 speaking to ya!'
		}
	}
});

apptwo.title = 'Changed AppTwo title from outside'