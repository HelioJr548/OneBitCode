class Reservation {
	static BASE_FEE = 150;
	constructor(guests, room, roomType, days) {
		this.guests = guests;
		this.room = room;
		this.roomType = roomType;
		this.days = days;
		this.total =
			this.roomType === 'standard'
				? days * Reservation.BASE_FEE
				: days * Reservation.premiumFee;
	}

	static showBaseFee() {
		console.log(`Base fee is $${Reservation.BASE_FEE}`);
	}

	static get premiumFee() {
		return Reservation.BASE_FEE * 1.5;
	}
}

Reservation.showBaseFee();
console.log(`Premium fee is $${Reservation.premiumFee}`);

const r1 = new Reservation(3, '201', 'standard', 5);
console.log(r1);

Reservation.BASE_FEE = 200;

const r2 = new Reservation(2, '104', 'premium', 2);
console.log(r2);

Reservation.showBaseFee();
console.log(`Premium fee is $${Reservation.premiumFee}`);
