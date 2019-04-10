new Vue({
	el: '#vue-app',
	data: {
		age: 28,
		x: 0,
		y: 0
	},
	methods: {
		addyear: function (years) {
			this.age += years;
		},
		subyear: function (years) {
			this.age -= years;
		},
		updateXY: function (event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});