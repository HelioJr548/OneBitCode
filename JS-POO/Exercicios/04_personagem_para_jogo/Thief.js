const Character = require('./Character');

class Thief extends Character {
	constructor(name, health, strength, defense, agility) {
		super(name, health, strength, defense);
		this.agility = agility;
	}

	attack(target) {
		target.health -= 2 * (this.strength - target.defense);
	}
}

module.exports = Thief;
