class Property {
	constructor(area, price) {
		this.area = area;
		this.price = price;
	}

	getPricePerSquareMeter() {
		return this.price / this.area;
	}
}

module.exports = Property;
