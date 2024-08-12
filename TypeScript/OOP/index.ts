class Spaceship {
	private _name: string;
	protected captain: string;
	protected speed: number;

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	constructor(name: string, captain: string) {
		this._name = name;
		this.captain = captain;
		this.speed = 0;
	}

	public accelerate(rate: number, time: number) {
		this.speed = rate * time;
	}
}

class Fighter extends Spaceship {
	weapons: number;

	shoot() {
		for (let i = 0; i < this.weapons; i++) {
			console.log('Pew!');
		}
	}

	erase() {
		// Repare que não temos o erro em this.name
		// pois this.name  é o accessor de _name, mas
		// teríamos um erro se tentássemos utilizar this._name
		this.name = '';
		this.captain = '';
	}
}

let ship = new Spaceship('USS Enterprise', 'James T. Kirk');

ship._name = ''             // Por ser private, não é acessivel fora da superclasse
ship.speed = 50;            // Por ser protected, não é acessivel fora da super/subclasse
ship.accelerate(50, 10);    // Por ser public, é acessivel fora da classe
