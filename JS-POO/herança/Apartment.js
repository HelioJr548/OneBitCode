const Property = require("./Property");

class Apartment extends Property {
	constructor(number, area, price) {
		super(area, price);
		this.number = number;
	}

	getFloor() {
		return this.number.slice(0, -2) > 0
			? `Apt: ${this.number} - ${this.number.slice(0, -2)}° Andar`
			: `Apt: ${this.number} - Térreo`;
	}
}

module.exports = Apartment;
