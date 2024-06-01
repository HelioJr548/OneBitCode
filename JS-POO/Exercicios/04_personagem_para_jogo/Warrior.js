const Character = require('./Character');

class Warrior extends Character {
	constructor(name, health, strength, defense, shield) {
		super(name, health, strength, defense);
		this.shield = shield;
		this.stance = 'offensive'                  ;
	}

	attack(target) {
		if (this.stance === 'offensive') {
			super.attack(target);
		}
	}

	switchStance() {
		if (this.stance === 'offensive') {
			this.stance = 'defensive';
			this.defense += this.shield;
		} else {
			this.stance = 'offensive';
			this.defense -= this.shield;
		}
	}
}

module.exports = Warrior;
