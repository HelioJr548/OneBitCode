class Character {
	constructor(name, health, strength, defense) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.defense = defense;
	}

	attack(target) {
		target.health -= this.strength - target.defense;
	}
}

module.exports = Character;
