
var doCoolStuff = function () {
	var currentClassname = document.getElementById ('cool').className;

	if (currentClassname == 'cool') {
		document.getElementById ('cool').className = 'cool red';
	} else {
	document.getElementById ('cool').className = 'cool';
	}
}

var car= {

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