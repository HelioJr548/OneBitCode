const Character = require('./Character');

class Mage extends Character {
	constructor(name, health, strength, defense, magicPower) {
		super(name, health, strength, defense);
		this.magicPower = magicPower;
	}

	attack(target) {
		target.health -= this.strength + this.magicPower - target.defense;
	}

	heal(target) {
		target.health += this.magicPower * 2;
	}
}

module.exports = Mage;
