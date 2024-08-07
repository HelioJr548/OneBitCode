var sun = {
	name: 'Sol',
	mass: 1.989 * Math.pow(10, 30),
	age: 4.603 * Math.pow(10, 9),
	planets: [],
};
var MilkyWayPlanet = (function () {
	function MilkyWayPlanet(name, mass, population) {
		this.name = name;
		this.mass = mass;
		this.population = population;
	}
	MilkyWayPlanet.prototype.createSatellite = function (name) {};
	return MilkyWayPlanet;
})();
var BigAsteroid = (function () {
	function BigAsteroid(name, mass, size) {
		this.name = name;
		this.mass = mass;
		this.size = size;
	}
	return BigAsteroid;
})();
var earth = {
	name: 'Terra',
	mass: 5.972 * Math.pow(10, 24),
	population: 8000000000,
	createSatellite: function (name) {},
	orbitedStar: sun,
};
