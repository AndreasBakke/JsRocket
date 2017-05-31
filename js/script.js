var car = {
	make: 'BMW',
	type: 'X4',
	color: 'black',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchcar:function(isOn) {
		console.log('turn car' +isOn)
		if(isOn== true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};

console.log('Hello there');