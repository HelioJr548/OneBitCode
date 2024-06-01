const Thief = require('./Thief');
const Mage = require('./Mage');
const Warrior = require('./Warrior');

const thief = new Thief('Shadow', 100, 25, 10, 30);
const mage = new Mage('Gandalf', 80, 15, 5, 25);
const warrior = new Warrior('Conan', 120, 25, 20, 15);

console.log('Initial states:');
console.table({ thief, mage, warrior });

thief.attack(warrior);
console.log('\nThief atacou Warrior');

mage.attack(thief);
console.log('Mage atacou Thief');

mage.heal(warrior);
console.log('Mage curou Warrior');

warrior.switchStance();
console.log('Warrior mudou de postura');

warrior.attack(thief);
console.log(
	`${
		warrior.stance === 'offensive'
			? 'Warrior atacou Thief\n'
			: 'Warrior está em postura de defesa. Impossivel atacar\n'
	}`
);

console.log('After actions:');
console.table({ thief, mage, warrior });
